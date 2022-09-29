import { useEffect } from 'react';

import { ComponentWrapper, ViewFullReport } from 'components/common';
import { QualityCombined, OrderComposition } from 'components/dataQuality/General';
import { DataQualityLineChart } from 'components/dataQuality/Graphs';
import { screenType, STATUS_TYPE } from 'utility/constants/general';

import { useSelector, useDispatch } from 'redux/store';
import { dataQualityAsync } from 'redux/reducers/dataQualitySlice';

const DataQualityCard = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.dataQuality);
  useEffect(() => {
    if (status === STATUS_TYPE.IDLE) dispatch(dataQualityAsync());
  }, [status]);
  return (
    <ComponentWrapper
      title="Data Quality"
      nextComponent={<ViewFullReport screen={screenType.orderAnalysis} />}
    >
      <div className="flex flex-row justify-evenly flex-wrap gap-8">
        <div className="flex flex-col gap-4 justify-evenly">
          <QualityCombined />
          <OrderComposition />
        </div>
        <div className="flex-grow box-border">
          <DataQualityLineChart height={250} />
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataQualityCard;
