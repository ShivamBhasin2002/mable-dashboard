import moment, { Moment } from 'moment';
import { screenType } from 'utility/constants/general';

export const containsToday = (dateRange: Moment[]): boolean => {
  return moment().isBetween(moment(dateRange[0]).subtract(1), moment(dateRange[1]).add(1));
};

export const showReload = (screen: screenType) => {
  switch (screen) {
    case screenType.accountSettings:
      return false;
    case screenType.privacyCockpit:
      return false;
    case screenType.dataProcessing:
      return false;
    default:
      return true;
  }
};

export const showDatePicker = (screen: screenType) => {
  switch (screen) {
    case screenType.accountSettings:
      return false;
    case screenType.privacyCockpit:
      return false;
    case screenType.dataProcessing:
      return false;
    default:
      return true;
  }
};

export const makeBool = (str: string) => {
  return str === 'true';
};
