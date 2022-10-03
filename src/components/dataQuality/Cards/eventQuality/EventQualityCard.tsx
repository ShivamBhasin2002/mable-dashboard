import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';

import {
  AttributionEventBarChart,
  DataPerEventDoughnutChart,
  DataPerEventDoughnutChartLabels
} from 'components/dataQuality/Graphs';
import { ParameterMetrics } from 'components/dataQuality/General';
import { SelectorMenu } from 'components/dataQuality/Common';

import { eventSelectedType, STATUS_TYPE } from 'utility/constants/general';

import { useSelector, useDispatch } from 'redux/store';
import { dataPerEventAsync, setEventSelected } from 'redux/reducers/dataPerEventSlice';

const EventQualityCard = () => {
  const dispatch = useDispatch();
  const { eventSelected, status } = useSelector((state) => state.dataPerEvent);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(dataPerEventAsync());
  }, [refresh]);
  return (
    <ComponentWrapper
      nextComponent={
        <SelectorMenu
          active={eventSelected}
          onChange={(item: eventSelectedType) => dispatch(setEventSelected(item))}
        />
      }
      height={400}
      className="flex-grow-0"
    >
      <div className="flex items-center justify-evenly mr-8 mt-5 flex-wrap gap-[40px]">
        <ParameterMetrics />
        <div className="flex-grow">
          <AttributionEventBarChart height={150} />
        </div>
        <div className="flex gap-8">
          <div className="w-[250px] ">
            <DataPerEventDoughnutChart />
          </div>
          <DataPerEventDoughnutChartLabels />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default EventQualityCard;
