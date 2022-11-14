import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';
import { ViewFullReport } from 'components/dataQuality/Common';
import { QualityCombined, OrderComposition } from 'components/dataQuality/General';
import { DataQualityLineChart } from 'components/dataQuality/Graphs';
import { screenType, STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { dataQualityAsync } from 'redux/reducers/dataQuality/dataQualitySlice';

const DataQualityCard = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.dataQuality);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(dataQualityAsync());
  }, [refresh]);
  return (
    <ComponentWrapper
      title="Data Quality"
      nextComponent={<ViewFullReport screen={screenType.orderAnalysis} />}
      status={status}
      height={220}
      className="overflow-hidden min-h-[220px] max-h-[400px] flex-grow-[1] flex-shrink-[1]"
    >
      <div className="flex flex-row justify-evenly items-center h-full flex-wrap lg:flex-nowrap gap-2 flex-grow">
        <div className="flex-grow flex flex-row lg:flex-col gap-2 justify-around items-center lg:h-full ">
          <QualityCombined />
          <OrderComposition />
        </div>
        <div className=" min-w-[300px] max-w-[700px]  h-[100%] flex-grow-[1] mt-[1rem]">
          <DataQualityLineChart />
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataQualityCard;
