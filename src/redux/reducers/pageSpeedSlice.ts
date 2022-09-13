import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { pageSpeedInitialState } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/general';

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

export const pageSpeedReducer = createReducer(pageSpeedInitialState, (builder) => {
  builder
    .addCase(pageSpeedAsync.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(pageSpeedAsync.fulfilled, (state) => {
      state.status = STATUS_TYPE.SUCCESS;
    })
    .addCase(pageSpeedAsync.rejected, (state) => {
      state.status = STATUS_TYPE.ERROR;
    });
});

export default pageSpeedReducer;
