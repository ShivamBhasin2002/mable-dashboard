import {
  dashboardState,
  dataPerEventState,
  dataQualityState,
  eventsState,
  funnelAnalysisState,
  generalState,
  pageSpeedState,
  userState
} from 'utility/typeDefinitions/reduxTypes';
import { STATUSt_TYPE, screenType, DatePickerPresets } from './general';
import moment from 'moment';
import { eventSelectedType } from './general';

export const userInitialState: userState = {
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

export const dashboardInitialState: dashboardState = {
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
  status: STATUSt_TYPE.IDLE,
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
  ],
  datePreset: DatePickerPresets.today
};

export const dataPerEventsInitialState: dataPerEventState = {
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
  totalEvent: 7,
  totatlAttribution: 13,
  eventSelected: eventSelectedType.purchase,
  AttributionParameters: {
    'User IP': 0,
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
  status: STATUSt_TYPE.IDLE,
  errorMsg: undefined
};

export const dataQualityInitialState: dataQualityState = {
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
  status: STATUSt_TYPE.IDLE,
  errorMsg: undefined
};

export const eventsInitialState: eventsState = {
  N_Total: 155200,
  AVG_T_DIFF: 8300,
  status: STATUSt_TYPE.IDLE,
  errorMsg: undefined
};

export const funnelAnalysisInitialState: funnelAnalysisState = {
  total_events: {
    'Page View': 153000,
    'Add to Cart': 122000,
    'Initiate Checkout': 90000,
    'Add Payment Info': 75000,
    Purchase: 8000
  },
  status: STATUSt_TYPE.IDLE,
  errorMsg: undefined
};

export const generalInitialState: generalState = { screen: screenType.dashboard };

export const pageSpeedInitialState: pageSpeedState = {
  T_M_AVG: 200,
  T_SH_AVG: 3400,
  PS_M: 2,
  status: STATUSt_TYPE.IDLE,
  errorMsg: undefined
};
