import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { orderAnalysisInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/general';
import { dashboardDataFetchCall } from 'utility/functions/apiCalls';
import { containsToday } from 'utility/functions/helper';

// eslint-disable-next-line
export const orderAnalysisAsync = createAsyncThunk<any, void, thunkOptions>(
  'orderAnalysis/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await dashboardDataFetchCall(
        {
          path: '/v2/order-analysis',
          token: state.user.token,
          params: {
            source_id: state.shop.active?.id,
            start_date: state.dates.dateRange[0],
            end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
          }
        },
        !containsToday(state.dates.dateRange)
      );
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
        state.tableData = payload.table_orders ?? orderAnalysisInitialState.tableData;
        state.status = STATUS_TYPE.SUCCESS;
      })
      .addCase(orderAnalysisAsync.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { setStatusSelected } = orderAnalysis.actions;
export default orderAnalysis.reducer;
