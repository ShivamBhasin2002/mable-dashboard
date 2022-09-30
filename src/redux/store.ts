import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux';
import thunk, { ThunkMiddleware } from 'redux-thunk';
import type {} from 'redux-thunk/extend-redux';

import userSlice from 'redux/reducers/authSlice';
import datesSlice from 'redux/reducers/datesSlice';
import screenSlice from 'redux/reducers/screenSlice';
import dataQualityReducer from './reducers/dataQualitySlice';
import pageSpeedReducer from './reducers/pageSpeedSlice';
import eventsReducer from './reducers/eventSlice';
import funnelAnalysisReducer from './reducers/eventsDataSlice';
import dataPerEventSlice from './reducers/dataPerEventSlice';
import orderAnalysisSlice from './reducers/orderAnalysisSlice';
import analyticsReducer from './reducers/analyticsSlice';
import shopSlice from './reducers/shopSlice';
import warningSlice from './reducers/warningSlice';

export const store = configureStore({
  reducer: {
    user: userSlice,
    dates: datesSlice,
    screen: screenSlice,
    dataQuality: dataQualityReducer,
    pageSpeed: pageSpeedReducer,
    events: eventsReducer,
    eventsData: funnelAnalysisReducer,
    dataPerEvent: dataPerEventSlice,
    orderAnalysis: orderAnalysisSlice,
    analytics: analyticsReducer,
    shop: shopSlice,
    warnings: warningSlice
  },
  middleware: [thunk as ThunkMiddleware]
});

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useDispatch: () => AppDispatch = useReduxDispatch;
