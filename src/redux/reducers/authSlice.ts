import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { thunkOptions, userStateType } from 'utility/typeDefinitions/reduxTypes';
import { userInitialState } from 'utility/constants/initialStates';

import { STATUS_TYPE } from 'utility/constants/enums';

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
    const res = await axios.post(`${process.env.REACT_APP_BFF_URL}/auth/login`, {
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
    const res = await axios.post(`${process.env.REACT_APP_BFF_URL}/auth/register`, formData);
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
      const res = await axios.get(`${process.env.REACT_APP_BFF_URL}/auth/me`, {
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
      localStorage.removeItem('token');
      window.location.reload();
    },
    clearState: (state) => {
      state.status = STATUS_TYPE.IDLE;
      return state;
    },
    updateUserEmailState: (state, { payload }) => {
      state.email = payload;
    },
    updateUserNameState: (state, { payload }) => {
      state.firstName = payload.nameFirst;
      state.lastName = payload.nameLast;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(registerAsync.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.userId = payload.userId;
        state.email = payload.email;
      })
      .addCase(registerAsync.rejected, (state, { payload }) => {
        state.status = STATUS_TYPE.ERROR;
        state.errorMsg = payload;
      })
      .addCase(loginAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.token = payload.token;
        state.email = payload.email;
      })
      .addCase(loginAsync.rejected, (state, { payload }) => {
        state.status = STATUS_TYPE.ERROR;
        state.errorMsg = payload;
      })
      .addCase(isAuthenticatedAsync.pending, (state) => {
        state.status = STATUS_TYPE.FETCHING;
      })
      .addCase(isAuthenticatedAsync.fulfilled, (state, { payload }) => {
        state.status = STATUS_TYPE.SUCCESS;
        state.userId = payload.userId;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.iat = payload.iat;
        state.exp = payload.exp;
      })
      .addCase(isAuthenticatedAsync.rejected, (state, { payload }) => {
        state.status = STATUS_TYPE.ERROR;
        state.errorMsg = payload;
      });
  }
});

export const { logout, clearState, updateUserEmailState, updateUserNameState } = userSlice.actions;
export default userSlice.reducer;
