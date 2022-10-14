import moment, { Moment } from 'moment';

export const containsToday = (dateRange: Moment[]): boolean => {
  return moment().isBetween(moment(dateRange[0]).subtract(1), moment(dateRange[1]).add(1));
};
