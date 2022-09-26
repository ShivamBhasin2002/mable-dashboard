import { IconType } from 'utility/typeDefinitions/componentTypes';

const SVGComponent = (props: IconType) => (
  <svg
    width="14"
    height="17"
    viewBox="0 0 14 17"
    fill="white"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <line x1="13" y1="4.37112e-08" x2="13" y2="17" stroke="white" strokeWidth="2" />
    <line x1="9" y1="3" x2="9" y2="17" stroke="white" strokeWidth="2" />
    <line x1="1" y1="3" x2="1" y2="17" stroke="white" strokeWidth="2" />
    <line x1="5" y1="9" x2="5" y2="17" stroke="white" strokeWidth="2" />
  </svg>
);



export default SVGComponent;
