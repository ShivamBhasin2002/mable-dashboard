export const dataEventLables = ['Backend', 'Frontend', 'Mable Engine', 'Unavailable'];

export const parameterSelector = [
  'Purchase',
  'Add Payment Info',
  'Initiate Checkout',
  'Add to Cart',
  'Page View'
];

export enum statusType {
  Idle = 'idle',
  Fetching = 'fetching',
  Success = 'success',
  Error = 'error'
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
