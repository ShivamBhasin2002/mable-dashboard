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
      className=" w-full min-h-[13.75rem] h-full flex-grow-[1] flex-shrink-[1] "
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
      <div className="flex flex-row  justify-evenly gap-[1.25rem] h-full">
        <div className="w-[18.75rem] h-[100%] flex-grow-[1]">
          <AttributionEventBarChart height={50} />
        </div>
        <ParameterMetrics flexDirection="col" />
      </div>
    </ComponentWrapper>
  );
};
export default DataContainedPerEventCard;
