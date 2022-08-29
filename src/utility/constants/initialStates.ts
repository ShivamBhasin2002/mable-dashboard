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
  status: 'idle',
  errorMsg: undefined,
  start: '2022-07-19T00:00:00',
  end: '2022-07-23T00:00:00',
  warnings: [],
  eventsPerDay: []
};

export const dataPerEventsInitialState: dataPerEventState = {
  dataContainedPerEventBarChart: [],
  dataContaindedPerEventDoughnutChart: {
    backend: 0,
    frontend: 0,
    mableEngine: 0,
    unavailable: 0
  },
  attribution: 0,
  event: 0,
  totalEvent: 7,
  totatlAttribution: 13,
  eventSelected: 'Purchase',
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
  status: 'idle',
  errorMsg: undefined
};

export const dataQualityInitialState: dataQualityState = {
  DQ_COM: 0,
  P_MDB: 0,
  P_SH: 0,
  dataQualityGrouped: [],
  shopifyOrders: 0,
  ordersWithCorrectCV: 0,
  recievedByFB: 0,
  avgDelieveryTime: 0,
  status: 'idle',
  errorMsg: undefined
};

export const eventsInitialState: eventsState = {
  N_Total: 0,
  AVG_T_DIFF: 0,
  status: 'idle',
  errorMsg: undefined
};

export const funnelAnalysisInitialState: funnelAnalysisState = {
  total_events: {
    'Page View': 3000,
    'Add to Cart': 20000,
    'Initiate Checkout': 5000,
    'Add Payment Info': 3000,
    Purchase: 300
  },
  status: 'idle',
  errorMsg: undefined
};

export const generalInitialState: generalState = { screen: 'Dashboard' };

export const pageSpeedInitialState: pageSpeedState = {
  T_M_AVG: 200,
  T_SH_AVG: 0,
  PS_M: 0,
  status: 'idle',
  errorMsg: undefined
};
