import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, eventsState } from 'utility/typeDefinitions/reduxTypes';
import { eventsInitialState } from 'utility/constants/initialStates';
import { statusType } from 'utility/constants/general';

export const eventsAsync = createAsyncThunk<null, void, thunkOptions>(
  'events/fetch',
  async (temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/data_quality`, {
        headers: { Authorization: `Token ${state.user.token}` },
        params: {
          shop: state.dashboard.shop?.shop,
          start_date: state.dashboard.dateRange[0],
          end_date: state.dashboard.dateRange[state.dashboard.dateRange.length - 1]
        }
      });
      if (data) {
        return data;
      }
      rejectWithValue('Data not found');
    } catch (error) {
      rejectWithValue('Data not found');
    }
  }
);

const initialState: eventsState = {
  ...eventsInitialState
};

export const eventsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(eventsAsync.pending, (state) => {
      state.status = statusType.Fetching;
    })
    .addCase(eventsAsync.fulfilled, (state) => {
      state.status = statusType.Success;
    })
    .addCase(eventsAsync.rejected, (state) => {
      state.status = statusType.Error;
    });
});

export default eventsReducer;
