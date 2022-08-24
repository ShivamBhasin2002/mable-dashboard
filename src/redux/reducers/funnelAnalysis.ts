import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from 'redux/store';

export const funnelAnalysisAsync = createAsyncThunk<
  null,
  void,
  {
    dispatch: AppDispatch;
    state: RootState;
    rejectValue: string;
  }
>('funnelAnalysis/fetch', async (temp, { rejectWithValue, getState }) => {
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
});

export interface funnelAnalysisState {
  total_events: {
    'Page View': number;
    'Add to Cart': number;
    'Initiate Checkout': number;
    'Add Payment Info': number;
    Purchase: number;
  };
  status?: 'idle' | 'fetching' | 'success' | 'error';
  errorMsg?: string;
}

const initialState: funnelAnalysisState = {
  total_events: {
    'Page View': 0,
    'Add to Cart': 0,
    'Initiate Checkout': 0,
    'Add Payment Info': 0,
    Purchase: 0
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
