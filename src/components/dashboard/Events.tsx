import ComponentWrapper from '../elements/ComponentWrapper';

import { useSelector } from 'redux/store';

const Events = () => {
  const { N_Total, AVG_T_DIFF } = useSelector((state) => state.events);
  return (
    <ComponentWrapper title="Events" width={330}>
      <div className="flex flex-row justify-center">
        <div className="border-r-2 border-lines/[0.15] min-w-[125px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {N_Total}
          </div>
          <div className="text-primary text-center text-[14px]">Total Events</div>
        </div>
        <div className="min-w-[125px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {AVG_T_DIFF}
          </div>
          <div className="text-primary text-center text-[14px]">Avg. Delivery Time</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default Events;
