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
  AccountUpdateType,
  privacyCockpitType
} from 'utility/typeDefinitions/reduxTypes';
import { STATUS_TYPE, statusSelector, DatePickerPresets, screenType } from './enums';
import moment from 'moment';
import { eventSelectedType } from './enums';

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
  dateRange: [moment().subtract(14, 'days'), moment()],
  datePreset: DatePickerPresets.prevFourteenDays,
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
  avg_loading_time_page: 0,
  avg_loading_time_mable_script: 0,
  avg_contribution_time_mable_script: 0,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined,
  script_tag_found: true,
  script_tag_last_found: undefined
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

export const privacyCockpit: privacyCockpitType = {
  paraMeterSettings: {
    status: STATUS_TYPE.IDLE,
    data_collection_destinations: [
      {
        value: 'database',
        label: 'Your Database',
        available: true
      },
      {
        value: 'facebook',
        label: 'Facebook',
        available: true
      },
      {
        value: 'tiktok',
        label: 'Tik Tok',
        available: false
      }
    ],
    data_collection_settings: [
      {
        value: 'email',
        category: 'personalData',
        label: 'E-Mail Address'
      },
      {
        value: 'firstname',
        category: 'personalData',
        label: 'First Name'
      },
      {
        value: 'lastname',
        category: 'personalData',
        label: 'Last Name'
      },
      {
        value: 'birthdate',
        category: 'personalData',
        label: 'Birthdate'
      },
      {
        value: 'phonenumber',
        category: 'personalData',
        label: 'Phone Number'
      },
      {
        value: 'city',
        category: 'location',
        label: 'City'
      },
      {
        value: 'postalcode',
        category: 'location',
        label: 'Postal Code'
      },
      {
        value: 'state',
        category: 'location',
        label: 'State'
      },
      {
        value: 'country',
        category: 'location',
        label: 'Country'
      },
      {
        value: 'useragent',
        category: 'others',
        label: 'User Agent'
      },
      {
        value: 'ipaddress',
        category: 'others',
        label: 'IP Address'
      },
      {
        value: 'externeid',
        category: 'others',
        label: 'External ID'
      },
      {
        value: 'klickid',
        category: 'others',
        label: 'Click-Id'
      }
    ],
    parsed_settings: []
  },

  privacySettings: {
    status: STATUS_TYPE.IDLE,
    hashDataInDashboard: {
      status: STATUS_TYPE.IDLE,
      hashDataCheckBox: false,
      errorMsg: undefined
    },
    cookieConsent: {
      status: STATUS_TYPE.IDLE,
      cookieConsentUrl: ' ',
      errorMsg: undefined
    },
    errorMsg: undefined
  },
  previousSettings: [
    {
      source_id: 43,
      setting_key: 'hash_database',
      setting_value: ''
    }
  ],
  deleteUserData: {
    status: STATUS_TYPE.IDLE,
    userData: [
      {
        id: 1,
        source_id: 57,
        created_at: '2022-10-19T12:30:32.144Z',
        updated_at: '2022-10-19T14:41:22.267Z',
        email: 'asd0@åsd.as',
        data_collection_active: false,
        deleted_user_data: true
      }
    ]
  }
};
