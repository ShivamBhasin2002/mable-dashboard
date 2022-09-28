import { createSlice } from '@reduxjs/toolkit';

import { datesInitialState } from 'utility/constants/initialStates';

export const datesSlice = createSlice({
  name: 'dates',
  initialState: datesInitialState,
  reducers: {
    setDates: (state, { payload }) => {
      state.dateRange = payload;
    },
    setPreset: (state, { payload }) => {
      state.datePreset = payload;
    }
  }
});

export const { setDates, setPreset } = datesSlice.actions;
export default datesSlice.reducer;
