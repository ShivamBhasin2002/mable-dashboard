import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import { useDispatch, useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';

import userSlice from 'redux/reducers/userSlice';
import { Thunk } from 'yup/lib/util/types';

export const store = configureStore({
  reducer: {
    user: userSlice
  },
  middleware: [thunk as ThunkMiddleware]
});

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const dispatch = useDispatch<AppDispatch>();
