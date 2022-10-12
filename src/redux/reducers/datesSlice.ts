import { createSlice } from '@reduxjs/toolkit';
import moment from 'moment';

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
    refresh: (state, { payload }) => {
      if (
        payload ||
        moment().isBetween(
          moment(state.dateRange[0]).subtract(1),
          moment(state.dateRange[1]).add(1)
        )
      )
        state.refresh = !state.refresh;
    }
  }
});

export const { setDates, setPreset, refresh } = datesSlice.actions;
export default datesSlice.reducer;
