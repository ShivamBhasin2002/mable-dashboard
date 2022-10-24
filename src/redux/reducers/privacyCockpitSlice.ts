import { combineReducers, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { privacyCockpit } from 'utility/constants/initialStates';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import axios from 'axios';
import { STATUS_TYPE } from 'utility/constants/general';
import { snakeCaseToKeyValueExtractor } from 'utility/functions/formattingFunctions';

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

export const postDataHashPrivacySettings = createAsyncThunk<
  boolean,
  { checkBox: boolean },
  thunkOptions
>('privacyCockpit/hasDashboard/post', async ({ checkBox }, { rejectWithValue, getState }) => {
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
>('privacyCockpit/hasDashboard/post', async ({ url }, { rejectWithValue, getState }) => {
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

export const previousSettingReducer = createReducer(privacyCockpit.privacySettings, (builder) => {
  builder
    .addCase(getPrivacySettings.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(getPrivacySettings.fulfilled, (state, { payload }) => {
      state.status = STATUS_TYPE.SUCCESS;
      state.previousSettings = payload;
    })
    .addCase(getPrivacySettings.rejected, (state, { error }) => {
      state.status = STATUS_TYPE.ERROR;
      state.errorMsg = error.message;
    });
});

export const hashDataReducer = createReducer(
  privacyCockpit.privacySettings.hashDataInDashboard,
  (builder) => {
    builder
      .addCase(postDataHashPrivacySettings.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(postDataHashPrivacySettings.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.hashDataCheckBox = payload;
      })
      .addCase(postDataHashPrivacySettings.rejected, (state, { error }) => {
        state.status = STATUS_TYPE.ERROR;
        state.errorMsg = error.message;
      });
  }
);

export const cookieConsentReducer = createReducer(
  privacyCockpit.privacySettings.cookieConsent,
  (builder) => {
    builder
      .addCase(postConsentUrlPrivacySettings.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(postConsentUrlPrivacySettings.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.cookieConsentUrl = payload;
      })
      .addCase(postConsentUrlPrivacySettings.rejected, (state, { error }) => {
        state.status = STATUS_TYPE.ERROR;
        state.errorMsg = error.message;
      });
  }
);

export const parameterSettingReducer = createReducer(
  privacyCockpit.paraMeterSettings,
  (builder) => {
    builder
      .addCase(getPrivacySettings.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(getPrivacySettings.fulfilled, (state, { payload }) => {
        state.parsed_settings = [];
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
            if (state.parsed_settings.length === 0) state.parsed_settings.push(obj);

            if (state.parsed_settings) {
              let noduplicate = true;
              state.parsed_settings.map((item) => {
                if (item.settingKey === obj.settingKey) noduplicate = false;
              });
              if (noduplicate) state.parsed_settings?.push(obj);
            }
          }
        });
        state.status = STATUS_TYPE.SUCCESS;
      })
      .addCase(getPrivacySettings.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      })

      .addCase(postParameterSettings.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(postParameterSettings.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        payload.settings_changed.map((data) => {
          state.parsed_settings.map((savedData, idx) => {
            if (savedData.settingKey === data.settingKey) {
              state.parsed_settings[idx].settingValue = data.settingValue;
            }
          });
        });
      })
      .addCase(postParameterSettings.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
);

export const privacyCockpitSlice = combineReducers({
  hashDataReducer,
  previousSettingReducer,
  cookieConsentReducer,
  parameterSettingReducer
});

export default privacyCockpitSlice;
