import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { eventsInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/enums';
import { dashboardDataFetchCall } from 'utility/functions/apiCalls';
import { containsToday } from 'utility/functions/helper';

// eslint-disable-next-line
export const eventsAsync = createAsyncThunk<any, void, thunkOptions>(
  'events/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await dashboardDataFetchCall(
        {
          path: '/v2/avg-time-difference',
          token: state.user.token,
          params: {
            source_id: state.shop.active?.id,
            start_date: state.dates.dateRange[0],
            end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
          }
        },
        !containsToday(state.dates.dateRange)
      );
      if (data) return data;
      return rejectWithValue('Data not found');
    } catch (error) {
      return rejectWithValue('Data not found');
    }
  }
);

export const eventsReducer = createReducer(eventsInitialState, (builder) => {
  builder
    .addCase(eventsAsync.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(eventsAsync.fulfilled, (state, { payload }) => {
      state.avgTimeDifference = payload?.avg_time_diff;
      state.correctCvOrders = payload?.correct_cv_orders;
      state.status = STATUS_TYPE.SUCCESS;
    })
    .addCase(eventsAsync.rejected, (state) => {
      state.status = STATUS_TYPE.ERROR;
    });
});

export default eventsReducer;
