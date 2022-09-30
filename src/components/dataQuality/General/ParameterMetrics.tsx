import { totalEvents, totalAttributions } from 'utility/constants/general';

import { useSelector } from 'redux/store';

const ParameterMetrics = () => {
  const { attribution, event } = useSelector((state) => state.dataPerEvent);
  return (
    <div className="flex flex-row justify-evenly gap-[10px]">
      <div className="p-[20px] w-[165px] h-[105px] flex flex-col items-center justify-evenly bg-gradient-to-tr from-[#1D2E4B] to-bgContainerFrom rounded-[16px] drop-shadow-xl">
        <div className="flex flex-row gap-[5px] items-baseline">
          <span className="bg-purple w-[11px] h-[11px] rounded-full" />
          <div className=" text-[30px] leading-[34px] font-lato text-center text-light">
            {attribution}
          </div>
          <span className="text-[14px] text-light/[.41]">/ {totalAttributions}</span>
        </div>
        <div className="text-primary text-center text-[13px] whitespace-nowrap">
          Attribution Parameters
        </div>
      </div>
      <div className="p-[20px] w-[165px] h-[105px] flex flex-col items-center justify-evenly bg-gradient-to-tr from-[#1D2E4B] to-bgContainerFrom rounded-[16px] drop-shadow-xl">
        <div className="flex flex-row gap-[5px] items-baseline">
          <span className="bg-lightPurple w-[11px] h-[11px] rounded-full" />
          <div className=" text-[30px] leading-[34px] font-lato text-center text-light">
            {event}
          </div>
          <span className="text-[14px] text-light/[.41]">/ {totalEvents}</span>
        </div>
        <div className="text-primary text-center text-[13px] whitespace-nowrap">
          Event Parameters
        </div>
      </div>
    </div>
  );
};

export default ParameterMetrics;
