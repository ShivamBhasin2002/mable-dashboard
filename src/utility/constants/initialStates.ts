import {
  datesStateType,
  dataPerEventStateType,
  dataQualityStateType,
  eventsStateType,
  eventsDataStateType,
  screenStateType,
  pageSpeedStateType,
  userStateType,
  orderAnalysisStateType,
  AnalyticsStateType,
  shopStateType,
  warningStateType
} from 'utility/typeDefinitions/reduxTypes';
import { STATUS_TYPE, screenType, statusSelector } from './general';
import moment from 'moment';
import { eventSelectedType } from './general';

export const userInitialState: userStateType = {
  email: undefined,
  userId: undefined,
  firstName: undefined,
  lastName: undefined,
  iat: undefined,
  exp: undefined,
  token: localStorage.getItem('token') || undefined,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const shopInitialState: shopStateType = {
  active: undefined,
  shops: [],
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const datesInitialState: datesStateType = {
  dateRange: [moment('2022-08-01'), moment('2022-08-31')]
};

export const warningInitialState: warningStateType = {
  active: [],
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const dataPerEventsInitialState: dataPerEventStateType = {
  byDate: [],
  dataContainedPerEventDoughnutChart: {
    backend: 0,
    frontend: 0,
    mableEngine: 0,
    unavailable: 0
  },
  attribution: 0,
  event: 0,
  AttributionParameters: {},
  EventParameters: {},
  eventSelected: eventSelectedType.purchase,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const orderAnalysisInitialState: orderAnalysisStateType = {
  statusSelected: statusSelector.all,
  tableData: [],
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const dataQualityInitialState: dataQualityStateType = {
  TOTAL_DATA_QUALITY_FACEBOOK: 0,
  TOTAL_SHOPIFY_ORDERS: 0,
  FACEBOOK_SUCCESS_DELIVERED_ORDERS: 0,
  DATA_QUALITY_BY_DATE: [],
  ordersWithCorrectCV: 0,
  avgDeliveryTime: 0,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const eventsInitialState: eventsStateType = {
  totalEventCount: 0,
  avgTimeDifference: 0,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const eventsDataInitialState: eventsDataStateType = {
  total_events: {
    purchases: 0,
    add_payment_info: 0,
    intitate_checkout: 0,
    add_to_cart: 0,
    page_view: 0
  },
  eventSelected: eventSelectedType.purchase,
  byDate: [],
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const screenInitialState: screenStateType = { activeScreen: screenType.dashboard };

export const pageSpeedInitialState: pageSpeedStateType = {
  AVG_LOADING_TIME_PAGE: 0,
  AVG_LOADING_TIME_MABLE_SCRIPT: 0,
  AVG_CONTRIBUTION_TIME_MABLE_SCRIPT: 0,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const filterOptionInitialState: AnalyticsStateType = {
  status: 'success',
  selected_events: {
    PageView: true,
    AddToCart: false,
    InitiateCheckout: false,
    AddPaymentInfo: false,
    Purchase: false
  },
  analyticReport: {
    total_events: {
      purchase: 226,
      add_payment_info: 0,
      intitate_checkout: 747,
      add_to_cart: 1680,
      page_view: 47160
    },
    by_date: [
      {
        date: '2022-08-16',
        purchase: 20,
        add_payment_info: 0,
        intitate_checkout: 202,
        add_to_cart: 209,
        page_view: 7461
      }
    ]
  }
};
