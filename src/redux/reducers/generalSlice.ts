import { createSlice } from '@reduxjs/toolkit';

export interface generalState {
  screen: 'Dashboard' | 'Order Analysis' | 'Event Quality' | 'Settings' | 'Tutorial';
}

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
