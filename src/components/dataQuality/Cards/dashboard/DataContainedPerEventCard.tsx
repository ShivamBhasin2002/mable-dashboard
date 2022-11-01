import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';
import { AttributionEventBarChart } from 'components/dataQuality/Graphs';
import { SelectorMenu, ViewFullReport } from 'components/dataQuality/Common';
import { ParameterMetrics } from 'components/dataQuality/General';
import { eventSelectedType, screenType, STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { dataPerEventAsync, setEventSelected } from 'redux/reducers/dataQuality/dataPerEventSlice';

const DataContainedPerEventCard = () => {
  const dispatch = useDispatch();
  const { status, eventSelected } = useSelector((state) => state.dataPerEvent);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(dataPerEventAsync());
  }, [refresh, eventSelected]);
  return (
    <ComponentWrapper
      title="Data Contained Per Event"
      status={status}
      nextComponent={
        <div className="flex-grow px-4 flex justify-between gap-4">
          <SelectorMenu
            active={eventSelected}
            onChange={(item: eventSelectedType) => dispatch(setEventSelected(item))}
          />

          <ViewFullReport screen={screenType.eventQuality} />
        </div>
      }
    >
      <div className="flex flex-row flex-wrap hd:flex-nowrap justify-evenly gap-[20px] h-full">
        <div className="flex-1 max-w-[80%]">
          <AttributionEventBarChart height={80} />
        </div>
        <ParameterMetrics flexDirection="col" />
      </div>
    </ComponentWrapper>
  );
};
export default DataContainedPerEventCard;
