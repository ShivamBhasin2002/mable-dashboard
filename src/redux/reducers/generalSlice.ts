import { createSlice } from '@reduxjs/toolkit';

import { generalState } from 'utility/typeDefinitions/reduxTypes';

const initialState: generalState = {
  screen: 'Dashboard'
};

export const generalSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setScreen: (state, { payload }) => {
      state.screen = payload;
    }
  }
});

export const { setScreen } = generalSlice.actions;
export default generalSlice.reducer;
