import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, RootState } from 'redux/store';

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
  {
    dispatch: AppDispatch;
    state: RootState;
    rejectValue: string;
  }
>('dataQuality/fetch', async (temp, { rejectWithValue, getState }) => {
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
});

export interface dataQualityState {
  DQ_COM: number;
  P_MDB: number;
  P_SH: number;
  dataQualityGrouped: { date: string; DQ_COM: number }[];
  shopifyOrders: number;
  ordersWithCorrectCV: number;
  recievedByFB: number;
  avgDelieveryTime: number;
  status?: 'idle' | 'fetching' | 'success' | 'error';
  errorMsg?: string;
}

const initialState: dataQualityState = {
  DQ_COM: 0,
  P_MDB: 0,
  P_SH: 0,
  dataQualityGrouped: [],
  shopifyOrders: 0,
  ordersWithCorrectCV: 0,
  recievedByFB: 0,
  avgDelieveryTime: 0,
  status: 'idle',
  errorMsg: undefined
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
