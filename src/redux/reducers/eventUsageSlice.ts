import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import { getEvents } from 'utility/functions/monitorServices';
import { eventUsageState } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/enums';

export const fetchEventUsage = createAsyncThunk<
  {
    current_month: number;
    previous_month: number;
  },
  void,
  thunkOptions
>('eventUsage/fetch', async (temp, { rejectWithValue, getState }) => {
  const state = getState();
  try {
    const apiUrl = `v2/get-event-usage`;
    const params = { source_id: state.shop.active?.id };
    return getEvents(state.user.token, apiUrl, params);
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(message);
    return rejectWithValue(message);
  }
  return null;
});

export const eventUsageData = createSlice({
  name: 'eventUsageData',
  initialState: eventUsageState,
  reducers: {
    TierRange: (state, { payload }) => {
      state.selectedTier.tier = payload;
      switch (payload) {
        case 'tierOne':
          state.selectedTier.range = 50000;
          break;
        case 'tierTwo':
          state.selectedTier.range = 150000;
          break;
        case 'tierThree':
          state.selectedTier.range = 500000;
          break;
        case 'tierFour':
          state.selectedTier.range = 5000000;
          break;
        case 'tierFive':
          state.selectedTier.range = 10000000;
          break;
        default:
          state.selectedTier.range = 50000;
      }
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEventUsage.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(fetchEventUsage.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.monthEvents = payload;
      })
      .addCase(fetchEventUsage.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { TierRange } = eventUsageData.actions;
export default eventUsageData.reducer;
