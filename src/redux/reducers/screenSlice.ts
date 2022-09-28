import { createSlice } from '@reduxjs/toolkit';

import { screenInitialState } from 'utility/constants/initialStates';

export const screenSlice = createSlice({
  name: 'screen',
  initialState: screenInitialState,
  reducers: {
    setScreen: (state, { payload }) => {
      state.activeScreen = payload;
    }
  }
});

export const { setScreen } = screenSlice.actions;
export default screenSlice.reducer;
