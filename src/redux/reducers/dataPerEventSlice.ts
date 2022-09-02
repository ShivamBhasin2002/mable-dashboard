import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, dataPerEventState } from 'utility/typeDefinitions/reduxTypes';
import { dataPerEventsInitialState } from 'utility/constants/initialStates';
import { statusType } from 'utility/constants/general';

export const dataPerEventAsync = createAsyncThunk<null, void, thunkOptions>(
  'dataPerEvent/fetch',
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

const initialState: dataPerEventState = {
  ...dataPerEventsInitialState
};

export const dataPerEvent = createSlice({
  name: 'dataPerEvent',
  initialState,
  reducers: {
    setEventSelected: (state, { payload }) => {
      state.eventSelected = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataPerEventAsync.pending, (state) => {
        state.status = statusType.Fetching;
      })
      .addCase(dataPerEventAsync.fulfilled, (state) => {
        state.status = statusType.Success;
      })
      .addCase(dataPerEventAsync.rejected, (state) => {
        state.status = statusType.Error;
      });
  }
});

export const { setEventSelected } = dataPerEvent.actions;
export default dataPerEvent.reducer;
