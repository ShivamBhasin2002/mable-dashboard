import { eventSelectedType, screenType, STATUS_TYPE } from 'utility/constants/general';

export type IconType = {
  icon?: string;
  size?: string;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  active?: boolean;
};

export type CheckBoxProps = {
  size: string;
  colorScheme: string;
  className: string;
  name: string;
  message?: string;
};

export type ComponentWrapperProps = {
  width?: number;
  height?: number;
  children?: React.ReactNode;
  title?: string;
  nextComponent?: React.ReactNode;
  underlined?: boolean;
  className?: string;
  status?: STATUS_TYPE;
};

export type TextFieldProps = {
  label?: string;
  icon?: string;
  type: string;
  name: string;
  placeholder?: string;
};

export type LayoutProps = {
  children: React.ReactNode;
};

export type LoadingProps = {
  message?: string;
  className?: string;
};

export type ViewFullReportProps = {
  screen: screenType;
};

export type datePickerProps = {
  close: () => void;
  isOpen: boolean;
};

export type SelectorMenuProps = {
  active: eventSelectedType;
  onChange: (item: eventSelectedType) => void;
};

export type StatisticPropTypes = { value?: string | number; message?: string };

export type AttributionEventBarChartProps = {
  width?: number;
  height?: number;
};

export type DataQualityLineChartProps = {
  width?: number;
  height?: number;
  color?: string;
};
export type csv = {
  day: string;
  date: string;
  count_purchase: number;
  count_add_payment_info: number;
  count_intitate_checkout: number;
  count_add_to_cart: number;
  count_page_view: number;
};