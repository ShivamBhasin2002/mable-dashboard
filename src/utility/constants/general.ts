export const dataEventLables = ['Backend', 'Frontend', 'Mable Engine', 'Unavailable'];

export const parameterSelector = [
  'Purchase',
  'Add Payment Info',
  'Initiate Checkout',
  'Add to Cart',
  'Page View'
];

export enum STATUSt_TYPE {
  IDLE = 'idle',
  FETCHING = 'fetching',
  SUCCESS = 'success',
  ERROR = 'error'
}

export enum screenType {
  dashboard = 'Dashboard',
  orderAnalysis = 'Order Analysis',
  eventQuality = 'Event Quality',
  setttings = 'Settings',
  tutorial = 'Tutorial'
}

export enum eventSelectedType {
  purchase = 'Purchase',
  addPaymentInfo = 'Add Payment Info',
  initiateCheckout = 'Initiate Checkout',
  addToCart = 'Add to Cart',
  pageView = 'Page View'
}

export enum DatePickerPresets {
  maximum = 'Maximum',
  today = 'Today',
  yesterday = 'Yesterday',
  prevSevenDays = 'Last 7 Days',
  prevForteenDays = 'Last 14 Days',
  prevThirtyDays = 'Last 30 Days',
  currWeek = 'This Week',
  prevWeek = 'Last Week',
  currMonth = 'This Month',
  prevMonth = 'Last Month'
}
