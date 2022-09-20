import moment from 'moment';
import { createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { funnelAnalysisInitialState } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/general';

// eslint-disable-next-line
export const funnelAnalysisAsync = createAsyncThunk<any, void, thunkOptions>(
  'funnelAnalysis/fetch',
  async (temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.get(`${process.env.REACT_APP_MA_URL}/v2/events`, {
        headers: { Authorization: `Token ${state.user.token}` },
        params: {
          source_id: state.dashboard.shop?.source_id,
          start_date: state.dashboard.dateRange[0],
          end_date: state.dashboard.dateRange[state.dashboard.dateRange.length - 1]
        }
      });
      if (data) return data;
      rejectWithValue('Data not found');
    } catch (error) {
      rejectWithValue('Data not found');
    }
  }
);
export const funnelAnalysisReducer = createReducer(funnelAnalysisInitialState, (builder) => {
  builder
    .addCase(funnelAnalysisAsync.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(funnelAnalysisAsync.fulfilled, (state, { payload }) => {
      state.total_events = payload.result_total_events;
      // eslint-disable-next-line
      state.byDate = payload.bydate.map((events: any) => ({
        ...events,
        date: moment(events.date).format('d. MMM')
      }));
      state.status = STATUS_TYPE.SUCCESS;
    })
    .addCase(funnelAnalysisAsync.rejected, (state) => {
      state.status = STATUS_TYPE.ERROR;
    });
});

export default funnelAnalysisReducer;
