import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, dataQualityState } from 'utility/typeDefinitions/reduxTypes';
import { dataQualityInitialState } from 'utility/constants/initialStates';

export const dataQualityAsync = createAsyncThunk<
  {
    purchases_shopify: number;
    purchases_db: number;
    purchases_db_with_session: number;
    data_quality: {
      DQ_frontend: number;
      DQ_backend: number;
      DQ_FB: number;
      data_quality_grouped: {
        date: string;
        DQ_COM: number;
      }[];
    };
    average_time_difference: number;
  },
  void,
  thunkOptions
>('dataQuality/fetch', async (temp, { rejectWithValue, getState }) => {
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
});

const initialState: dataQualityState = {
  ...dataQualityInitialState
};

export const dataQualityReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(dataQualityAsync.pending, (state) => {
      state.status = 'fetching';
    })
    .addCase(dataQualityAsync.fulfilled, (state, { payload }) => {
      state.DQ_COM = payload.data_quality.DQ_FB * 100;
      state.P_MDB = payload.purchases_db;
      state.P_SH = payload.purchases_shopify;
      state.dataQualityGrouped = payload.data_quality.data_quality_grouped;
      state.status = 'success';
    })
    .addCase(dataQualityAsync.rejected, (state) => {
      state.status = 'error';
    });
});

export default dataQualityReducer;
