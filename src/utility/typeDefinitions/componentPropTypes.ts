import { eventSelectedType, screenType, STATUS_TYPE } from 'utility/constants/enums';

export type IconType = {
  id?: string;
  icon?: string;
  size?: string;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
  isActive?: boolean;
};

export type CheckBoxProps = {
  size: string;
  colorScheme: string;
  className: string;
  name: string;
  message?: string;
};

export type ComponentWrapperProps = {
  width?: number | string;
  height?: number | string;
  children?: React.ReactNode;
  title?: string;
  nextComponent?: React.ReactNode;
  underlined?: boolean;
  className?: string;
  status?: STATUS_TYPE | (STATUS_TYPE | undefined)[];
  id?: string;
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

export type csv = {
  day: string;
  date: string;
  count_purchase?: number;
  count_add_payment_info?: number;
  count_intitate_checkout?: number;
  count_add_to_cart?: number;
  count_page_view?: number;
};

export type SideBarItemProps = {
  icon: string;
  title: string;
  clickHandle: () => void;
  isActive: boolean;
};

export type toggletypeProps = {
  value: boolean;
  setState: React.Dispatch<
    React.SetStateAction<{
      settingKey?: string;
      settingValue?: string;
    }>
  >;
  dataSaved?: {
    key: string;
    status: string;
  };
  activeColor?: string;
  inactiveColor?: string;
  name?: string;
  disable?: boolean;
  setdataSaved?: React.Dispatch<
    React.SetStateAction<{
      key: string;
      status: string;
    }>
  >;
};
export type PaginationProps = {
  page: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  array: unknown[];
  itemsPerPage: number;
};

export type ErrorProps = {
  header: React.ReactNode | string;
  body?: React.ReactNode | string;
  icon?: string;
  footerText?: string;
  handleClick?: () => void;
  closable?: boolean;
  reload?: boolean;
};
