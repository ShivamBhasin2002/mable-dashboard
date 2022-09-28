import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { dataQualityInitialState } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/general';
import moment from 'moment';

// eslint-disable-next-line
export const dataQualityAsync = createAsyncThunk<any, void, thunkOptions>(
  'dataQuality/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/v2/data-quality`, {
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

export const dataQualityReducer = createReducer(dataQualityInitialState, (builder) => {
  builder
    .addCase(dataQualityAsync.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(dataQualityAsync.fulfilled, (state, { payload }) => {
      state.TOTAL_DATA_QUALITY_FACEBOOK = Math.round(payload.total_data_quality_facebook * 100);
      state.FACEBOOK_SUCCESS_DELIVERED_ORDERS = payload.facebook_success_delivered_orders;
      state.TOTAL_SHOPIFY_ORDERS = payload.total_shopify_orders;
      state.DATA_QUALITY_BY_DATE = payload.bydate.map(
        (element: { date: string; data_quality: number }) => ({
          ...element,
          date: moment(element.date).format('D. MMM')
        })
      );
      state.status = STATUS_TYPE.SUCCESS;
    })
    .addCase(dataQualityAsync.rejected, (state) => {
      state.status = STATUS_TYPE.ERROR;
    });
});

export default dataQualityReducer;
