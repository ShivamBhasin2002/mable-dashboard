import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { dataPerEventsInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/general';
import { titleCaseToSnakeCaseFormatter } from 'utility/functions/formattingFunctions';
import { makeGetRequest } from 'utility/functions/apiCalls';

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
      const { data: eventAttributionData } = await makeGetRequest({
        path: `/v2/attribution-params-quality/${titleCaseToSnakeCaseFormatter(
          state.dataPerEvent.eventSelected
        )}`,
        token: state.user.token,
        params: {
          source_id: state.shop.active?.id,
          start_date: state.dates.dateRange[0],
          end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
        }
      });
      const { data: eventParamsData } = await makeGetRequest({
        path: `/v2/events-params-quality/${titleCaseToSnakeCaseFormatter(
          state.dataPerEvent.eventSelected
        )}`,
        token: state.user.token,
        params: {
          source_id: state.shop.active?.id,
          start_date: state.dates.dateRange[0],
          end_date: state.dates.dateRange[state.dates.dateRange.length - 1]
        }
      });
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
      ).map(
        // eslint-disable-next-line @typescript-eslint/ban-types
        (date: Object, idx: number) => ({
          ...date,
          events_quality: eventParamsData.grouped_events_percentage[idx].events_quality
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
