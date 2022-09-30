import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';
import { SelectorMenu } from 'components/dataQuality/Common';
import { EventsPerDayLineChart } from 'components/dataQuality/Graphs';

import { eventSelectedType, STATUS_TYPE } from 'utility/constants/general';

import { useSelector, useDispatch } from 'redux/store';
import { eventsDataAsync, setEventSelected } from 'redux/reducers/eventsDataSlice';

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
      width={600}
      nextComponent={
        <SelectorMenu
          active={eventSelected}
          onChange={(item: eventSelectedType) => dispatch(setEventSelected(item))}
        />
      }
    >
      <EventsPerDayLineChart />
    </ComponentWrapper>
  );
};

export default EventsPerDayCard;
