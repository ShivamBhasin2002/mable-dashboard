import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import axios from 'axios';
import { updateUserNameMessage } from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/general';

export const updateUsername = createAsyncThunk<
  string,
  {
    userId: string | undefined;
    firstName: string;
    lastName: string;
  },
  thunkOptions
>('accountsetting/update/name', async ({ userId, firstName, lastName }, thunkApi) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BFF_URL}/auth/username/update`,
      {
        userId: userId,
        firstName: firstName,
        lastName: lastName
      },
      {
        headers: { Authorization: `${thunkApi.getState().user.token}` }
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
    return thunkApi.rejectWithValue(message);
  }
});

export const updateEmail = createAsyncThunk<
  string,
  {
    userId: string | undefined;
    email: string;
  },
  thunkOptions
>('accountsetting/update/email', async ({ userId, email }, thunkApi) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BFF_URL}/auth/email/update`,
      {
        userId: userId,
        email: email
      },
      {
        headers: { Authorization: `${thunkApi.getState().user.token}` }
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
    console.log(message);
    return thunkApi.rejectWithValue(message);
  }
});

export const updatePassword = createAsyncThunk<
  string,
  {
    password: string;
    newPassword: string;
  },
  thunkOptions
>('accountsetting/password/update', async ({ password, newPassword }, thunkApi) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BFF_URL}/auth/password/update`,
      {
        password: password,
        newPassword: newPassword
      },
      {
        headers: { Authorization: `${thunkApi.getState().user.token}` }
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
    console.log(message);
    return thunkApi.rejectWithValue(message);
  }
});

export const AccountSetting = createSlice({
  name: 'AccountSetting',
  initialState: updateUserNameMessage,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(updateUsername.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(updateUsername.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.message = payload;
      })
      .addCase(updateUsername.rejected, (state) => {
        state.status = STATUS_TYPE.ERROR;
      });
  }
});
export default AccountSetting.reducer;
