import { useEffect } from 'react';

import { ComponentWrapper, ViewFullReport } from 'components/common';
import {
  DataPerEventDoughnutChart,
  DataPerEventDoughnutChartLabels,
  AttributionEventBarChart
} from 'components/dataQuality/Graphs';
import { SelectorMenu } from 'components/dataQuality/Common';
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
      <div className="flex flex-row flex-wrap justify-center gap-[20px]">
        <div className="flex-grow min-h-[200px]">
          <AttributionEventBarChart height={80} />
        </div>
        <div className=" flex-grow xl:flex-grow-0 flex flex-row-reverse xl:flex-col w-[350] justify-evenly">
          <div className="flex flex-col xl:flex-row xl:gap-[20px]">
            <div className="w-[170px] ">
              <DataPerEventDoughnutChart />
            </div>
            <DataPerEventDoughnutChartLabels />
          </div>
          <ParameterMetrics />
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataContainedPerEventCard;
