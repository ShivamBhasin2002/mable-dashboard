import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { thunkOptions } from "@utility/typeDefinitions/reduxTypes";
import { eventsDataInitialState } from "@utility/constants/initialStates";

import { STATUS_TYPE } from "@utility/constants/enums";
import { dashboardDataFetchCall } from "@utility/functions/apiCalls";
import { containsToday } from "@utility/functions/helper";

// eslint-disable-next-line
export const eventsDataAsync = createAsyncThunk<any, void, thunkOptions>(
  "eventsData/fetch",
  async (_temp, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await dashboardDataFetchCall(
        {
          path: "/v2/events",
          token: state.user.token,
          params: {
            source_id: state.shop.active?.id,
            start_date: state.dates.dateRange[0],
            end_date: state.dates.dateRange[state.dates.dateRange.length - 1],
          },
        },
        !containsToday(state.dates.dateRange)
      );
      if (data) return data;
      return rejectWithValue("Data not found");
    } catch (error) {
      return rejectWithValue("Data not found");
    }
  }
);
export const eventsDataReducer = createSlice({
  name: "eventsData",
  initialState: eventsDataInitialState,
  reducers: {
    setEventSelected: (state, { payload }) => {
      state.eventSelected = payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(eventsDataAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(eventsDataAsync.fulfilled, (state, { payload }) => {
        state.total_events =
          payload?.total_events ?? eventsDataInitialState.total_events;
        state.totalEventCount = Object.entries(state.total_events)
          .map(([, count]) => count)
          .reduce((partialSum, i) => partialSum + i, 0);
        state.byDate = payload?.by_date ?? eventsDataInitialState.byDate;
        state.status = STATUS_TYPE.SUCCESS;
      })
      .addCase(eventsDataAsync.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  },
});

export const { setEventSelected } = eventsDataReducer.actions;
export default eventsDataReducer.reducer;
