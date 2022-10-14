import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { privacyCockpit } from 'utility/constants/initialStates';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import axios from 'axios';

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

export const privacyCockpitSlice = createSlice({
  name: 'privacyCockpit',
  initialState: privacyCockpit,
  reducers: {
    clearState: (state) => {
      return state;
    }
  }
});

export const { clearState } = privacyCockpitSlice.actions;
export default privacyCockpitSlice.reducer;
