import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';

import { thunkOptions } from '@utility/typeDefinitions/reduxTypes';
import { pageSpeedInitialState } from '@utility/constants/initialStates';

import { STATUS_TYPE } from '@utility/constants/enums';
import moment from 'moment';
import { dashboardDataFetchCall } from '@utility/functions/apiCalls';

// eslint-disable-next-line
export const pageSpeedAsync = createAsyncThunk<any, void, thunkOptions>(
  'pageSpeed/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await dashboardDataFetchCall(
        {
          path: `/v2/page-speed`,
          token: state.user.token ?? '',
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
      state.avgLoadingTimePage =
        payload.avgLoadingTimePage ?? pageSpeedInitialState.avgLoadingTimePage;
      state.avgLoadingTimeMableScript =
        payload.avgLoadingTimeMableScript ?? pageSpeedInitialState.avgLoadingTimeMableScript;
      state.avgContributionTimeMableScript =
        (payload.avgContributionTimeMableScript ??
          pageSpeedInitialState.avgContributionTimeMableScript) * 100;
      state.scriptTagNotFound = payload.scriptTagNotFound;
      state.scriptTagLastFound = moment().diff(moment(payload.scriptTagLastFound), 'h');
      state.status = STATUS_TYPE.SUCCESS;
    })
    .addCase(pageSpeedAsync.rejected, (state, { payload }) => {
      state.status = STATUS_TYPE.ERROR;
      state.errorMsg = payload;
    });
});

export default pageSpeedReducer;
