import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch } from 'redux/store';

export const fetchShopAsync = createAsyncThunk<
  shop[],
  string | undefined,
  { dispatch: AppDispatch; state: dashboardState; rejectValue: string }
>('dashboard/fetchShop', async (token, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_MA_URL}/get-user-shops`, {
      headers: { Authorization: `Token ${token}` }
    });
    if (res.data.shops.length > 0) return res.data.shops;
    rejectWithValue('No shops found for this user');
  } catch (error) {
    rejectWithValue('Error occured while fetching shops.');
  }
});

type shop = {
  _id: {
    $oid: string;
  };
  shop: string;
  __v: number;
  domain: string;
  domainPrefix: string;
  isActive: true;
  userId: string;
};

export interface dashboardState {
  shops: shop[] | undefined;
  shop: shop | undefined;
  status: 'idle' | 'pending' | 'success' | 'error';
  errorMsg: string | undefined;
  start: Date | string;
  end: Date | string;
  AVG_T_DIFF: number;
  N_Total: number | string;
  total_events: {
    'Page View': number;
    'Add to Cart': number;
    'Initiate Checkout': number;
    'Add Payment Info': number;
    Purchase: number;
  };
  dataContainedPerEventBarChart: {
    _id: string;
    attribute_quality: string | undefined;
    event_quality: string | undefined;
  }[];
  dataContaindedPerEventDoughnutChart: {
    backend: number;
    frontend: number;
    mableEngine: number;
    unavailable: number;
  };
  attribution: number;
  event: number;
  totatlAttribution: number;
  totalEvent: number;
  warnings: { type: 'info' | 'warning' | 'error'; message: string; time: string }[];
  eventsPerDay: { date: string; value: string }[];
  shopifyOrders: number;
  ordersWithCorrectCV: number;
  recievedByFB: number;
  avgDelieveryTime: number;
  eventSelected: 'Purchase' | 'Add Payment Info' | 'Initiat Checkout' | 'Add to Cart' | 'Page View';
  AttributionParameters: {
    'User IP': number;
    'User Agent': number;
    Email: number;
    Phone: number;
    'First Name': number;
    'Last Name': number;
    'Date Of Birth': number;
    State: number;
    Country: number;
    City: number;
    'Zip Code': number;
    Currency: number;
    'Total Price': number;
    'Order Id': number;
  };
  EventParameters: {
    example1: number;
    example2: number;
    example3: number;
    example4: number;
    example5: number;
    example6: number;
    example7: number;
  };
}

const initialState: dashboardState = {
  shops: undefined,
  shop: undefined,
  status: 'idle',
  errorMsg: undefined,
  start: '2022-07-19T00:00:00',
  end: '2022-07-23T00:00:00',

  N_Total: 0,
  AVG_T_DIFF: 0,
  total_events: {
    'Page View': 0,
    'Add to Cart': 0,
    'Initiate Checkout': 0,
    'Add Payment Info': 0,
    Purchase: 0
  },
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
  warnings: [],
  eventsPerDay: [],
  shopifyOrders: 0,
  ordersWithCorrectCV: 0,
  recievedByFB: 0,
  avgDelieveryTime: 0,
  eventSelected: 'Purchase',
  AttributionParameters: {
    'User IP': 0.8,
    'User Agent': 0.8,
    Email: 0.8,
    Phone: 0.8,
    'First Name': 0.8,
    'Last Name': 0.8,
    'Date Of Birth': 0.8,
    State: 0.8,
    Country: 0.8,
    City: 0.8,
    'Zip Code': 0.8,
    Currency: 0.8,
    'Total Price': 0.8,
    'Order Id': 0.8
  },
  EventParameters: {
    example1: 0.8,
    example2: 0.8,
    example3: 0.8,
    example4: 0.8,
    example5: 0.8,
    example6: 0.8,
    example7: 0.8
  }
};

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState,
  reducers: {
    setShop: (state, { payload }) => {
      state.shop = payload;
    },
    clearStatus: (state) => {
      state.errorMsg = undefined;
      state.status = 'idle';
    },
    setEventSelected: (state, { payload }) => {
      state.eventSelected = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopAsync.pending, (state) => {
        state.status = 'pending';
      })
      .addCase(fetchShopAsync.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.shops = payload;
        state.shop = payload[0];
      })
      .addCase(fetchShopAsync.rejected, (state, { payload }) => {
        state.status = 'error';
        state.errorMsg = payload;
      });
  }
});

export const { setShop, clearStatus, setEventSelected } = dashboardSlice.actions;
export default dashboardSlice.reducer;
