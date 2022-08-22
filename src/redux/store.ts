import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import type {} from 'redux-thunk/extend-redux';

import userSlice from 'redux/reducers/userSlice';
import dashboardSlice from 'redux/reducers/dashboardSlice';
import generalSlice from 'redux/reducers/generalSlice';
import dataQualitySlice from './reducers/dataQualitySlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    dashboard: dashboardSlice,
    general: generalSlice,
    dataQuality: dataQualitySlice
  },
  middleware: [thunk as ThunkMiddleware]
});

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useDispatch: () => AppDispatch = useReduxDispatch;
