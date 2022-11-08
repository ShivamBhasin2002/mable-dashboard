import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { dataPerEventByDateType, thunkOptions } from '@utility/typeDefinitions/reduxTypes';
import { dataPerEventsInitialState } from '@utility/constants/initialStates';

import { eventSelectedType, STATUS_TYPE } from '@utility/constants/enums';
import { titleCaseToSnakeCaseFormatter } from '@utility/functions/formattingFunctions';
import { dashboardDataFetchCall } from '@utility/functions/apiCalls';
import moment from 'moment';
import { containsToday } from '@utility/functions/helper';

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
      const eventToFetch =
        state.dataPerEvent.eventSelected === eventSelectedType.all
          ? 'all'
          : titleCaseToSnakeCaseFormatter(state.dataPerEvent.eventSelected);
      const { data: eventAttributionData } = await dashboardDataFetchCall(
        {
          path: `/v2/attribution-params-quality/${eventToFetch}`,
          token: state.user.token ?? '',
          params: {
            source_id: state.shop.active?.id,
            start_date: state.dates.dateRange[0],
            end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
          }
        },
        !containsToday(state.dates.dateRange)
      );
      const { data: eventParamsData } = await dashboardDataFetchCall(
        {
          path: `/v2/events-params-quality/${eventToFetch}`,
          token: state.user.token ?? '',
          params: {
            source_id: state.shop.active?.id,
            start_date: state.dates.dateRange[0],
            end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
          }
        },
        !containsToday(state.dates.dateRange)
      );
      data.AttributionParameters =
        eventAttributionData.overall_attribution_percentage ??
        dataPerEventsInitialState.AttributionParameters;
      data.EventParameters =
        eventParamsData.overall_events_percentage ?? dataPerEventsInitialState.EventParameters;
      data.attribution =
        eventAttributionData.total_overall_attribution_percentage ??
        dataPerEventsInitialState.attribution;
      data.event =
        eventParamsData.total_overall_events_percentage ?? dataPerEventsInitialState.event;
      data.byDate = (
        eventAttributionData.grouped_attribution_percentage ?? dataPerEventsInitialState.byDate
      )
        .map(
          (
            {
              date,
              attribution_params_quality: attributionParamsQuality
            }: { date: string; attribution_params_quality: number },
            idx: number
          ): dataPerEventByDateType | null => {
            if (
              attributionParamsQuality === 0 &&
              eventParamsData.grouped_events_percentage[idx].events_quality === 0
            )
              return null;
            return {
              date: moment(date).format('D. MMM'),
              attributionParamsQuality,
              eventsQuality: eventParamsData.grouped_events_percentage[idx].events_quality
            };
          }
        )
        .filter((editedData: unknown | null) => editedData !== null);
      if (eventAttributionData && eventParamsData) return data;
      return rejectWithValue('Data not found');
    } catch (error) {
      return rejectWithValue('Data not found');
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
      .addCase(dataPerEventAsync.fulfilled, (state, { payload }) => ({
        ...state,
        ...payload,
        status: STATUS_TYPE.SUCCESS
      }))
      .addCase(dataPerEventAsync.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { setEventSelected } = dataPerEvent.actions;
export default dataPerEvent.reducer;
