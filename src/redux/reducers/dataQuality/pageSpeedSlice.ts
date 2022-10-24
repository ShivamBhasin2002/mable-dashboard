import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { pageSpeedInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/enums';
import moment from 'moment';
import { dashboardDataFetchCall } from 'utility/functions/apiCalls';

// eslint-disable-next-line
export const pageSpeedAsync = createAsyncThunk<any, void, thunkOptions>(
  'pageSpeed/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await dashboardDataFetchCall(
        {
          path: `/v2/page-speed`,
          token: state.user.token,
          params: {
            source_id: state.shop.active?.id
          }
        },
        true
      );
      if (data) return data;
      return rejectWithValue('Data not found');
    } catch (error) {
      return rejectWithValue('Data not found');
    }
  }
);

export const pageSpeedReducer = createReducer(pageSpeedInitialState, (builder) => {
  builder
    .addCase(pageSpeedAsync.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(pageSpeedAsync.fulfilled, (state, { payload }) => {
      state.avg_loading_time_page =
        payload.avg_loading_time_page ?? pageSpeedInitialState.avg_loading_time_page;
      state.avg_loading_time_mable_script =
        payload.avg_loading_time_mable_script ??
        pageSpeedInitialState.avg_loading_time_mable_script;
      state.avg_contribution_time_mable_script =
        (payload.avg_contribution_time_mable_script ??
          pageSpeedInitialState.avg_contribution_time_mable_script) * 100;
      state.script_tag_found = payload.script_tag_found;
      state.script_tag_last_found = moment().diff(moment(payload.script_tag_last_found), 'h');
      state.status = STATUS_TYPE.SUCCESS;
    })
    .addCase(pageSpeedAsync.rejected, (state, { payload }) => {
      state.status = STATUS_TYPE.ERROR;
      state.errorMsg = payload;
    });
});

export default pageSpeedReducer;
