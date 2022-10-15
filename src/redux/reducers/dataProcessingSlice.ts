import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { Toast } from '@chakra-ui/react';
import { thunkOptions, userStateType } from 'utility/typeDefinitions/reduxTypes';
import { dataProcessingInitialState } from '../../utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/general';

export const fetchDataProcessSettings = createAsyncThunk<any, any>(
  'admin/get-source-settings',
  async ({ rejectWithValue }) => {
    try {
      const res = await axios.get(`${process.env.REACT_APP_BFF_URL}/admin/source/57/settings`, {
        headers: { 'x-access-token': '897erhtg97weh4tg78whenrgsearmguwsiaebhgjsrig' }
      });
      return res.data;
    } catch (err) {
      return rejectWithValue('Fetch Settings Failed');
    }
  }
);

export const updateDataProcessSettings = createAsyncThunk<
  {
    ok: boolean;
    settings_changed: {
      settingKey: string;
      settingValue: string;
    }[];
  },
  {
    settings: {
      settingKey: string;
      settingValue: string;
    }[];
  },
  thunkOptions
>('admin/update-source-settings', async (formData, { rejectWithValue }) => {
  try {
    const res = await axios.post(
      `${process.env.REACT_APP_BFF_URL}/admin/source/57/settings`,
      formData,
      {
        headers: { 'x-access-token': '897erhtg97weh4tg78whenrgsearmguwsiaebhgjsrig' }
      }
    );
    return res.data;
  } catch (err) {
    return rejectWithValue('Update Settings Failed');
  }
});

export const userSlice = createSlice({
  name: 'dataProcessing',
  initialState: dataProcessingInitialState,
  reducers: {
    clearState: (state) => {
      state.status = STATUS_TYPE.IDLE;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchDataProcessSettings.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(fetchDataProcessSettings.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.settings = payload;
      })
      .addCase(fetchDataProcessSettings.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      })
      .addCase(updateDataProcessSettings.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(updateDataProcessSettings.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        console.log(state);
        state.settings.filter((elm, idx) => {
          if (payload.settings_changed[0].settingKey === elm.settingKey) {
            state.settings[idx].settingValue = payload.settings_changed[0].settingValue;
            state.settings[idx].settingValue = 'true';
          }
        });
      })
      .addCase(updateDataProcessSettings.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { clearState } = userSlice.actions;
export default userSlice.reducer;