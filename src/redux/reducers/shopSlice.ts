import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { shopStateType, thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { shopInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/enums';

export const shopAsync = createAsyncThunk<shopStateType | undefined, void, thunkOptions>(
  'shop/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(
        `${process.env.REACT_APP_MA_URL}/v2/get-all-shop-by-source-id`,
        {
          headers: { Authorization: `Token ${state.user.token}` }
        }
      );
      const res: shopStateType = { active: data[0] ?? undefined, shops: (data ?? []).slice(1) };
      if (data) return res;
      return rejectWithValue('Shops not found');
    } catch (error) {
      return rejectWithValue('Shops not found');
    }
  }
);

export const shopReducer = createSlice({
  name: 'shop',
  initialState: shopInitialState,
  reducers: {
    setShop: (state, { payload }) => {
      state.active = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(shopAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(shopAsync.fulfilled, (state, { payload }) => {
        state.shops = payload?.shops || [];
        state.active = payload?.active;
        state.status = STATUS_TYPE.SUCCESS;
      })
      .addCase(shopAsync.rejected, (state, { payload }) => {
        state.errorMsg = payload;
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { setShop } = shopReducer.actions;
export default shopReducer.reducer;
