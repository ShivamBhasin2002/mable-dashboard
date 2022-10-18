import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privacyCockpit } from 'utility/constants/initialStates';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import axios from 'axios';
import { STATUS_TYPE } from 'utility/constants/general';

export const loginAsync = createAsyncThunk<
  { token: string; email: string },
  {
    email: string;
    password: string;
    rememberMe: boolean;
  },
  thunkOptions
>('user/login', async ({ email, password, rememberMe }, thunkApi) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_BFF_URL}/auth/login`, {
      email: email,
      password: password
    });
    if (rememberMe) localStorage.setItem('token', res.data.token);
    return res.data;
  } catch (err) {
    return thunkApi.rejectWithValue('Login Failed');
  }
});

export const getPrivacySettings = createAsyncThunk<
  {
    source_id: number;
    setting_key: string;
    setting_value: boolean;
  }[],
  void,
  thunkOptions
>('privacyCockpit/hasDashboard/fetch', async (temp, { rejectWithValue, getState }) => {
  const state = getState();
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BFF_URL}/user/source/${state.shop.active?.id}/settings`,
      {
        headers: { Authorization: `${state.user.token}` }
      }
    );
    if (data) {
      console.log(data);
      return data;
    }
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(message);
    return rejectWithValue(message);
  }
});

export const postPrivacySettings = createAsyncThunk<boolean, { checkBox: boolean }, thunkOptions>(
  'privacyCockpit/hasDashboard/post',
  async ({ checkBox }, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BFF_URL}/user/source/${state.shop.active?.id}/settings`,
        {
          settings: [
            {
              settingKey: 'hash_database',
              settingValue: `${checkBox}`
            }
          ]
        },
        {
          headers: { Authorization: `${state.user.token}` }
        }
      );
      if (data) {
        return data.ok;
      }
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(message);
      return rejectWithValue(message);
    }
  }
);

export const privacyCockpitSlice = createSlice({
  name: 'privacyCockpitSlice',
  initialState: privacyCockpit,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getPrivacySettings.pending, (state) => {
        state.privacySettings.status = STATUS_TYPE.FETCHING;
      })
      .addCase(getPrivacySettings.fulfilled, (state, { payload }) => {
        state.privacySettings.status = STATUS_TYPE.SUCCESS;
        state.privacySettings.previousSettings = payload;
      })
      .addCase(getPrivacySettings.rejected, (state, { payload }) => {
        state.privacySettings.status = STATUS_TYPE.ERROR;
        state.privacySettings.errorMsg = payload;
      })
      .addCase(postPrivacySettings.pending, (state) => {
        console.log('fetching kar rha hu');
        state.privacySettings.status = STATUS_TYPE.FETCHING;
      })
      .addCase(postPrivacySettings.fulfilled, (state, { payload }) => {
        state.privacySettings.status = STATUS_TYPE.SUCCESS;
        state.privacySettings.hashDataInDashboard = payload;
      })
      .addCase(postPrivacySettings.rejected, (state, { payload }) => {
        state.privacySettings.status = STATUS_TYPE.ERROR;
        state.privacySettings.errorMsg = payload;
      });
  }
});

export default privacyCockpitSlice.reducer;
