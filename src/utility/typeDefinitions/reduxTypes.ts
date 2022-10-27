import { Moment } from 'moment';
import { AppDispatch, RootState } from 'redux/store';

import {
  STATUS_TYPE,
  screenType,
  eventSelectedType,
  statusSelector
} from 'utility/constants/enums';

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
  avg_loading_time_page: number;
  avg_loading_time_mable_script: number;
  avg_contribution_time_mable_script: number;
  script_tag_found: boolean;
  script_tag_last_found?: string | number;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type shopStateType = {
  active?: { apiKey?: string; id?: number; displayName?: string };
  shops: { apiKey?: string; id?: number; displayName?: string }[];
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type datesStateType = {
  dateRange: Moment[];
  datePreset?: string;
  refresh: boolean;
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
    total_count_user_id?: number;
    total_count_user_agent?: number;
    total_count_customer_data_email?: number;
    total_count_customer_data_first_name?: number;
    total_count_customer_data_last_name?: number;
    total_count_customer_data_phone?: number;
    total_count_customer_data_date_of_birth?: number;
    total_count_location_state?: number;
    total_count_location_country_name?: number;
    total_count_location_city?: number;
    total_count_location_zip_code?: number;
    total_count_clid_fbclid?: number;
    total_count_external_ids?: number;
  };
  EventParameters: {
    total_count_shopping_data_total_amount?: number;
    total_count_shopping_data_currency?: number;
    total_count_custom_data_order_id?: number;
  };
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type dataQualityStateType = {
  TOTAL_DATA_QUALITY_FACEBOOK: number;
  TOTAL_SHOPIFY_ORDERS: number;
  FACEBOOK_SUCCESS_DELIVERED_ORDERS: number;
  DATA_QUALITY_BY_DATE: { date: string; data_quality: number }[];
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type eventsStateType = {
  avgTimeDifference: number;
  correctCvOrders: number;
  status?: STATUS_TYPE;
  errorMsg?: string;
};

export type AnalyticsStateType = {
  status: string;
  error?: string;
  selected_events: {
    PageView: boolean;
    AddToCart: boolean;
    InitiateCheckout: boolean;
    AddPaymentInfo: boolean;
    Purchase: boolean;
  };
  analyticReport: {
    total_events: {
      purchase: number;
      add_payment_info: number;
      intitate_checkout: number;
      add_to_cart: number;
      page_view: number;
    };
    by_date: {
      date: string;
      purchase: number;
      add_payment_info: number;
      intitate_checkout: number;
      add_to_cart: number;
      page_view: number;
    }[];
  };
};

export type eventsDataStateType = {
  totalEventCount: number;
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

export type order = {
  order_id: number | null;
  created_at: Moment | null;
  customer_name: string;
  total_conversion_value: number | null;
  destination_conversion_value: number | null;
  status: string;
  delivery_time_difference: number | null;
  event_params_present: number | null;
  attribution_params_present: number | null;
};

export type orderAnalysisStateType = {
  statusSelected: statusSelector;
  tableData: order[];
  status: STATUS_TYPE;
  errorMsg: string | undefined;
};

export type SelectedEventsType = {
  PageView: boolean;
  AddToCart: boolean;
  InitiateCheckout: boolean;
  AddPaymentInfo: boolean;
  Purchase: boolean;
};

export type AccountUpdateType = {
  status: string;
  message: string | undefined;
};

export type privacyCockpitType = {
  paraMeterSettings: {
    status: STATUS_TYPE;
    updateAll: string;
    data_collection_destinations: {
      value: string;
      label: string;
      available: boolean;
    }[];
    data_collection_settings: {
      value: string;
      category: string;
      label: string;
    }[];
    parsed_settings: {
      settingKey: string;
      category: string;
      destination: string;
      label: string;
      settingValue: string;
    }[];
  };
  privacySettings: {
    status: STATUS_TYPE;
    hashDataInDashboard: {
      status: STATUS_TYPE;
      hashDataCheckBox: boolean;
      errorMsg?: string;
    };
    cookieConsent: {
      status: STATUS_TYPE;
      cookieConsentUrl: string;
      errorMsg?: string;
    };
    errorMsg?: string;
  };
  previousSettings: {
    source_id: number;
    setting_key: string;
    setting_value: string;
  }[];
  deleteUserData: {
    status: STATUS_TYPE;
    userData: {
      id: number;
      source_id: number;
      created_at: string;
      updated_at: string;
      email: string;
      data_collection_active: boolean;
      deleted_user_data: boolean;
    }[];
  };
};
