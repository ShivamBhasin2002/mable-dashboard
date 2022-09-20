import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, shop } from 'utility/typeDefinitions/reduxTypes';
import { dashboardInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/general';

export const fetchShopAsync = createAsyncThunk<shop[], string | undefined, thunkOptions>(
  'dashboard/fetchShop',
  async (token, { rejectWithValue }) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_MA_URL}/get-user-shops`, {
        headers: { Authorization: `Token ${token}` }
      });
      if (res.data.shops.length > 0) {
        res.data.shops[0].source_id = 43;
        return res.data.shops;
      }
      rejectWithValue('No shops found for this user');
    } catch (error) {
      rejectWithValue('Error occured while fetching shops.');
    }
  }
);

export const dashboardSlice = createSlice({
  name: 'dashboard',
  initialState: dashboardInitialState,
  reducers: {
    setShop: (state, { payload }) => {
      state.shop = payload;
    },
    clearStatus: (state) => {
      state.errorMsg = undefined;
      state.status = STATUS_TYPE.IDLE;
    },
    setDates: (state, { payload }) => {
      state.dateRange = payload;
    },
    setPreset: (state, { payload }) => {
      state.datePreset = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchShopAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(fetchShopAsync.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.shops = payload;
        state.shop = payload[0];
      })
      .addCase(fetchShopAsync.rejected, (state, { payload }) => {
        state.status = STATUS_TYPE.ERROR;
        state.errorMsg = payload;
      });
  }
});

export const { setShop, clearStatus, setDates, setPreset } = dashboardSlice.actions;
export default dashboardSlice.reducer;
