import { createSlice } from '@reduxjs/toolkit';

import { generalState } from 'utility/typeDefinitions/reduxTypes';
import { generalInitialState } from 'utility/constants/initialStates';

const initialState: generalState = {
  ...generalInitialState
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
