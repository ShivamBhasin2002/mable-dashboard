import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { userInitialState } from 'utility/constants/initialStates';

import { thunkOptions, userState } from 'utility/typeDefinitions/reduxTypes';

export const loginAsync = createAsyncThunk<
  string,
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
    return res.data.token;
  } catch (err) {
    return thunkApi.rejectWithValue('Login Failed');
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
  userState,
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

const initialState: userState = {
  ...userInitialState
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state = initialState;
      return state;
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      state.errorMessage = undefined;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(registerAsync.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.userId = payload.userId;
        state.email = payload.email;
      })
      .addCase(registerAsync.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload;
      })
      .addCase(loginAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(loginAsync.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.token = payload;
      })
      .addCase(loginAsync.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload;
      })
      .addCase(isAuthenticatedAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(isAuthenticatedAsync.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
        state.userId = payload.userId;
        state.firstName = payload.firstName;
        state.lastName = payload.lastName;
        state.iat = payload.iat;
        state.exp = payload.exp;
      })
      .addCase(isAuthenticatedAsync.rejected, (state, { payload }) => {
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload;
      });
  }
});

export const { logout, clearState } = userSlice.actions;
export default userSlice.reducer;
