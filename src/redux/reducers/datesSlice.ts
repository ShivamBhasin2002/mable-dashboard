import { createSlice } from '@reduxjs/toolkit';

import { datesInitialState } from 'utility/constants/initialStates';

export const datesSlice = createSlice({
  name: 'dates',
  initialState: datesInitialState,
  reducers: {
    setDates: (state, { payload }) => {
      state.dateRange = payload;
      localStorage.setItem('dateRange', JSON.stringify(payload));
      if (!state.datePreset) localStorage.removeItem('datePreset');
    },
    setPreset: (state, { payload }) => {
      state.datePreset = payload;
      if (state.datePreset) localStorage.setItem('datePreset', state.datePreset);
    },
    refresh: (state) => {
      state.refresh = !state.refresh;
    }
  }
});

export const { setDates, setPreset, refresh } = datesSlice.actions;
export default datesSlice.reducer;
