import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { funnelAnalysisInitialState } from 'utility/constants/initialStates';
import { STATUSt_TYPE } from 'utility/constants/general';

export const funnelAnalysisAsync = createAsyncThunk<null, void, thunkOptions>(
  'funnelAnalysis/fetch',
  async (temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/data_quality`, {
        headers: { Authorization: `Token ${state.user.token}` },
        params: {
          shop: state.dashboard.shop?.shop,
          start_date: state.dashboard.dateRange[0],
          end_date: state.dashboard.dateRange[state.dashboard.dateRange.length - 1]
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
export const funnelAnalysisReducer = createReducer(funnelAnalysisInitialState, (builder) => {
  builder
    .addCase(funnelAnalysisAsync.pending, (state) => {
      state.status = STATUSt_TYPE.FETCHING;
    })
    .addCase(funnelAnalysisAsync.fulfilled, (state) => {
      state.status = STATUSt_TYPE.SUCCESS;
    })
    .addCase(funnelAnalysisAsync.rejected, (state) => {
      state.status = STATUSt_TYPE.ERROR;
    });
});

export default funnelAnalysisReducer;
