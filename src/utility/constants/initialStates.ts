import {
  dashboardStateType,
  dataPerEventStateType,
  dataQualityStateType,
  eventsStateType,
  funnelAnalysisStateType,
  generalStateType,
  pageSpeedStateType,
  userStateType,
  orderAnalysisStateType,
  AnalyticsStateType
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
  isFetching: false,
  isError: false,
  isSuccess: false,
  errorMessage: undefined
};

export const dashboardInitialState: dashboardStateType = {
  shops: [
    {
      _id: {
        $oid: 'test'
      },
      shop: 'test',
      __v: 0,
      domain: 'test',
      domainPrefix: 'test',
      isActive: true,
      userId: 'test'
    }
  ],
  shop: undefined,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined,
  dateRange: [moment('2022-07-19T00:00:00'), moment('2022-07-23T00:00:00')],
  warnings: [
    { type: 'error', message: 'Facebook API not Responding', time: '2h' },
    { type: 'warning', message: 'Unusually low number of Add to Cart Events', time: '3d' },
    { type: 'info', message: 'Deployed successfully', time: '3d' }
  ],
  eventsPerDay: [
    { value: 800, date: '19Jul' },
    { value: 1000, date: '20Jul' },
    { value: 700, date: '21Jul' },
    { value: 1300, date: '22Jul' },
    { value: 1100, date: '23Jul' },
    { value: 500, date: '24Jul' },
    { value: 1000, date: '25Jul' }
  ]
};

export const dataPerEventsInitialState: dataPerEventStateType = {
  dataContainedPerEventBarChart: [
    { attribution_quality: 12, event_quality: 6, _id: '19Jul' },
    { attribution_quality: 13, event_quality: 5, _id: '20Jul' },
    { attribution_quality: 9, event_quality: 7, _id: '21Jul' },
    { attribution_quality: 11, event_quality: 5, _id: '22Jul' },
    { attribution_quality: 12, event_quality: 6, _id: '23Jul' },
    { attribution_quality: 11, event_quality: 6, _id: '24Jul' },
    { attribution_quality: 9, event_quality: 6.2, _id: '25Jul' }
  ],
  dataContaindedPerEventDoughnutChart: {
    backend: 72,
    frontend: 21,
    mableEngine: 5,
    unavailable: 2
  },
  attribution: 12.1,
  event: 6.7,
  eventSelected: eventSelectedType.purchase,
  AttributionParameters: {
    'User IP': 0.18,
    'User Agent': 0,
    Email: 0,
    Phone: 0,
    'First Name': 0,
    'Last Name': 0,
    'Date Of Birth': 0,
    State: 0,
    Country: 0,
    City: 0,
    'Zip Code': 0,
    Currency: 0,
    'Total Price': 0,
    'Order Id': 0
  },
  EventParameters: {
    example1: 0,
    example2: 0,
    example3: 0,
    example4: 0,
    example5: 0,
    example6: 0,
    example7: 0
  },
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const orderAnalysisInitialState: orderAnalysisStateType = {
  statuSelected: statusSelector.all,
  tableData: [
    {
      id: 635978,
      date: moment(),
      customer: 'Carolin Geibel',
      total: 13800,
      cv: 13800,
      eventParametersPresent: 10,
      attributionParametersPresent: 12,
      deliveryTime: 12,
      status: 'Failed'
    },
    {
      id: 635978,
      date: moment(),
      customer: 'Carolin Geibel',
      total: 13800,
      cv: 13800,
      eventParametersPresent: 10,
      attributionParametersPresent: 12,
      deliveryTime: 12,
      status: 'Delayed'
    }
  ]
};

export const dataQualityInitialState: dataQualityStateType = {
  DQ_COM: 0.94,
  P_MDB: 258,
  P_SH: 257,
  dataQualityGrouped: [
    { date: '19 Jul', DQ_COM: 0.94 },
    { date: '20 Jul', DQ_COM: 0.96 },
    { date: '21 Jul', DQ_COM: 0.9 },
    { date: '22 Jul', DQ_COM: 0.84 },
    { date: '23 Jul', DQ_COM: 0.89 },
    { date: '24 Jul', DQ_COM: 0.87 },
    { date: '25 Jul', DQ_COM: 0.9 }
  ],
  shopifyOrders: 0,
  ordersWithCorrectCV: 0,
  recievedByFB: 0,
  avgDelieveryTime: 0,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const eventsInitialState: eventsStateType = {
  N_Total: 155200,
  AVG_T_DIFF: 8300,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const funnelAnalysisInitialState: funnelAnalysisStateType = {
  total_events: {
    'Page View': 153000,
    'Add to Cart': 122000,
    'Initiate Checkout': 90000,
    'Add Payment Info': 75000,
    Purchase: 8000
  },
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const generalInitialState: generalStateType = { screen: screenType.dashboard };

export const pageSpeedInitialState: pageSpeedStateType = {
  T_M_AVG: 200,
  T_SH_AVG: 3400,
  PS_M: 2,
  status: STATUS_TYPE.IDLE,
  errorMsg: undefined
};

export const filterOptionInitialState: AnalyticsStateType = {
  PageView: true,
  AddToCart: false,
  InitiateCheckout: false,
  AddPaymentInfo: false,
  Purchase: false,
  status : "idle",
  analyticReport: {
    "result_total_events": {
        "total_purchases": 0,
        "total_add_payment_info": 0,
        "total_intitate_checkout": 0,
        "total_add_to_cart": 0,
        "total_page_view": 0
    },
    "bydate": []
}
};
