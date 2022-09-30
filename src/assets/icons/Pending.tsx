import { IconType } from 'utility/typeDefinitions/componentPropTypes';

const SVGComponent = (props: IconType) => (
  <svg
    width={13}
    height={5}
    viewBox="0 0 13 5"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <g clipPath="url(#clip0_198_45)">
      <path
        d="M1.5 4.25C2.32843 4.25 3 3.57843 3 2.75C3 1.92157 2.32843 1.25 1.5 1.25C0.671573 1.25 0 1.92157 0 2.75C0 3.57843 0.671573 4.25 1.5 4.25Z"
        fill="white"
      />
      <path
        d="M6.5 4.25C7.32843 4.25 8 3.57843 8 2.75C8 1.92157 7.32843 1.25 6.5 1.25C5.67157 1.25 5 1.92157 5 2.75C5 3.57843 5.67157 4.25 6.5 4.25Z"
        fill="white"
      />
      <path
        d="M11.5 4.25C12.3284 4.25 13 3.57843 13 2.75C13 1.92157 12.3284 1.25 11.5 1.25C10.6716 1.25 10 1.92157 10 2.75C10 3.57843 10.6716 4.25 11.5 4.25Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_198_45">
        <rect width={13} height={4} fill="white" transform="translate(0 0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export default SVGComponent;
