import { AppDispatch, RootState } from 'redux/store';

export type thunkOptions = {
  dispatch: AppDispatch;
  state: RootState;
  rejectValue: string;
};

export type userState = {
  email: string | undefined;
  userId: string | undefined;
  firstName: string | undefined;
  lastName: string | undefined;
  iat: number | undefined;
  exp: number | undefined;
  token: string | undefined;
  isFetching: boolean;
  isError: boolean;
  isSuccess: boolean;
  errorMessage: string | undefined;
};

export type pageSpeedState = {
  T_M_AVG: number | string;
  T_SH_AVG: number | string;
  PS_M: number | string;
  status?: 'idle' | 'fetching' | 'success' | 'error';
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

export type dashboardState = {
  shops: shop[] | undefined;
  shop: shop | undefined;
  status: 'idle' | 'pending' | 'success' | 'error';
  errorMsg: string | undefined;
  start: Date | string;
  end: Date | string;
  warnings: { type: 'info' | 'warning' | 'error'; message: string; time: string }[];
  eventsPerDay: { date: string; value: string }[];
};

export type dataPerEventState = {
  dataContainedPerEventBarChart: {
    _id: string;
    attribute_quality: string | undefined;
    event_quality: string | undefined;
  }[];
  dataContaindedPerEventDoughnutChart: {
    backend: number;
    frontend: number;
    mableEngine: number;
    unavailable: number;
  };
  attribution: number;
  event: number;
  totatlAttribution: number;
  totalEvent: number;
  eventSelected: 'Purchase' | 'Add Payment Info' | 'Initiat Checkout' | 'Add to Cart' | 'Page View';
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
  status?: 'idle' | 'fetching' | 'success' | 'error';
  errorMsg?: string;
};

export type dataQualityState = {
  DQ_COM: number;
  P_MDB: number;
  P_SH: number;
  dataQualityGrouped: { date: string; DQ_COM: number }[];
  shopifyOrders: number;
  ordersWithCorrectCV: number;
  recievedByFB: number;
  avgDelieveryTime: number;
  status?: 'idle' | 'fetching' | 'success' | 'error';
  errorMsg?: string;
};

export type eventsState = {
  AVG_T_DIFF: number;
  N_Total: number | string;
  status?: 'idle' | 'fetching' | 'success' | 'error';
  errorMsg?: string;
};

export type funnelAnalysisState = {
  total_events: {
    'Page View': number;
    'Add to Cart': number;
    'Initiate Checkout': number;
    'Add Payment Info': number;
    Purchase: number;
  };
  status?: 'idle' | 'fetching' | 'success' | 'error';
  errorMsg?: string;
};

export interface generalState {
  screen: 'Dashboard' | 'Order Analysis' | 'Event Quality' | 'Settings' | 'Tutorial';
}
