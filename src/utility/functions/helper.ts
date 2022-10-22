import moment, { Moment } from 'moment';
import { screenType } from 'utility/constants/general';

export const containsToday = (dateRange: Moment[]): boolean => {
  return moment().isBetween(
    moment(dateRange[0]).subtract(1, 'days'),
    moment(dateRange[1]).add(1, 'days')
  );
};

export const showReload = (screen: screenType) => {
  switch (screen) {
    case screenType.settings:
      return false;
    default:
      return true;
  }
};

export const showDatePicker = (screen: screenType) => {
  switch (screen) {
    case screenType.settings:
      return false;
    default:
      return true;
  }
};
