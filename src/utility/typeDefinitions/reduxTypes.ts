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
  AVG_LOADING_TIME_PAGE: number;
  AVG_LOADING_TIME_MABLE_SCRIPT: number;
  AVG_CONTRIBUTION_TIME_MABLE_SCRIPT: number;
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
  source_id: number;
};

export type dashboardStateType = {
  shops?: shop[];
  shop?: shop;
  status: STATUS_TYPE;
  errorMsg?: string;
  dateRange: Moment[];
  warnings: { type: 'info' | 'warning' | 'error'; message: string; time: string }[];
  datePreset?: string;
};

export type dataPerEventStateType = {
  dataContainedPerEventBarChart: {
    _id: string;
    attribution_quality?: number;
    event_quality?: number;
  }[];
  dataContainedPerEventDoughnutChart: {
    backend: number;
    frontend: number;
    mableEngine: number;
    unavailable: number;
  };
  attribution: number;
  event: number;
  eventSelected: eventSelectedType;
  AttributionParameters: {
    user_id?: number;
    user_agent?: number;
    customer_data_email?: number;
    customer_data_first_name?: number;
    customer_data_last_name?: number;
    customer_data_phone?: number;
    customer_data_date_of_birth?: number;
    location_state?: number;
    location_country_name?: number;
    location_city?: number;
    location_zip_code?: number;
    clid_fbclid?: number;
    external_ids?: number;
  };
  EventParameters: {
    shopping_data_total_amount?: number;
    shopping_data_currency?: number;
    custom_data_order_id?: number;
  };
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type dataQualityStateType = {
  TOTAL_DATA_QUALITY_FACEBOOK: number;
  TOTAL_SHOPIFY_ORDERS: number;
  FACEBOOK_SUCCESS_DELIVERED_ORDERS: number;
  DATA_QUALITY_BY_DATE: { date: string; data_quality: number }[];
  ordersWithCorrectCV: number;
  avgDeliveryTime: number;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type eventsStateType = {
  AVG_T_DIFF: number;
  N_Total: number;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type funnelAnalysisStateType = {
  total_events: {
    total_purchases: number;
    total_add_payment_info: number;
    total_intitate_checkout: number;
    total_add_to_cart: number;
    total_page_view: number;
  };
  byDate: {
    date: Moment;
    total_purchases: number;
    total_add_payment_info: number;
    total_intitate_checkout: number;
    total_add_to_cart: number;
    total_page_view: number;
  }[];
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type generalStateType = {
  screen: screenType;
};

export type orderAnalysisStateType = {
  statusSelected: statusSelector;
  tableData: {
    order_id: number | null;
    date: Moment | null;
    customer: string;
    total_value: number | null;
    conversion_value: number | null;
    status: string;
    delivery_time: number | null;
    evt_params_present: number | null;
    attr_params_present: number | null;
  }[];
  status: STATUS_TYPE;
  errorMsg: string | undefined;
};
