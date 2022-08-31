import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, pageSpeedState } from 'utility/typeDefinitions/reduxTypes';
import { pageSpeedInitialState } from 'utility/constants/initialStates';

export const pageSpeedAsync = createAsyncThunk<null, void, thunkOptions>(
  'pageSpeed/fetch',
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

const initialState: pageSpeedState = {
  ...pageSpeedInitialState
};

export const pageSpeedReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(pageSpeedAsync.pending, (state) => {
      state.status = 'fetching';
    })
    .addCase(pageSpeedAsync.fulfilled, (state) => {
      state.status = 'success';
    })
    .addCase(pageSpeedAsync.rejected, (state) => {
      state.status = 'error';
    });
});

export default pageSpeedReducer;
