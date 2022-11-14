import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';

import { AttributionEventBarChart } from 'components/dataQuality/Graphs';
import { ParameterMetrics } from 'components/dataQuality/General';
import { SelectorMenu } from 'components/dataQuality/Common';

import { eventSelectedType, STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { dataPerEventAsync, setEventSelected } from 'redux/reducers/dataQuality/dataPerEventSlice';

const EventQualityCard = () => {
  const dispatch = useDispatch();
  const { eventSelected, status } = useSelector((state) => state.dataPerEvent);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(dataPerEventAsync());
  }, [refresh, eventSelected]);
  return (
    <ComponentWrapper
      title="Data Contained per Event"
      status={status}
      className="overflow-hidden min-h-[168px] max-h-[400px] flex-grow-[1]"
      height={168}
      nextComponent={
        <SelectorMenu
          active={eventSelected}
          onChange={(item: eventSelectedType) => dispatch(setEventSelected(item))}
        />
      }
    >
      <div className="flex items-center justify-evenly mr-8 flex-wrap gap-5  min-h-[130px] h-100 flex-grow-[.5] ">
        <ParameterMetrics flexDirection="row" />
        <div className="w-60 h-[100%] flex-grow-[1]">
          <AttributionEventBarChart />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default EventQualityCard;
