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
  privacyCockpit = 'Privacy Cockpit',
  tutorial = 'Tutorial',
  settings = 'Account'
}

export enum routes {
  login = '/auth/login',
  register = '/auth/register',
  dashboard = '/data_quality/dashboard',
  orderAnalysis = '/data_quality/order_analysis',
  eventQuality = '/data_quality/event_quality',
  analytics = '/analytics/reports',
  settings = '/settings/account_settings',
  privacyCockpit = '/settings/privacy_cockpit'
}

export enum filterType {
  PageView = 'Page View',
  AddToCart = 'Add To Cart',
  InitiateCheckout = 'InitiateCheckout',
  AddPaymentInfo = 'Add Payment',
  Purchase = 'Purchase'
}

export enum byDate {
  total_count_page_view = 'PageView',
  total_count_add_to_cart = 'AddToCart',
  total_count_initiate_checkout = 'Init. Checkout',
  total_count_add_payment_info = 'AddPaymentInfo',
  total_count_purchase = 'Purchase'
}

export enum eventSelectedType {
  all = 'All Events',
  purchase = 'Purchase',
  add_payment_info = 'Add Payment',
  intitate_checkout = 'Init. Checkout',
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

export enum SORT_ORDER {
  INCREASING = 'increasing',
  DECREASING = 'decreasing'
}

export enum perameterSettingsCategoryType {
  PERSONAL = 'personalData',
  LOCATION = 'location',
  OTHERS = 'others'
}
export enum perameterSettingsSocialType {
  DATABASE = 'database',
  FACEBOOK = 'facebook',
  TIKTOK = 'tiktok'
}

export enum tiers {
  tierOne = 'Tier 1',
  tierTwo = 'Tier 2',
  tierThree = 'Tier 3',
  tierFour = 'Tier 4',
  tierFive = 'Tier 5'
}

export enum tierRanges {
  tierOne = 50000,
  tierTwo = 150000,
  tierThree = 500000,
  tierFour = 5000000,
  tierFive = 10000000
}
