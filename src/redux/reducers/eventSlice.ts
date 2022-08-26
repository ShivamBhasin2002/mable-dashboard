import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, eventsState } from 'utility/typeDefinitions/reduxTypes';

export const eventsAsync = createAsyncThunk<null, void, thunkOptions>(
  'events/fetch',
  async (temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/data_quality`, {
        headers: { Authorization: `Token ${state.user.token}` },
        params: {
          shop: state.dashboard.shop?.shop,
          start_date: state.dashboard.start,
          end_date: state.dashboard.end
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
  N_Total: 0,
  AVG_T_DIFF: 0,
  status: 'idle',
  errorMsg: undefined
};

export const eventsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(eventsAsync.pending, (state) => {
      state.status = 'fetching';
    })
    .addCase(eventsAsync.fulfilled, (state) => {
      state.status = 'success';
    })
    .addCase(eventsAsync.rejected, (state) => {
      state.status = 'error';
    });
});

export default eventsReducer;
