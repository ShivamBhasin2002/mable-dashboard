import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { dataPerEventsInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/general';
import { getSelectedEventSnakeCase } from 'utility/functions';

// eslint-disable-next-line
export const dataPerEventAsync = createAsyncThunk<any, void, thunkOptions>(
  'dataPerEvent/fetch',
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const data = {
        AttributionParameters: {},
        EventParameters: {},
        attribution: 0,
        event: 0,
        byDate: []
      };
      const eventAttributionCall = axios.get(
        `${process.env.REACT_APP_MA_URL}/v2/attribution-params-quality/${getSelectedEventSnakeCase(
          state.dataPerEvent.eventSelected
        )}`,
        {
          headers: { Authorization: `Token ${state.user.token}` },
          params: {
            source_id: state.shop.active?.id,
            start_date: state.dates.dateRange[0],
            end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
          }
        }
      );
      const eventParamsCall = axios.get(
        `${process.env.REACT_APP_MA_URL}/v2/events-params-quality/${getSelectedEventSnakeCase(
          state.dataPerEvent.eventSelected
        )}`,
        {
          headers: { Authorization: `Token ${state.user.token}` },
          params: {
            source_id: state.shop.active?.id,
            start_date: state.dates.dateRange[0],
            end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
          }
        }
      );
      const [eventAttributionData, eventParamsData] = await Promise.all([
        eventAttributionCall,
        eventParamsCall
      ]);
      data.AttributionParameters =
        eventAttributionData.data.overall_attribution_percentage ??
        dataPerEventsInitialState.AttributionParameters;
      data.EventParameters =
        eventParamsData.data.overall_events_percentage ?? dataPerEventsInitialState.EventParameters;
      data.attribution =
        eventAttributionData.data.total_overall_attribution_percentage ??
        dataPerEventsInitialState.attribution;
      data.event =
        eventParamsData.data.total_overall_events_percentage ?? dataPerEventsInitialState.event;
      data.byDate = (
        eventAttributionData.data.grouped_attribution_percentage ?? dataPerEventsInitialState.byDate
      ).map(
        // eslint-disable-next-line @typescript-eslint/ban-types
        (date: Object, idx: number) => ({
          ...date,
          events_quality: eventParamsData.data.grouped_events_percentage[idx].events_quality
        })
      );
      if (eventAttributionData && eventParamsData) return data;
      rejectWithValue('Data not found');
    } catch (error) {
      rejectWithValue('Data not found');
    }
  }
);

export const dataPerEvent = createSlice({
  name: 'dataPerEvent',
  initialState: dataPerEventsInitialState,
  reducers: {
    setEventSelected: (state, { payload }) => {
      state.eventSelected = payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(dataPerEventAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(dataPerEventAsync.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state = { ...state, ...payload };
      })
      .addCase(dataPerEventAsync.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { setEventSelected } = dataPerEvent.actions;
export default dataPerEvent.reducer;
