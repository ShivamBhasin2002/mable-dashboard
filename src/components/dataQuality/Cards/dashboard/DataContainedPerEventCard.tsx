import { useEffect } from 'react';

import { ComponentWrapper, ViewFullReport } from 'components/common';
import {
  DataPerEventDoughnutChart,
  DataPerEventDoughnutChartLabels,
  AttributionEventBarChart
} from 'components/dataQuality/Graphs';
import { SelectorMenu } from 'components/dataQuality/Common';
import { ParameterMetrics } from 'components/dataQuality/General';
import { eventSelectedType, screenType, STATUS_TYPE } from 'utility/constants/general';

import { useSelector, useDispatch } from 'redux/store';
import { dataPerEventAsync, setEventSelected } from 'redux/reducers/dataPerEventSlice';

const DataContainedPerEventCard = () => {
  const dispatch = useDispatch();
  const { status, eventSelected } = useSelector((state) => state.dataPerEvent);
  useEffect(() => {
    if (status === STATUS_TYPE.IDLE) dispatch(dataPerEventAsync());
  }, [status]);
  return (
    <ComponentWrapper
      title="Data Contained Per Event"
      width={560}
      height={335}
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
        <div className="flex-grow">
          <AttributionEventBarChart height={80} />
        </div>
        <div className="flex flex-col w-[350]">
          <div className="flex gap-[20px]">
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
