import { screenType } from 'utility/constants/general';

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
