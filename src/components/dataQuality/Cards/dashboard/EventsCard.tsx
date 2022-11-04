import { useEffect } from "react";
import { ComponentWrapper } from "@components/common";
import { eventsAsync } from "@redux/reducers/dataQuality/eventSlice";

import { useSelector, useDispatch } from "@redux/store";
import { STATUS_TYPE } from "@utility/constants/enums";
import {
  dateTimeReducer,
  numberReducer,
} from "@utility/functions/formattingFunctions";
import {
  avgDeliveryTimeLabel,
  totalEventsLabel,
} from "@utility/constants/strings";

const EventsCard = () => {
  const dispatch = useDispatch();
  const { avgTimeDifference, status: eventsStatus } = useSelector(
    (state) => state.events
  );
  const { totalEventCount, status: eventsDataStatus } = useSelector(
    (state) => state.eventsData
  );
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (eventsStatus !== STATUS_TYPE.FETCHING) dispatch(eventsAsync());
  }, [refresh]);

  return (
    <ComponentWrapper
      title="Events"
      className="flex-grow lg:pb-[20px] h-min"
      status={[eventsStatus, eventsDataStatus]}
    >
      <div className="flex-grow flex flex-row justify-center items-center h-full">
        <div className="border-r-2 border-lines/[0.15] min-w-[125px] pr-6 flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px] ">
            {numberReducer(totalEventCount)}
          </div>
          <div className="text-primary text-center text-[14px]">
            {totalEventsLabel}
          </div>
        </div>
        <div className="min-w-[125px] pl-6 flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px] ">
            {dateTimeReducer(avgTimeDifference).value}
            <span className="text-[20px]">
              {dateTimeReducer(avgTimeDifference).unit}
            </span>
          </div>
          <div className="text-primary text-center text-[14px]">
            {avgDeliveryTimeLabel}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default EventsCard;
