import { useToast } from "@chakra-ui/react";
import moment, { Moment } from "moment";
import { screenType } from "@utility/constants/enums";

export const containsToday = (dateRange: Moment[]): boolean =>
  moment().isBetween(
    moment(dateRange[0]).subtract(1, "days"),
    moment(dateRange[1]).add(1, "days")
  );

export const showReload = (screen: screenType) => {
  switch (screen) {
    case screenType.settings:
      return false;
    case screenType.privacyCockpit:
      return false;
    default:
      return true;
  }
};

export const showDatePicker = (screen: screenType) => {
  switch (screen) {
    case screenType.settings:
      return false;
    case screenType.privacyCockpit:
      return false;
    default:
      return true;
  }
};

export const reloadScreen = () => window.location.reload();

export const ShowToast = () => {
  const toast = useToast();
  toast({
    title: `Data Updated Successfully`,
    status: "success",
    isClosable: true,
    position: "top-right",
  });
};

export const isValidUrl = (urlString: string) => {
  const urlPattern = new RegExp(
    "^(https?:\\/\\/)?" + // validate protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // validate domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // validate OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // validate port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // validate query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  ); // validate fragment locator
  return !!urlPattern.test(urlString);
};

export const daysInThisMonth = () => {
  const now = new Date();
  return new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
};
