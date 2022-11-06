import { configureStore } from '@reduxjs/toolkit';
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
  TypedUseSelectorHook
} from 'react-redux';
import { createWrapper } from "next-redux-wrapper";
import thunk, { ThunkMiddleware } from 'redux-thunk';
import type {} from 'redux-thunk/extend-redux';

import userSlice from '@redux/reducers/authSlice';
import datesSlice from '@redux/reducers/datesSlice';
import screenSlice from '@redux/reducers/screenSlice';
import dataQualityReducer from '@redux/reducers/dataQuality/dataQualitySlice';
import pageSpeedReducer from '@redux/reducers/dataQuality/pageSpeedSlice';
import eventsReducer from '@redux/reducers/dataQuality/eventSlice';
import funnelAnalysisReducer from '@redux/reducers/dataQuality/eventsDataSlice';
import dataPerEventSlice from '@redux/reducers/dataQuality/dataPerEventSlice';
import orderAnalysisSlice from '@redux/reducers/dataQuality/orderAnalysisSlice';
import analyticsReducer from '@redux/reducers/analytics/reportsSlice';
import shopSlice from '@redux/reducers/shopSlice';
import warningSlice from '@redux/reducers/dataQuality/warningSlice';
import { accountRootReducer } from '@redux/reducers/settings/updateAccountInfoSlice';
import privacyCockpitSlice from '@redux/reducers/settings/privacyCockpit/privacyCockpitSlice';
import eventUsageData from '@redux/reducers/eventUsageSlice';

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
    privacyCockpit: privacyCockpitSlice,
    eventUsage: eventUsageData
  },
  middleware: [thunk as ThunkMiddleware]
});



export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch: () => AppDispatch = useReduxDispatch;
const makeStore = () => store;
export const wrapper = createWrapper(makeStore);