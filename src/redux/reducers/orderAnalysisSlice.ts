import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { orderAnalysisInitialState } from 'utility/constants/initialStates';

export const orderAnalysisAsync = createAsyncThunk<null, void, thunkOptions>(
  'orderAnalysis/fetch',
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

export const orderAnalysis = createSlice({
  name: 'orderAnalysis',
  initialState: orderAnalysisInitialState,
  reducers: {
    setStatusSelected: (state, { payload }) => {
      state.statuSelected = payload;
    }
  }
});

export const { setStatusSelected } = orderAnalysis.actions;
export default orderAnalysis.reducer;
