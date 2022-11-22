import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { useRouter } from "next/router";
import { thunkOptions, userStateType } from '@utility/typeDefinitions/reduxTypes';
import { userInitialState } from '@utility/constants/initialStates';

import { STATUS_TYPE } from '@utility/constants/enums';
// import { reloadScreen } from '@utility/functions/helper';

export const loginAsync = createAsyncThunk<
  { token: string; email: string },
  {
    email: string;
    password: string;
    rememberMe: boolean;
  },
  thunkOptions
>('user/login', async ({ email, password, rememberMe }, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BFF_URL}/auth/login`, {
      email,
      password
    });
    if (rememberMe) localStorage.setItem('token', res.data.token);
    return res.data;
  } catch (err) {
    return rejectWithValue('Login Failed');
  }
});

export const registerAsync = createAsyncThunk<
  { email: string; userId: string },
  {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  },
  thunkOptions
>('user/register', async (formData, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_BFF_URL}/auth/register`, formData);
    if (res.data.userId) return { userId: res.data.userId, email: formData.email };
    return rejectWithValue('Registration Failed');
  } catch (err) {
    return rejectWithValue('Registration Failed');
  }
});

export const isAuthenticatedAsync = createAsyncThunk<
  userStateType,
  string | null | undefined,
  thunkOptions
>('user/authenticate', async (token, { rejectWithValue }) => {
  try {
    if (token) {
      const res = await axios.get(`${process.env.NEXT_PUBLIC_BFF_URL}/auth/me`, {
        headers: {
          Authorization: token
        }
      });
      if (res.data.auth) return res.data.payload;
    }
    return rejectWithValue('Authentication failed');
  } catch (err) {
    return rejectWithValue('Authentication failed');
  }
});

export const userSlice = createSlice({
  name: 'user',
  initialState: userInitialState,
  reducers: {
    logout: () => {
      localStorage.clear();
    },

    clearState: (state) => ({ ...state, status: STATUS_TYPE.IDLE }),

    updateUserEmailState: (state, { payload }: { payload: string }) => ({
      ...state,
      email: payload
    }),

    updateUserNameState: (
      state,
      { payload }: { payload: { nameFirst: string; nameLast: string } }
    ) => ({ ...state, ...payload }),

    setToken: (state, { payload }: { payload: string }) => ({
      ...state,
      token: payload
    })
  },
  extraReducers: (builder) => {
    builder

      .addCase(registerAsync.pending, (state) => ({
        ...state,
        status: STATUS_TYPE.FETCHING
      }))

      .addCase(registerAsync.fulfilled, (state, { payload }) => ({
        ...state,
        status: STATUS_TYPE.SUCCESS,
        userId: payload.userId,
        email: payload.email
      }))

      .addCase(registerAsync.rejected, (state, { payload }) => ({
        ...state,
        status: STATUS_TYPE.ERROR,
        errorMsg: payload
      }))

      .addCase(loginAsync.pending, (state) => ({
        ...state,
        status: STATUS_TYPE.FETCHING
      }))

      .addCase(loginAsync.fulfilled, (state, { payload }) => ({
        ...state,
        status: STATUS_TYPE.SUCCESS,
        token: payload.token,
        email: payload.email
      }))

      .addCase(loginAsync.rejected, (state, { payload }) => ({
        ...state,
        status: STATUS_TYPE.ERROR,
        errorMsg: payload
      }))

      .addCase(isAuthenticatedAsync.pending, (state) => ({
        ...state,
        status: STATUS_TYPE.FETCHING
      }))

      .addCase(isAuthenticatedAsync.fulfilled, (state, { payload }) => ({
        ...state,
        status: STATUS_TYPE.SUCCESS,
        userId: payload.userId,
        firstName: payload.firstName,
        lastName: payload.lastName,
        iat: payload.iat,
        exp: payload.exp
      }))

      .addCase(isAuthenticatedAsync.rejected, (state, { payload }) => ({
        ...state,
        status: STATUS_TYPE.ERROR,
        errorMsg: payload
      }));
  }
});

export const { logout, clearState, updateUserEmailState, updateUserNameState, setToken } =
  userSlice.actions;
export default userSlice.reducer;
