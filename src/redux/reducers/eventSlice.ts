import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { eventsInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/general';
import { makeGetRequest } from 'utility/functions/apiCalls';

export const eventsAsync = createAsyncThunk<null, void, thunkOptions>(
  'events/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await makeGetRequest({
        path: '',
        token: state.user.token,
        params: {
          source_id: state.shop.active?.id,
          start_date: state.dates.dateRange[0],
          end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
        }
      });
      if (data) {
        return data;
      }
      rejectWithValue('Data not found');
    } catch (error) {
      rejectWithValue('Data not found');
    }
  }
);

export const eventsReducer = createReducer(eventsInitialState, (builder) => {
  builder
    .addCase(eventsAsync.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(eventsAsync.fulfilled, (state) => {
      state.status = STATUS_TYPE.SUCCESS;
    })
    .addCase(eventsAsync.rejected, (state) => {
      state.status = STATUS_TYPE.ERROR;
    });
});

export default eventsReducer;
