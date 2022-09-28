import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { filterOptionInitialState } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/general';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import axios from 'axios';

export const analyticsAsync = createAsyncThunk<
  {
    result_total_events: {
      total_purchases: number;
      total_add_payment_info: number;
      total_intitate_checkout: number;
      total_add_to_cart: number;
      total_page_view: number;
    };
    bydate: Array<{
      date: string;
      count_purchase: number;
      count_add_payment_info: number;
      count_intitate_checkout: number;
      count_add_to_cart: number;
      count_page_view: number;
    }>;
  },
  void,
  thunkOptions
>('analytics/fetch', async (temp, { rejectWithValue, getState }) => {
  const state = getState();
  try {
    const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/v2/events`, {
      headers: { Authorization: `Token ${state.user.token}` },
      params: {
        // start_date: '2022-04-01',
        start_date:state.dashboard.dateRange[0].format('YYYY-MM-DD'),
        // end_date: '2022-09-19',
        end_date:state.dashboard.dateRange[state.dashboard.dateRange.length - 1].format('YYYY-MM-DD'),
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
          state.events.AddPaymentInfo = !state.events.AddPaymentInfo;
          break;
        case 'AddToCart':
          state.events.AddToCart = !state.events.AddToCart;
          break;
        case 'InitiateCheckout':
          state.events.InitiateCheckout = !state.events.InitiateCheckout;
          break;
        case 'PageView':
          state.events.PageView = !state.events.PageView;
          break;
        case 'Purchase':
          state.events.Purchase = !state.events.Purchase;
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
        // console.log('this is payload');
        // console.log(payload);
        state.analyticReport.bydate = payload.bydate;
        state.analyticReport.result_total_events = payload.result_total_events;
      })
      .addCase(analyticsAsync.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { setColumnSelected } = Analytics.actions;
export default Analytics.reducer;
