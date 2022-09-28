import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { pageSpeedInitialState } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/general';

// eslint-disable-next-line
export const pageSpeedAsync = createAsyncThunk<any, void, thunkOptions>(
  'pageSpeed/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/v2/page-speed`, {
        headers: { Authorization: `Token ${state.user.token}` },
        params: {
          source_id: state.shop.active?.id,
          start_date: state.dates.dateRange[0],
          end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
        }
      });
      if (data) return data;
      rejectWithValue('Data not found');
    } catch (error) {
      rejectWithValue('Data not found');
    }
  }
);

export const pageSpeedReducer = createReducer(pageSpeedInitialState, (builder) => {
  builder
    .addCase(pageSpeedAsync.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(pageSpeedAsync.fulfilled, (state, { payload }) => {
      state.AVG_LOADING_TIME_PAGE = payload.avg_loading_time_page;
      state.AVG_LOADING_TIME_MABLE_SCRIPT = payload.avg_loading_time_mable_script;
      state.AVG_CONTRIBUTION_TIME_MABLE_SCRIPT = payload.avg_contribution_time_mable_script * 100;
      state.status = STATUS_TYPE.SUCCESS;
    })
    .addCase(pageSpeedAsync.rejected, (state, { payload }) => {
      state.status = STATUS_TYPE.ERROR;
      state.errorMsg = payload;
    });
});

export default pageSpeedReducer;
