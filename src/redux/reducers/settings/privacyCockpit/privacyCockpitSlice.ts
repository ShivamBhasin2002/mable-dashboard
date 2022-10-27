import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { privacyCockpit } from 'utility/constants/initialStates';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import axios from 'axios';
import { STATUS_TYPE } from 'utility/constants/enums';
import { snakeCaseToKeyValueExtractor } from 'utility/functions/formattingFunctions';

export const fetchSettings = createAsyncThunk<
  { source_id: number; setting_key: string; setting_value: string }[],
  void,
  thunkOptions
>('privacyCockpit/settings/fetch', async (temp, { rejectWithValue, getState }) => {
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
  string,
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
      return data.settings_changed[0].settingValue;
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
      return data.settings_changed[0].settingValue;
    }
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(message);
    return rejectWithValue(message);
  }
});

export const postParameterSettings = createAsyncThunk<
  {
    ok: boolean;
    settings_changed: {
      settingKey: string;
      settingValue: string;
    }[];
  },
  {
    settings: {
      settingKey?: string;
      settingValue?: string;
    }[];
  },
  thunkOptions
>('privacyCockpit/perameterSettings/post', async (formData, { rejectWithValue, getState }) => {
  const state = getState();
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP_BFF_URL}/user/source/${state.shop.active?.id}/settings`,
      formData,
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

export const privacyCockpitSetting = createSlice({
  name: 'privacyCockpitSetting',
  initialState: privacyCockpit,
  reducers: {
    clearDeleteUserState: (state) => {
      state.deleteUserData.status = STATUS_TYPE.IDLE;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSettings.pending, (state) => {
        state.previousSettings.status = STATUS_TYPE.FETCHING;
      })
      .addCase(fetchSettings.fulfilled, (state, { payload }) => {
        state.paraMeterSettings.parsed_settings = [];

        payload.map((data) => {
          const category = snakeCaseToKeyValueExtractor(data.setting_key)[0];
          if (category === 'personalData' || category === 'location' || category === 'others') {
            const obj = {
              settingKey: data.setting_key,
              category: category,
              destination: snakeCaseToKeyValueExtractor(data.setting_key)[2],
              label: snakeCaseToKeyValueExtractor(data.setting_key)[1],
              settingValue: data.setting_value,
              sequance: snakeCaseToKeyValueExtractor(data.setting_key)[2]
            };
            if (state.paraMeterSettings.parsed_settings.length === 0)
              state.paraMeterSettings.parsed_settings.push(obj);

            if (state.paraMeterSettings.parsed_settings) {
              let noduplicate = true;
              state.paraMeterSettings.parsed_settings.map((item) => {
                if (item.settingKey === obj.settingKey) noduplicate = false;
              });
              if (noduplicate) state.paraMeterSettings.parsed_settings?.push(obj);
            }
          }
        });
        state.privacySettings.hashDataInDashboard.hashDataCheckBox =
          payload.filter((item) => {
            return item.setting_key === 'hash_database';
          })[0].setting_value == 'true';

        state.privacySettings.cookieConsent.cookieConsentUrl = payload.filter((item) => {
          return item.setting_key === 'cookie_consent_url';
        })[0].setting_value;

        state.previousSettings.status = STATUS_TYPE.SUCCESS;
      })
      .addCase(fetchSettings.rejected, (state) => {
        state.previousSettings.status = STATUS_TYPE.ERROR;
      })
      .addCase(postDataHashPrivacySettings.pending, (state) => {
        state.privacySettings.hashDataInDashboard.status = STATUS_TYPE.FETCHING;
      })
      .addCase(postDataHashPrivacySettings.fulfilled, (state, { payload }) => {
        state.privacySettings.hashDataInDashboard.status = STATUS_TYPE.SUCCESS;
        state.privacySettings.hashDataInDashboard.hashDataCheckBox = payload === 'true';
      })
      .addCase(postDataHashPrivacySettings.rejected, (state) => {
        state.privacySettings.hashDataInDashboard.status = STATUS_TYPE.ERROR;
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
      .addCase(getDeletedCustomer.fulfilled, (state, { payload }) => {
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
        console.log('payload', payload);
        console.log('length before append', state.deleteUserData.userData.length);
        state.deleteUserData.userData.push(payload.customer_created[0]);
        console.log(
          'length after append',
          state.deleteUserData.userData.length,
          state.deleteUserData.userData[state.deleteUserData.userData.length - 1]
        );
      })
      .addCase(postDeletedCustomer.rejected, (state) => {
        state.deleteUserData.status = STATUS_TYPE.ERROR;
      })
      .addCase(postParameterSettings.pending, (state) => {
        state.paraMeterSettings.status = STATUS_TYPE.FETCHING;
      })
      .addCase(postParameterSettings.fulfilled, (state, { payload }) => {
        state.paraMeterSettings.status = STATUS_TYPE.SUCCESS;
        payload.settings_changed.map((data) => {
          state.paraMeterSettings.parsed_settings.map((savedData, idx) => {
            if (savedData.settingKey === data.settingKey) {
              state.paraMeterSettings.parsed_settings[idx].settingValue = data.settingValue;
            }
          });
        });
      })
      .addCase(postParameterSettings.rejected, (state) => {
        state.paraMeterSettings.status = STATUS_TYPE.ERROR;
      });
  }
});

export const { clearDeleteUserState } = privacyCockpitSetting.actions;
export default privacyCockpitSetting.reducer;
