/* eslint-disable consistent-return */
import { combineReducers, createAsyncThunk, createReducer } from '@reduxjs/toolkit';
import { thunkOptions } from 'utility/typeDefinitions/reduxTypes';
import axios from 'axios';

import {
  emailUpdateInitialState,
  passwordUpdateInitialState,
  userNameUpdateInitialState
} from 'utility/constants/initialStates';
import { STATUS_TYPE } from 'utility/constants/enums';

export const updateUsername = createAsyncThunk<
  { message: string },
  {
    userId: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
  },
  thunkOptions
>(
  'accountsetting/update/name',
  async ({ userId, firstName, lastName }, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BFF_URL}/auth/username/update`,
        {
          userId,
          firstName,
          lastName
        },
        {
          headers: { Authorization: `${getState().user.token}` }
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

export const updateEmail = createAsyncThunk<
  { errorKey: string; message: string },
  {
    userId: string | undefined;
    email: string | undefined;
  },
  thunkOptions
>('accountsetting/update/email', async ({ userId, email }, { rejectWithValue, getState }) => {
  try {
    const { data } = await axios.put(
      `${process.env.REACT_APP_BFF_URL}/auth/email/update`,
      { userId, email },
      {
        headers: { Authorization: `${getState().user.token}` }
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

export const updatePassword = createAsyncThunk<
  { errorKey: string; message: string },
  {
    password: string;
    newPassword: string;
  },
  thunkOptions
>(
  'accountsetting/password/update',
  async ({ password, newPassword }, { rejectWithValue, getState }) => {
    try {
      const { data } = await axios.put(
        `${process.env.REACT_APP_BFF_URL}/auth/password/update`,
        { password, newPassword },
        {
          headers: { Authorization: `${getState().user.token}` }
        }
      );
      if (data) {
        return data;
      }
    } catch (error) {
      let message = '';
      if (axios.isAxiosError(error) && error.response) {
        message = error.message;
      } else message = String(error);
      return rejectWithValue(message);
    }
  }
);

export const updateUserNameReducer = createReducer(userNameUpdateInitialState, (builder) => {
  builder
    .addCase(updateUsername.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(updateUsername.fulfilled, (state, { payload }) => {
      state.status = STATUS_TYPE.SUCCESS;
      state.message = payload.message;
    })
    .addCase(updateUsername.rejected, (state, { error }) => {
      state.status = STATUS_TYPE.ERROR;
      state.message = error.message;
    });
});

export const updateEmailReducer = createReducer(emailUpdateInitialState, (builder) => {
  builder
    .addCase(updateEmail.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(updateEmail.fulfilled, (state, { payload }) => {
      state.status = STATUS_TYPE.SUCCESS;
      state.message = payload.message;
    })
    .addCase(updateEmail.rejected, (state, { error }) => {
      state.status = STATUS_TYPE.ERROR;
      state.message = error.message;
    });
});

export const updatePasswordReducer = createReducer(passwordUpdateInitialState, (builder) => {
  builder
    .addCase(updatePassword.pending, (state) => {
      state.status = STATUS_TYPE.FETCHING;
    })
    .addCase(updatePassword.fulfilled, (state, { payload }) => {
      state.status = STATUS_TYPE.SUCCESS;
      state.message = payload.message;
    })
    .addCase(updatePassword.rejected, (state, { error }) => {
      state.status = STATUS_TYPE.ERROR;
      state.message = error.message;
    });
});

export const accountRootReducer = combineReducers({
  updateEmailReducer,
  updatePasswordReducer,
  updateUserNameReducer
});

// export const { updateUserEmailState, updateUserNameState } = userStateUpdate.actions;
export default accountRootReducer;
