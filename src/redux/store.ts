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
import dataQualityReducer from './reducers/dataQuality/dataQualitySlice';
import pageSpeedReducer from './reducers/dataQuality/pageSpeedSlice';
import eventsReducer from './reducers/dataQuality/eventSlice';
import funnelAnalysisReducer from './reducers/dataQuality/eventsDataSlice';
import dataPerEventSlice from './reducers/dataQuality/dataPerEventSlice';
import orderAnalysisSlice from './reducers/dataQuality/orderAnalysisSlice';
import analyticsReducer from './reducers/analytics/reportsSlice';
import shopSlice from './reducers/shopSlice';
import warningSlice from './reducers/dataQuality/warningSlice';
import { accountRootReducer } from './reducers/settings/updateAccountInfoSlice';
import privacyCockpitSlice from './reducers/settings/privacyCockpit/privacyCockpitSlice';

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
    warnings: warningSlice,
    accountSetting: accountRootReducer,
    privacyCockpit: privacyCockpitSlice
  },
  middleware: [thunk as ThunkMiddleware]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch: () => AppDispatch = useReduxDispatch;
