import { IconType } from "@utility/typeDefinitions/componentPropTypes";

const SvgComponent = (props: IconType) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={24}
    height={24}
    {...props}
  >
    <g id="Polygon_6" data-name="Polygon 6" fill="none">
      <path
        d="M10.388,4.621a3,3,0,0,1,5.223,0l7.858,13.9A3,3,0,0,1,20.858,23H5.142A3,3,0,0,1,2.53,18.524Z"
        stroke="none"
      />
      <path
        d="M 13 5.096843719482422 C 12.82456970214844 5.096843719482422 12.38856029510498 5.146333694458008 12.12944030761719 5.60478401184082 L 4.271139144897461 19.5079345703125 C 4.016080856323242 19.95919418334961 4.190950393676758 20.35481452941895 4.277969360351562 20.50396347045898 C 4.364990234375 20.65310478210449 4.623359680175781 21.00000381469727 5.141700744628906 21.00000381469727 L 20.85829925537109 21.00000381469727 C 21.37664031982422 21.00000381469727 21.635009765625 20.65310478210449 21.72203063964844 20.50396347045898 C 21.80904960632324 20.35481452941895 21.98392105102539 19.95919418334961 21.72885894775391 19.5079345703125 L 13.87057018280029 5.604795455932617 C 13.61143970489502 5.146333694458008 13.17543029785156 5.096843719482422 13 5.096843719482422 M 12.99999618530273 3.096847534179688 C 14.01874256134033 3.096847534179688 15.03748989105225 3.604789733886719 15.61168956756592 4.620674133300781 L 23.46998977661133 18.52382469177246 C 24.60034942626953 20.52370452880859 23.15551948547363 23.00000381469727 20.85829925537109 23.00000381469727 L 5.141700744628906 23.00000381469727 C 2.844480514526367 23.00000381469727 1.399650573730469 20.52370452880859 2.530010223388672 18.52382469177246 L 10.38831043243408 4.620674133300781 C 10.96250534057617 3.604789733886719 11.98124980926514 3.096847534179688 12.99999618530273 3.096847534179688 Z"
        stroke="none"
        fill="#ef4e5c"
      />
    </g>
    <text
      id="_"
      data-name="!"
      transform="translate(12 18)"
      fill="#ef4e5c"
      fontSize={10}
      fontFamily="Montserrat-Bold, Montserrat"
      fontWeight={700}
    >
      <tspan x={0} y={0}>
        {"!"}
      </tspan>
    </text>
  </svg>
);

export default SvgComponent;
