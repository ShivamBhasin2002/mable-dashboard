import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, shop, dashboardState } from 'utility/typeDefinitions/reduxTypes';
import { dashboardInitialState } from 'utility/constants/initialStates';

export const fetchShopAsync = createAsyncThunk<shop[], string | undefined, thunkOptions>(
  'dashboard/fetchShop',
  async (token, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_MA_URL}/get-user-shops`, {
        headers: { Authorization: `Token ${token}` }
      });
      if (res.data.shops.length > 0) return res.data.shops;
      rejectWithValue('No shops found for this user');
    } catch (error) {
      rejectWithValue('Error occured while fetching shops.');
    }
  }
);

const initialState: dashboardState = {
  ...dashboardInitialState
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
        if (state.shops) state.shops = [...state.shops, ...payload];
        else state.shops = payload;
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
