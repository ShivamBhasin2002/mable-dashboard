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
      <div className="flex flex-col lg:flex-row justify-start items-center h-full gap-2 flex-grow">
        <div className="flex flex-row  lg:flex-col gap-2 justify-around items-center  lg:h-full w-[300px] min-w-[250px] relative lg:items-start flex-grow max-w-[300px]">
          <QualityCombined />
          <OrderComposition />
        </div>
        <div className="w-full lg:w-[300px] lg:min-w-[200px]  h-[100%] flex-grow mt-[1rem] ">
          <DataQualityLineChart />
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataQualityCard;
