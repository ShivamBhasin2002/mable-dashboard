import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { privacyCockpit } from 'utility/constants/initialStates';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import axios from 'axios';
import { STATUS_TYPE } from 'utility/constants/general';

export const getPrivacySettings = createAsyncThunk<
  { source_id: number; setting_key: string; setting_value: string }[],
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
      return data;
    }
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(message);
    return rejectWithValue(message);
  }
});

export const getDeletedCustomer = createAsyncThunk<
  {
    id: number;
    source_id: number;
    created_at: string;
    updated_at: string;
    email: string;
    data_collection_active: boolean;
    deleted_user_data: boolean;
  }[],
  void,
  thunkOptions
>('privacyCockpit/deleteCustomerData/fetch', async (temp, { rejectWithValue, getState }) => {
  const state = getState();
  try {
    const { data } = await axios.get(
      `${process.env.REACT_APP_BFF_URL}/user/source/${state.shop.active?.id}/data-collection/users`,
      {
        headers: { Authorization: `${state.user.token}` }
      }
    );
    if (data) {
      return data;
    }
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(message);
    return rejectWithValue(message);
  }
});

export const postDeletedCustomer = createAsyncThunk<
  {
    ok: boolean;
    customer_created: {
      id: number;
      source_id: number;
      created_at: string;
      updated_at: string;
      email: string;
      data_collection_active: boolean;
      deleted_user_data: boolean;
    }[];
  },
  { futureTrack: boolean; email: string },
  thunkOptions
>(
  'privacyCockpit/deleteCustomerData/post',
  async ({ futureTrack, email }, { rejectWithValue, getState }) => {
    const state = getState();
    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BFF_URL}/user/source/${state.shop.active?.id}/data-collection/users`,
        {
          data: [
            {
              email: `${email}`,
              data_collection_active: futureTrack,
              deleted_user_data: true
            }
          ]
        },
        {
          headers: { Authorization: `${state.user.token}` }
        }
      );
      if (data) {
        return data;
      }
    } catch (error) {
      let message;
      if (error instanceof Error) message = error.message;
      else message = String(message);
      return rejectWithValue(message);
    }
  }
);

export const postDataHashPrivacySettings = createAsyncThunk<
  boolean,
  { checkBox: boolean },
  thunkOptions
>('privacyCockpit/hashDashboard/post', async ({ checkBox }, { rejectWithValue, getState }) => {
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
});

export const postConsentUrlPrivacySettings = createAsyncThunk<
  string,
  { url: string },
  thunkOptions
>('privacyCockpit/consentDashboard/post', async ({ url }, { rejectWithValue, getState }) => {
  const state = getState();
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BFF_URL}/user/source/${state.shop.active?.id}/settings`,
      {
        settings: [
          {
            settingKey: 'cookie_consent_url',
            settingValue: `${url}`
          }
        ]
      },
      {
        headers: { Authorization: `${state.user.token}` }
      }
    );
    if (data) {
      return data.settings_created[0].settingValue;
    }
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(message);
    return rejectWithValue(message);
  }
});

export const privacyCockpitSetting = createSlice({
  name: 'privacyCockpitSetting',
  initialState: privacyCockpit,
  reducers: {
    updateSettings(state) {
      const checkBox = state.previousSettings.filter(
        (item) => item.setting_key === 'hash_database'
      );
      state.privacySettings.hashDataInDashboard.hashDataCheckBox =
        checkBox[0].setting_value === 'true';
      const consentUrl = state.previousSettings.filter(
        (item) => item.setting_key === 'cookie_consent_url'
      );
      state.privacySettings.cookieConsent.cookieConsentUrl = consentUrl[0].setting_value;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getPrivacySettings.pending, (state) => {
        state.privacySettings.status = STATUS_TYPE.FETCHING;
      })
      .addCase(getPrivacySettings.fulfilled, (state, { payload }) => {
        state.privacySettings.status = STATUS_TYPE.SUCCESS;
        state.previousSettings = payload;
      })
      .addCase(getPrivacySettings.rejected, (state, { error }) => {
        state.privacySettings.status = STATUS_TYPE.ERROR;
        state.privacySettings.errorMsg = error.message;
      })
      .addCase(postDataHashPrivacySettings.pending, (state) => {
        state.privacySettings.hashDataInDashboard.status = STATUS_TYPE.FETCHING;
      })
      .addCase(postDataHashPrivacySettings.fulfilled, (state, { payload }) => {
        state.privacySettings.hashDataInDashboard.status = STATUS_TYPE.SUCCESS;
        state.privacySettings.hashDataInDashboard.hashDataCheckBox = payload;
      })
      .addCase(postDataHashPrivacySettings.rejected, (state, { error }) => {
        state.privacySettings.hashDataInDashboard.status = STATUS_TYPE.ERROR;
        state.privacySettings.errorMsg = error.message;
      })
      .addCase(postConsentUrlPrivacySettings.pending, (state) => {
        state.privacySettings.cookieConsent.status = STATUS_TYPE.FETCHING;
      })
      .addCase(postConsentUrlPrivacySettings.fulfilled, (state, { payload }) => {
        state.privacySettings.cookieConsent.status = STATUS_TYPE.SUCCESS;
        state.privacySettings.cookieConsent.cookieConsentUrl = payload;
      })
      .addCase(postConsentUrlPrivacySettings.rejected, (state) => {
        state.privacySettings.cookieConsent.status = STATUS_TYPE.ERROR;
      })
      .addCase(getDeletedCustomer.pending, (state) => {
        state.deleteUserData.status = STATUS_TYPE.FETCHING;
      })
      .addCase(getDeletedCustomer.fulfilled, (state, { payload }) => {
        state.deleteUserData.status = STATUS_TYPE.SUCCESS;
        state.deleteUserData.userData = payload;
      })
      .addCase(getDeletedCustomer.rejected, (state) => {
        state.deleteUserData.status = STATUS_TYPE.ERROR;
      })
      .addCase(postDeletedCustomer.pending, (state) => {
        state.deleteUserData.status = STATUS_TYPE.FETCHING;
      })
      .addCase(postDeletedCustomer.fulfilled, (state, { payload }) => {
        state.deleteUserData.status = STATUS_TYPE.SUCCESS;
        state.deleteUserData.userData = payload.customer_created;
      })
      .addCase(postDeletedCustomer.rejected, (state) => {
        state.deleteUserData.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { updateSettings } = privacyCockpitSetting.actions;
export default privacyCockpitSetting.reducer;
