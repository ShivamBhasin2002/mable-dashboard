import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, funnelAnalysisState } from 'utility/typeDefinitions/reduxTypes';

export const funnelAnalysisAsync = createAsyncThunk<null, void, thunkOptions>(
  'funnelAnalysis/fetch',
  async (temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/data_quality`, {
        headers: { Authorization: `Token ${state.user.token}` },
        params: {
          shop: state.dashboard.shop?.shop,
          start_date: state.dashboard.start,
          end_date: state.dashboard.end
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
  total_events: {
    'Page View': 3000,
    'Add to Cart': 20000,
    'Initiate Checkout': 5000,
    'Add Payment Info': 3000,
    Purchase: 300
  },
  status: 'idle',
  errorMsg: undefined
};

export const funnelAnalysisReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(funnelAnalysisAsync.pending, (state) => {
      state.status = 'fetching';
    })
    .addCase(funnelAnalysisAsync.fulfilled, (state) => {
      state.status = 'success';
    })
    .addCase(funnelAnalysisAsync.rejected, (state) => {
      state.status = 'error';
    });
});

export default funnelAnalysisReducer;
