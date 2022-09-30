import { IconType } from 'utility/typeDefinitions/componentPropTypes';

const SVGComponent = (props: IconType) => (
  <svg
    width={13}
    height={8}
    viewBox="0 0 13 8"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="M0 3.513H10" stroke="#7F8C9F" strokeWidth={2} />
    <path d="M7.50002 6.15329V0.872108L12.0104 3.5127L7.50002 6.15329Z" fill="#7F8C9F" />
    <path
      d="M11.0207 3.51269L8 1.74421V5.28118L11.0207 3.51269ZM13 3.51269L7 7.02539V-7.62939e-06L13 3.51269Z"
      fill="#7F8C9F"
    />
  </svg>
);

export default SVGComponent;
