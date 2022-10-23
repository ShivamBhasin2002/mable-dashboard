import { useEffect, useState } from 'react';
import { ComponentWrapper } from 'components/common';
import { eventsAsync } from 'redux/reducers/dataQuality/eventSlice';

import { useSelector, useDispatch } from 'redux/store';
import { STATUS_TYPE } from 'utility/constants/enums';
import { dateTimeReducer, numberReducer } from 'utility/functions/formattingFunctions';
import { avgDeliveryTime, totalEvents } from 'utility/constants/strings';

const EventsCard = () => {
  const dispatch = useDispatch();
  const { avgTimeDifference, status: eventsStatus } = useSelector((state) => state.events);
  const { totalEventCount, status: eventsDataStatus } = useSelector((state) => state.eventsData);
  const [displayTime, setDisplayTime] = useState({ value: 0, unit: 'ms' });
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (eventsStatus !== STATUS_TYPE.FETCHING) dispatch(eventsAsync());
  }, [refresh]);
  useEffect(() => {
    setDisplayTime(dateTimeReducer(avgTimeDifference));
  }, [avgTimeDifference]);

  return (
    <ComponentWrapper
      title="Events"
      className="flex-grow lg:pb-[20px]"
      status={[eventsStatus, eventsDataStatus]}
    >
      <div className="flex-grow flex flex-row justify-center">
        <div className="border-r-2 border-lines/[0.15] min-w-[125px] pr-6 flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px] ">
            {numberReducer(totalEventCount)}
          </div>
          <div className="text-primary text-center text-[14px]">{totalEvents}</div>
        </div>
        <div className="min-w-[125px] pl-6 flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px] ">
            {displayTime.value}
            <span className="text-[20px]">{displayTime.unit}</span>
          </div>
          <div className="text-primary text-center text-[14px]">{avgDeliveryTime}</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default EventsCard;
