import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { AppDispatch, useSelector } from 'redux/store';

export const loginAsync = createAsyncThunk<
  userState,
  {
    email: string;
    password: string;
    rememberMe: boolean;
  },
  {
    dispatch: AppDispatch;
    state: userState;
    rejectValue: string;
  }
>('user/login', async ({ email, password, rememberMe }, thunkApi) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/login`, {
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
  userState,
  {
    email: string;
    password: string;
    firstName: string;
    lastName: string;
  },
  {
    dispatch: AppDispatch;
    state: userState;
    rejectValue: string;
  }
>('user/register', async ({ email, password, firstName, lastName }, { rejectWithValue }) => {
  try {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/register`, {
      email,
      password,
      firstName,
      lastName
    });
    return res.data;
  } catch (err) {
    return rejectWithValue('Register Failed');
  }
});

export const authenticatedAsync = createAsyncThunk<
  userState,
  string,
  {
    dispatch: AppDispatch;
    state: userState;
    rejectValue: string;
  }
>('user/authenticate', async (token: string, { rejectWithValue }) => {
  try {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/auth/me`, {
      headers: {
        Authorization: token
      }
    });
    return res.data;
  } catch (err) {
    return rejectWithValue('Authentication failed');
  }
});

export interface userState {
  userId: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  iat: number | undefined;
  exp: number | undefined;
  token: string | undefined;
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string | undefined;
}

const initialState: userState = {
  userId: undefined,
  firstName: undefined,
  lastName: undefined,
  iat: undefined,
  exp: undefined,
  token: localStorage.getItem('token') || undefined,
  isFetching: false,
  isError: false,
  isSuccess: false,
  errorMessage: ''
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem('token');
      state = initialState;
      state.token = '';
      return state;
    },
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(registerAsync.fulfilled, (state, { payload }) => {
        console.log('payload', payload);
        state.isFetching = false;
        state.isSuccess = true;
        state.token = payload.token;
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
      })
      .addCase(loginAsync.rejected, (state, { payload }) => {
        console.log('payload', payload);
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload;
      })
      .addCase(authenticatedAsync.pending, (state) => {
        state.isFetching = true;
      })
      .addCase(authenticatedAsync.fulfilled, (state, { payload }) => {
        state.isFetching = false;
        state.isSuccess = true;
      })
      .addCase(authenticatedAsync.rejected, (state, { payload }) => {
        console.log('fetchUserBytoken');
        state.isFetching = false;
        state.isError = true;
        state.errorMessage = payload;
      });
  }
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
