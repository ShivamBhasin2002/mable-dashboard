import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { warningInitialState } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/general';

// eslint-disable-next-line
export const warningAsync = createAsyncThunk<any, void, thunkOptions>(
  'warning/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/v2/data-quality`, {
        headers: { Authorization: `Token ${state.user.token}` },
        params: {
          source_id: state.shop.active?.id,
          start_date: state.dates.dateRange[0],
          end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
        }
      });
      if (data) return data;
      rejectWithValue('Data not found');
    } catch (error) {
      rejectWithValue('Data not found');
    }
  }
);

export const warningReducer = createReducer(warningInitialState, (builder) => {
  builder
    .addCase(warningAsync.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(warningAsync.fulfilled, (state) => {
      state.status = STATUS_TYPE.SUCCESS;
    })
    .addCase(warningAsync.rejected, (state) => {
      state.status = STATUS_TYPE.ERROR;
    });
});

export default warningReducer;
