import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';
import { SelectorMenu } from 'components/dataQuality/Common';
import { EventsPerDayLineChart } from 'components/dataQuality/Graphs';

import { eventSelectedType, STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { eventsDataAsync, setEventSelected } from 'redux/reducers/dataQuality/eventsDataSlice';

const EventsPerDayCard = () => {
  const dispatch = useDispatch();
  const { status, eventSelected } = useSelector((state) => state.eventsData);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(eventsDataAsync());
  }, [refresh]);
  return (
    <ComponentWrapper
      title="Events Per Day"
      status={status}
      className="min-h-[238px] max-h-[400px] flex-grow-[4.5] flex-shrink-[1]"
      height={238}
      nextComponent={
        <SelectorMenu
          active={eventSelected}
          onChange={(item: eventSelectedType) => dispatch(setEventSelected(item))}
        />
      }
    >
      <div className="h-full flex flex-grow-[1] ">
        <EventsPerDayLineChart />
      </div>
    </ComponentWrapper>
  );
};

export default EventsPerDayCard;
