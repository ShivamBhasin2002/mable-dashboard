import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import type {} from 'redux-thunk/extend-redux';

import userSlice from 'redux/reducers/authSlice';
import dashboardSlice from 'redux/reducers/dashboardSlice';
import generalSlice from 'redux/reducers/generalSlice';
import dataQualityReducer from './reducers/dataQualitySlice';
import pageSpeedReducer from './reducers/pageSpeedSlice';
import eventsReducer from './reducers/eventSlice';
import funnelAnalysisReducer from './reducers/funnelAnalysis';
import dataPerEventSlice from './reducers/dataPerEventSlice';
import orderAnalysisSlice from './reducers/orderAnalysisSlice';
import analyticsReducer from './reducers/analyticsSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    dashboard: dashboardSlice,
    general: generalSlice,
    dataQuality: dataQualityReducer,
    pageSpeed: pageSpeedReducer,
    events: eventsReducer,
    funnelAnalysis: funnelAnalysisReducer,
    dataPerEvent: dataPerEventSlice,
    orderAnalysis: orderAnalysisSlice,
    analytics: analyticsReducer
  },
  middleware: [thunk as ThunkMiddleware]
});

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useDispatch: () => AppDispatch = useReduxDispatch;
