import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { thunkOptions, dataPerEventState } from 'utility/typeDefinitions/reduxTypes';

export const dataPerEventAsync = createAsyncThunk<null, void, thunkOptions>(
  'dataPerEvent/fetch',
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

const initialState: dataPerEventState = {
  dataContainedPerEventBarChart: [],
  dataContaindedPerEventDoughnutChart: {
    backend: 0,
    frontend: 0,
    mableEngine: 0,
    unavailable: 0
  },
  attribution: 0,
  event: 0,
  totalEvent: 7,
  totatlAttribution: 13,
  eventSelected: 'Purchase',
  AttributionParameters: {
    'User IP': 0,
    'User Agent': 0,
    Email: 0,
    Phone: 0,
    'First Name': 0,
    'Last Name': 0,
    'Date Of Birth': 0,
    State: 0,
    Country: 0,
    City: 0,
    'Zip Code': 0,
    Currency: 0,
    'Total Price': 0,
    'Order Id': 0
  },
  EventParameters: {
    example1: 0,
    example2: 0,
    example3: 0,
    example4: 0,
    example5: 0,
    example6: 0,
    example7: 0
  },
  status: 'idle',
  errorMsg: undefined
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
        state.status = 'fetching';
      })
      .addCase(dataPerEventAsync.fulfilled, (state) => {
        state.status = 'success';
      })
      .addCase(dataPerEventAsync.rejected, (state) => {
        state.status = 'error';
      });
  }
});

export const { setEventSelected } = dataPerEvent.actions;
export default dataPerEvent.reducer;
