import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { orderAnalysisInitialState } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/general';

// eslint-disable-next-line
export const orderAnalysisAsync = createAsyncThunk<any, void, thunkOptions>(
  'orderAnalysis/fetch',
  async (temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/v2/order-analysis`, {
        headers: { Authorization: `Token ${state.user.token}` },
        params: {
          source_id: state.dashboard.shop?.source_id,
          start_date: state.dashboard.dateRange[0],
          end_date: state.dashboard.dateRange[state.dashboard.dateRange.length - 1]
        }
      });
      if (data) return data;
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
      state.statusSelected = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(orderAnalysisAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(orderAnalysisAsync.fulfilled, (state, { payload }) => {
        state.tableData = payload.table_orders;
        state.status = STATUS_TYPE.SUCCESS;
      })
      .addCase(orderAnalysisAsync.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { setStatusSelected } = orderAnalysis.actions;
export default orderAnalysis.reducer;
