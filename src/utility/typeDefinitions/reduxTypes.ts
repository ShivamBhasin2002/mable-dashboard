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
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type pageSpeedStateType = {
  AVG_LOADING_TIME_PAGE: number;
  AVG_LOADING_TIME_MABLE_SCRIPT: number;
  AVG_CONTRIBUTION_TIME_MABLE_SCRIPT: number;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type shopStateType = {
  active?: { apiKey?: string; id?: number; name?: string };
  shops: { apiKey?: string; id?: number; name?: string }[];
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type datesStateType = {
  dateRange: Moment[];
  datePreset?: string;
};

export type warningStateType = {
  active: { type: 'info' | 'warning' | 'error'; message: string; time: string }[];
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type dataPerEventStateType = {
  byDate: {
    date: string;
    attribution_params_quality?: number;
    events_quality?: number;
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
  avgTimeDifference: number;
  totalEventCount: number;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type eventsDataStateType = {
  total_events: {
    purchases: number;
    add_payment_info: number;
    intitate_checkout: number;
    add_to_cart: number;
    page_view: number;
  };
  byDate: {
    date: Moment;
    purchases: number;
    add_payment_info: number;
    intitate_checkout: number;
    add_to_cart: number;
    page_view: number;
  }[];
  eventSelected: eventSelectedType;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type screenStateType = {
  activeScreen: screenType;
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
