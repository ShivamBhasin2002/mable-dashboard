export enum dataEventLables {
  backend = 'Backend',
  frontend = 'Frontend',
  mableEngine = 'Mable Engine',
  unavailable = 'Unavailable'
}

export enum statusSelector {
  all = 'All',
  pending = 'Pending',
  success = 'Success',
  delayed = 'Delayed',
  failed = 'Failed'
}

export enum STATUS_TYPE {
  IDLE = 'idle',
  FETCHING = 'fetching',
  SUCCESS = 'success',
  ERROR = 'error'
}

export enum screenType {
  dashboard = 'Dashboard',
  orderAnalysis = 'Order Analysis',
  eventQuality = 'Event Quality',
  analytics = 'Analytics',
  setttings = 'Settings',
  tutorial = 'Tutorial'
}

export enum filterType {
  AddPaymentInfo = 'Add Payment Info',
  AddToCart = 'Add To Cart',
  InitiateCheckout = 'Initiate Checkout',
  PageView = 'Page View',
  Purchase = 'Purchase'
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

export const totalEvents = 7;

export const totatlAttributions = 13;
