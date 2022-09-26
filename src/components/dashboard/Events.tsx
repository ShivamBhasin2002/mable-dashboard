import { ComponentWrapper } from 'components/elements/common';

import { useSelector } from 'redux/store';

const Events = () => {
  const { N_Total, AVG_T_DIFF } = useSelector((state) => state.events);
  return (
    <ComponentWrapper title="Events" width={330} className="!px-[20px]">
      <div className="flex flex-row justify-center pb-[10px]">
        <div className="border-r-2 border-lines/[0.15] min-w-[125px] pr-6 flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px] ">
            {N_Total >= 1000 ? N_Total / 1000 : N_Total}
            {N_Total >= 1000 ? 'k' : null}
          </div>
          <div className="text-primary text-center text-[14px]">Total Events</div>
        </div>
        <div className="min-w-[125px] pl-6 flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px] ">
            {AVG_T_DIFF >= 1000 ? AVG_T_DIFF / 1000 : AVG_T_DIFF}
            <span className="text-[20px]">{AVG_T_DIFF >= 1000 ? 's' : 'ms'}</span>
          </div>
          <div className="text-primary text-center text-[14px]">AVG. Delivery Time</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default Events;
