export type IconType = {
  icon?: string;
  size?: string;
  color?: string;
  width?: number;
  height?: number;
  className?: string;
};

export type CheckBoxProps = {
  size: string;
  colorScheme: string;
  className: string;
  name: string;
  message?: string;
};

export type ComponentWrapperProps = {
  width?: number | undefined;
  height?: number | undefined;
  children: React.ReactNode;
  title?: string | undefined;
  nextComponent?: React.ReactNode | undefined;
  underlined?: boolean | undefined;
  className?: string | undefined;
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
