import { totalEvents, totalAttributions } from 'utility/constants/numbers';

import { useSelector } from 'redux/store';
import { attributionParameterLabel, eventParametersLabel } from 'utility/constants/strings';

const ParameterMetrics = ({ flexDirection }: { flexDirection: 'row' | 'col' }) => {
  const { attribution, event } = useSelector((state) => state.dataPerEvent);
  return (
    <div
      className={`flex ${
        flexDirection === 'col' ? 'flex-col' : 'flex-row'
      } justify-evenly gap-[10px]`}
    >
      <div className="p-[1rem] flex flex-col items-center justify-evenly bg-gradient-to-tr from-[#1D2E4B] to-bgContainerFrom rounded-[16px] drop-shadow-xl">
        <div className="flex flex-row gap-[5px] items-baseline">
          <span className="bg-purple w-[11px] h-[11px] rounded-full" />
          <div className=" text-[1.3rem] leading-[34px] font-lato text-center text-light">
            {attribution}
          </div>
          <span className="text-[.8rem] text-light/[.41]">/ {totalAttributions}</span>
        </div>
        <div className="text-primary text-center text-[.7rem] whitespace-nowrap">
          {attributionParameterLabel}
        </div>
      </div>
      <div className="p-[1rem] flex flex-col items-center justify-evenly bg-gradient-to-tr from-[#1D2E4B] to-bgContainerFrom rounded-[16px] drop-shadow-xl">
        <div className="flex flex-row gap-[5px] items-baseline">
          <span className="bg-lightPurple w-[11px] h-[11px] rounded-full" />
          <div className=" text-[1.3rem] leading-[34px] font-lato text-center text-light">
            {event}
          </div>
          <span className="text-[.8rem] text-light/[.41]">/ {totalEvents}</span>
        </div>
        <div className="text-primary text-center text-[.7rem] whitespace-nowrap">
          {eventParametersLabel}
        </div>
      </div>
    </div>
  );
};

export default ParameterMetrics;
