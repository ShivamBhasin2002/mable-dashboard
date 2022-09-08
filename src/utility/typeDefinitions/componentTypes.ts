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
};

export type ViewFullReportProps = {
  screen: 'Dashboard' | 'Order Analysis' | 'Event Quality' | 'Settings' | 'Tutorial';
};
