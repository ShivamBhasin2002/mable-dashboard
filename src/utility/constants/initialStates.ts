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
  warningStateType,
  AccountUpdateType
} from 'utility/typeDefinitions/reduxTypes';
import moment from 'moment';

import {
  STATUS_TYPE,
  statusSelector,
  DatePickerPresets,
  screenType,
  eventSelectedType
} from 'utility/constants/enums';

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

export const userNameUpdateInitialState: AccountUpdateType = {
  status: STATUS_TYPE.IDLE,
  message: ''
};

export const emailUpdateInitialState: AccountUpdateType = {
  status: STATUS_TYPE.IDLE,
  message: undefined
};
export const passwordUpdateInitialState: AccountUpdateType = {
  status: STATUS_TYPE.IDLE,
  message: undefined
};

export const shopInitialState: shopStateType = {
  active: undefined,
  shops: [],
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const datesInitialState: datesStateType = {
  dateRange: localStorage.getItem('dateRange')
    ? JSON.parse(localStorage.getItem('dateRange') ?? '[]')?.map((date: any) => moment(date) ?? '') // eslint-disable-line
    : [moment().subtract(14, 'days'), moment()],
  datePreset:
    localStorage.getItem('datePreset') ?? localStorage.getItem('dateRange')
      ? undefined
      : DatePickerPresets.prevFourteenDays,
  refresh: false
};

export const warningInitialState: warningStateType = {
  active: [],
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const dataPerEventsInitialState: dataPerEventStateType = {
  byDate: [],
  dataContainedPerEventDoughnutChart: {
    backend: 73,
    frontend: 21,
    mableEngine: 5,
    unavailable: 2
  },
  attribution: 0,
  event: 0,
  AttributionParameters: {},
  EventParameters: {},
  eventSelected: eventSelectedType.all,
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
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const eventsInitialState: eventsStateType = {
  avgTimeDifference: 0,
  correctCvOrders: 0,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const eventsDataInitialState: eventsDataStateType = {
  totalEventCount: 0,
  total_events: {
    purchases: 0,
    add_payment_info: 0,
    intitate_checkout: 0,
    add_to_cart: 0,
    page_view: 0
  },
  eventSelected: eventSelectedType.all,
  byDate: [],
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const screenInitialState: screenStateType = { activeScreen: screenType.dashboard };

export const pageSpeedInitialState: pageSpeedStateType = {
  avgLoadingTimePage: 0,
  avgLoadingTimeMableScript: 0,
  avgContributionTimeMableScript: 0,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined,
  scriptTagNotFound: true,
  scriptTagLastFound: undefined
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
