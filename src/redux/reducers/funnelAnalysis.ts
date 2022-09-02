import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, funnelAnalysisState } from 'utility/typeDefinitions/reduxTypes';
import { funnelAnalysisInitialState } from 'utility/constants/initialStates';
import { statusType } from 'utility/constants/general';

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

const initialState: funnelAnalysisState = {
  ...funnelAnalysisInitialState
};

export const funnelAnalysisReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(funnelAnalysisAsync.pending, (state) => {
      state.status = statusType.Fetching;
    })
    .addCase(funnelAnalysisAsync.fulfilled, (state) => {
      state.status = statusType.Success;
    })
    .addCase(funnelAnalysisAsync.rejected, (state) => {
      state.status = statusType.Error;
    });
});

export default funnelAnalysisReducer;
