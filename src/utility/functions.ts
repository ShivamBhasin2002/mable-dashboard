import moment from 'moment';
import { ChartArea } from 'chart.js';

import colors from 'utility/colors';
import {
  DatePickerPresets as presets,
  eventSelectedType,
  statusSelector
} from './constants/general';

export const createGradient = (
  ctx: CanvasRenderingContext2D,
  area: ChartArea,
  colors: { stop: number; color: string }[]
) => {
  const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
  colors.forEach((color) => gradient.addColorStop(color.stop, color.color));
  return gradient;
};

export const getColor = (value: number) => {
  if (value >= 90) return colors.success;
  else if (value >= 80) return colors.average;
  else return colors.error;
};

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
    case presets.prevForteenDays:
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

export const statusTypeColors = (status: string) => {
  switch (status) {
    case statusSelector.failed:
      return 'bg-failed';
    case statusSelector.delayed:
      return 'bg-delayed';
    case statusSelector.pending:
      return 'bg-purple';
    case statusSelector.success:
      return 'bg-success';
  }
};

export const getEventDisplayName = (event: string) => {
  switch (event) {
    case 'total_purchases':
      return eventSelectedType.purchase;
    case 'total_add_payment_info':
      return eventSelectedType.addPaymentInfo;
    case 'total_intitate_checkout':
      return eventSelectedType.initiateCheckout;
    case 'total_add_to_cart':
      return eventSelectedType.addToCart;
    case 'total_page_view':
      return eventSelectedType.pageView;
  }
};
