import { Moment } from 'moment';
import { AppDispatch, RootState } from 'redux/store';

import {
  STATUS_TYPE,
  screenType,
  eventSelectedType,
  statusSelector
} from 'utility/constants/general';

export type thunkOptions = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: string;
};

export type userStateType = {
  email?: string;
  userId?: string;
  firstName?: string;
  lastName?: string;
  iat?: number;
  exp?: number;
  token?: string;
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage?: string;
};

export type pageSpeedStateType = {
  T_M_AVG: number;
  T_SH_AVG: number;
  PS_M: number;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type shop = {
  _id: {
    $oid: string;
  };
  shop: string;
  __v: number;
  domain: string;
  domainPrefix: string;
  isActive: true;
  userId: string;
};

export type dashboardStateType = {
  shops?: shop[];
  shop?: shop;
  status: STATUS_TYPE;
  errorMsg?: string;
  dateRange: Moment[];
  warnings: { type: 'info' | 'warning' | 'error'; message: string; time: string }[];
  eventsPerDay: { date: string; value: number }[];
  datePreset?: string;
};

export type dataPerEventStateType = {
  dataContainedPerEventBarChart: {
    _id: string;
    attribution_quality?: number;
    event_quality?: number;
  }[];
  dataContaindedPerEventDoughnutChart: {
    backend: number;
    frontend: number;
    mableEngine: number;
    unavailable: number;
  };
  attribution: number;
  event: number;
  eventSelected: eventSelectedType;
  AttributionParameters: {
    'User IP': number;
    'User Agent': number;
    Email: number;
    Phone: number;
    'First Name': number;
    'Last Name': number;
    'Date Of Birth': number;
    State: number;
    Country: number;
    City: number;
    'Zip Code': number;
    Currency: number;
    'Total Price': number;
    'Order Id': number;
  };
  EventParameters: {
    example1: number;
    example2: number;
    example3: number;
    example4: number;
    example5: number;
    example6: number;
    example7: number;
  };
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type dataQualityStateType = {
  DQ_COM: number;
  P_MDB: number;
  P_SH: number;
  dataQualityGrouped: { date: string; DQ_COM: number }[];
  shopifyOrders: number;
  ordersWithCorrectCV: number;
  recievedByFB: number;
  avgDelieveryTime: number;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type eventsStateType = {
  AVG_T_DIFF: number;
  N_Total: number;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type AnalyticsStateType = {
  PageView: boolean;
  AddToCart: boolean;
  InitiateCheckout: boolean;
  AddPaymentInfo: boolean;
  Purchase: boolean;
  status: string;
  analyticReport: {
    result_total_events: {
      total_purchases: number;
      total_add_payment_info: number;
      total_intitate_checkout: number;
      total_add_to_cart: number;
      total_page_view: number;
    };
    bydate: Array<{
      date: string;
      count_purchase: number;
      count_add_payment_info: number;
      count_intitate_checkout: number;
      count_add_to_cart: number;
      count_page_view: number;
    }>;
  };
};

export type funnelAnalysisStateType = {
  total_events: {
    'Page View': number;
    'Add to Cart': number;
    'Initiate Checkout': number;
    'Add Payment Info': number;
    Purchase: number;
  };

  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type generalStateType = {
  screen: screenType;
};

export type orderAnalysisStateType = {
  statuSelected: statusSelector;
  tableData: {
    id: number;
    date: Moment;
    customer: string;
    total: number;
    cv: number;
    eventParametersPresent: number;
    attributionParametersPresent: number;
    deliveryTime: number;
    status: string;
  }[];
};
