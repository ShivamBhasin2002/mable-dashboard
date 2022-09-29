import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { filterOptionInitialState } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/general';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import axios from 'axios';

export const analyticsAsync = createAsyncThunk<
  {
    total_events: {
      purchase: number;
      add_payment_info: number;
      intitate_checkout: number;
      add_to_cart: number;
      page_view: number;
    };
    by_date: {
      date: string;
      purchase: number;
      add_payment_info: number;
      intitate_checkout: number;
      add_to_cart: number;
      page_view: number;
    }[];
  },
  void,
  thunkOptions
>('analytics/fetch', async (temp, { rejectWithValue, getState }) => {
  const state = getState();
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/v2/events`, {
      headers: { Authorization: `Token ${state.user.token}` },
      params: {
        start_date: state.dates.dateRange[0].format('YYYY-MM-DD'),
        end_date: state.dates.dateRange[state.dates.dateRange.length - 1].format('YYYY-MM-DD'),
        source_id: 43
      }
    });
    if (data) {
      return data;
    }
    rejectWithValue('Data not found');
  } catch (error) {
    rejectWithValue('Data not found');
  }
});

export const Analytics = createSlice({
  name: 'Analytics',
  initialState: filterOptionInitialState,
  reducers: {
    setColumnSelected: (state, { payload }) => {
      switch (payload) {
        case 'AddPaymentInfo':
          state.selected_events.AddPaymentInfo = !state.selected_events.AddPaymentInfo;
          break;
        case 'AddToCart':
          state.selected_events.AddToCart = !state.selected_events.AddToCart;
          break;
        case 'InitiateCheckout':
          state.selected_events.InitiateCheckout = !state.selected_events.InitiateCheckout;
          break;
        case 'PageView':
          state.selected_events.PageView = !state.selected_events.PageView;
          break;
        case 'Purchase':
          state.selected_events.Purchase = !state.selected_events.Purchase;
          break;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(analyticsAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(analyticsAsync.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.analyticReport.total_events = payload.total_events;
        state.analyticReport.by_date = payload.by_date;
      })
      .addCase(analyticsAsync.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { setColumnSelected } = Analytics.actions;
export default Analytics.reducer;
