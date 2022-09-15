import { createSlice } from '@reduxjs/toolkit';

import { generalInitialState } from 'utility/constants/initialStates';

export const generalSlice = createSlice({
  name: 'general',
  initialState: generalInitialState,
  reducers: {
    setScreen: (state, { payload }) => {
      state.screen = payload;
    }
  }
});

export const { setScreen } = generalSlice.actions;
export default generalSlice.reducer;
