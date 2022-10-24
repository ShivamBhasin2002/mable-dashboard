import moment from 'moment';

import {
  DatePickerPresets as presets,
  eventSelectedType,
  routes,
  screenType,
  statusSelector
} from 'utility/constants/enums';

import { AnalyticsStateType } from 'utility/typeDefinitions/reduxTypes';

export const getMessage = (value: number) => {
  if (value >= 95) return 'Excellent';
  if (value >= 90) return 'Great';
  else if (value >= 80) return 'Decent';
  else return 'Poor';
};

export const presetsToDateRange = (preset: string) => {
  switch (preset) {
    case presets.maximum:
      return [moment(), moment()];
    case presets.today:
      return [moment(), moment()];
    case presets.yesterday:
      return [moment().subtract(1, 'day'), moment().subtract(1, 'day')];
    case presets.prevSevenDays:
      return [moment().subtract(7, 'days'), moment()];
    case presets.prevFourteenDays:
      return [moment().subtract(14, 'days'), moment()];
    case presets.prevThirtyDays:
      return [moment().subtract(30, 'days'), moment()];
    case presets.currWeek:
      return [moment().startOf('week'), moment()];
    case presets.prevWeek:
      return [
        moment().subtract(1, 'week').startOf('week'),
        moment().subtract(1, 'week').endOf('week')
      ];
    case presets.currMonth:
      return [moment().startOf('month'), moment()];
    case presets.prevMonth:
      return [
        moment().subtract(1, 'month').startOf('month'),
        moment().subtract(1, 'month').endOf('month')
      ];
  }
  return [];
};

export const getEventDisplayName = (event: string) => {
  switch (event) {
    case 'purchases':
      return eventSelectedType.purchase;
    case 'purchase':
      return eventSelectedType.purchase;
    case 'add_payment_info':
      return eventSelectedType.add_payment_info;
    case 'intitate_checkout':
      return eventSelectedType.intitate_checkout;
    case 'add_to_cart':
      return eventSelectedType.add_to_cart;
    case 'page_view':
      return eventSelectedType.page_view;
  }
};

// eslint-disable-next-line
export const getSelectedEventData = (item: any, event: string) => {
  switch (event) {
    case eventSelectedType.all:
      return (
        item.purchase +
        item.add_payment_info +
        item.intitate_checkout +
        item.add_to_cart +
        item.page_view
      );
    case eventSelectedType.purchase:
      return item.purchase;
    case eventSelectedType.add_payment_info:
      return item.add_payment_info;
    case eventSelectedType.intitate_checkout:
      return item.intitate_checkout;
    case eventSelectedType.add_to_cart:
      return item.add_to_cart;
    case eventSelectedType.page_view:
      return item.page_view;
  }
};

export const updateEvents = (state: AnalyticsStateType, payload: string) => {
  switch (payload) {
    case 'AddPaymentInfo':
      state.selected_events.AddPaymentInfo = !state.selected_events.AddPaymentInfo;
      break;
    case 'AddToCart':
      state.selected_events.AddToCart = !state.selected_events.AddToCart;
      break;
    case 'InitiateCheckout':
      state.selected_events.InitiateCheckout = !state.selected_events.InitiateCheckout;
      break;
    case 'PageView':
      state.selected_events.PageView = !state.selected_events.PageView;
      break;
    case 'Purchase':
      state.selected_events.Purchase = !state.selected_events.Purchase;
      break;
  }
};

export const screenToURL = (screen: screenType): routes | undefined => {
  switch (screen) {
    case screenType.dashboard:
      return routes.dashboard;
    case screenType.orderAnalysis:
      return routes.orderAnalysis;
    case screenType.eventQuality:
      return routes.eventQuality;
    case screenType.analytics:
      return routes.analytics;
    case screenType.settings:
      return routes.settings;
  }
};

export const URLtoScreen = (screen: string): screenType | undefined => {
  switch (screen) {
    case routes.dashboard:
      return screenType.dashboard;
    case routes.orderAnalysis:
      return screenType.orderAnalysis;
    case routes.eventQuality:
      return screenType.eventQuality;
    case routes.analytics:
      return screenType.analytics;
    case routes.settings:
      return screenType.settings;
  }
};

export const getOrderAnalysisTableIcon = (status: statusSelector | string) => {
  switch (status) {
    case statusSelector.pending:
      return 'pending';
    case statusSelector.success:
      return 'tick';
    case statusSelector.failed:
      return 'cross';
    case statusSelector.delayed:
      return 'delayed';
  }
};
