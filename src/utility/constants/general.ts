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
  settings = 'Settings',
  tutorial = 'Tutorial'
}

export enum eventSelectedType {
  purchase = 'Purchase',
  add_payment_info = 'Add Payment Info',
  intitate_checkout = 'Intitate Checkout',
  add_to_cart = 'Add to Cart',
  page_view = 'Page View'
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
