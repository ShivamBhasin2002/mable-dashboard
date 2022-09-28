export enum dataEventLabels {
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
  analytics = 'Reports',
  settings = 'Settings',
  tutorial = 'Tutorial'
}

export enum filterType {
  PageView = 'Page View',
    AddToCart = 'Add To Cart',
    InitiateCheckout = 'InitiateCheckout',
    AddPaymentInfo = 'Add Payment Info',
    Purchase = 'Purchase'
}

export enum eventSelectedType {
  purchase = 'Purchase',
  addPaymentInfo = 'Add Payment Info',
  intitateCheckout = 'Intitate Checkout',
  addToCart = 'Add to Cart',
  pageView = 'Page View'
}

export enum DatePickerPresets {
  maximum = 'Maximum',
  today = 'Today',
  yesterday = 'Yesterday',
  prevSevenDays = 'Last 7 Days',
  prevFourteenDays = 'Last 14 Days',
  prevThirtyDays = 'Last 30 Days',
  currWeek = 'This Week',
  prevWeek = 'Last Week',
  currMonth = 'This Month',
  prevMonth = 'Last Month'
}

export const totalEvents = 7;

export const totalAttributions = 13;
