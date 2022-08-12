import { createSlice } from '@reduxjs/toolkit';

export interface dashboardState {
  screen: 'Dashboard' | 'Order Analysis' | 'Event Quality' | 'Settings' | 'Tutorial';
}

const initialState: dashboardState = {
  screen: 'Dashboard'
};

export const dashboardSlice = createSlice({
  name: 'general',
  initialState,
  reducers: {
    setScreen: (state, { payload }) => {
      state.screen = payload;
    }
  }
});

export const { setScreen } = dashboardSlice.actions;
export default dashboardSlice.reducer;
