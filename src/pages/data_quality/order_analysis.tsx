import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';
import StatusSelectorMenu from 'components/dataQuality/General/StatusSelecterMenu';
import OrderAnalysisTable from 'components/dataQuality/Cards/orderAnalysis/OrderAnalysisTable';
import OrderDataAnalysisCard from 'components/dataQuality/Cards/orderAnalysis/OrderDataAnalysisCard';

import { useSelector, useDispatch } from 'redux/store';
import { dataQualityAsync } from 'redux/reducers/dataQualitySlice';
import { STATUS_TYPE } from 'utility/constants/general';

const OrderAnalysis = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.dataQuality);
  useEffect(() => {
    if (status === STATUS_TYPE.IDLE) dispatch(dataQualityAsync());
  }, [status]);
  return (
    <div className="flex flex-col mt-[40px] gap-[40px]">
      <OrderDataAnalysisCard />
      <ComponentWrapper className="text-light">
        <StatusSelectorMenu />
        <OrderAnalysisTable />
      </ComponentWrapper>
    </div>
  );
};

export default OrderAnalysis;
