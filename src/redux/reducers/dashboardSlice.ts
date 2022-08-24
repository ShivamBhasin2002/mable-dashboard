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
  warnings: { type: 'info' | 'warning' | 'error'; message: string; time: string }[];
  eventsPerDay: { date: string; value: string }[];
}

const initialState: dashboardState = {
  shops: undefined,
  shop: undefined,
  status: 'idle',
  errorMsg: undefined,
  start: '2022-07-19T00:00:00',
  end: '2022-07-23T00:00:00',
  warnings: [],
  eventsPerDay: []
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

export const { setShop, clearStatus } = dashboardSlice.actions;
export default dashboardSlice.reducer;
