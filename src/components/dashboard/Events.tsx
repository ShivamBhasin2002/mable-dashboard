import { ComponentWrapper } from 'components/elements/common';

import { useSelector } from 'redux/store';

const Events = () => {
  const { totalEventCount, avgTimeDifference } = useSelector((state) => state.events);
  return (
    <ComponentWrapper title="Events" width={330} className="!px-[20px] flex-grow">
      <div className="flex flex-row justify-center pb-[10px]">
        <div className="border-r-2 border-lines/[0.15] min-w-[125px] pr-6 flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px] ">
            {totalEventCount >= 1000 ? totalEventCount / 1000 : totalEventCount}
            {totalEventCount >= 1000 ? 'k' : null}
          </div>
          <div className="text-primary text-center text-[14px]">Total Events</div>
        </div>
        <div className="min-w-[125px] pl-6 flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px] ">
            {avgTimeDifference >= 1000 ? avgTimeDifference / 1000 : avgTimeDifference}
            <span className="text-[20px]">{avgTimeDifference >= 1000 ? 's' : 'ms'}</span>
          </div>
          <div className="text-primary text-center text-[14px]">AVG. Delivery Time</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default Events;
