/* eslint-disable */
import { createSlice } from '@reduxjs/toolkit';

export interface orderAnalysisState {}

const initialState: orderAnalysisState = {};

export const orderAnalysisSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {}
});

// export const {} = orderAnalysisSlice.actions;
export default orderAnalysisSlice.reducer;
