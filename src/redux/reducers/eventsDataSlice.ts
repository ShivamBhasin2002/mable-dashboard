import moment from 'moment';
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { eventsDataInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/general';

// eslint-disable-next-line
export const eventsDataAsync = createAsyncThunk<any, void, thunkOptions>(
  'eventsData/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/v2/events`, {
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
export const eventsDataReducer = createSlice({
  name: 'eventsData',
  initialState: eventsDataInitialState,
  reducers: {
    setEventSelected: (state, { payload }) => {
      state.eventSelected = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(eventsDataAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(eventsDataAsync.fulfilled, (state, { payload }) => {
        state.total_events = payload.result_total_events;
        // eslint-disable-next-line
        state.byDate = payload.bydate.map((events: any) => ({
          total_purchases: events.count_purchase,
          total_add_payment_info: events.count_add_payment_info,
          total_intitate_checkout: events.count_intitate_checkout,
          total_add_to_cart: events.count_add_to_cart,
          total_page_view: events.count_page_view,
          date: moment(events.date, 'YYYY-MM-DD').format('D. MMM')
        }));
        state.status = STATUS_TYPE.SUCCESS;
      })
      .addCase(eventsDataAsync.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { setEventSelected } = eventsDataReducer.actions;
export default eventsDataReducer.reducer;
