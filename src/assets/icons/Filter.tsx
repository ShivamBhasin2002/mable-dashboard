import { IconType } from 'utility/typeDefinitions/componentPropTypes';

const SVGComponent = (props: IconType) => (
  <svg
    width="18"
    height="19"
    viewBox="0 0 18 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M10.447 17.905C10.6126 17.8238 10.7521 17.6979 10.8499 17.5415C10.9476 17.3851 10.9996 17.2044 11 17.02V11.7C11 11.438 11.105 11.186 11.293 11L17.414 4.94602C17.5994 4.763 17.7466 4.54502 17.8472 4.30471C17.9478 4.0644 17.9997 3.80653 18 3.54602V0.990018C17.9995 0.859315 17.9732 0.729998 17.9226 0.60947C17.8721 0.488942 17.7982 0.379569 17.7053 0.287613C17.6124 0.195656 17.5023 0.122922 17.3813 0.0735724C17.2603 0.0242231 17.1307 -0.00077185 17 1.81586e-05H1C0.447 1.81586e-05 0 0.442018 0 0.990018V3.54602C0 4.07102 0.211 4.57502 0.586 4.94602L6.707 11C6.79974 11.0915 6.8734 11.2005 6.92369 11.3206C6.97399 11.4408 6.99993 11.5698 7 11.7V18.01C7 18.745 7.782 19.223 8.447 18.894L10.447 17.905V17.905Z"
      fill="black"
    />
  </svg>
);

export default SVGComponent;