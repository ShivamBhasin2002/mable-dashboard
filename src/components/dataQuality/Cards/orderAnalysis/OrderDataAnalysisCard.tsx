import { useEffect } from 'react';

import { ComponentWrapper } from 'components/elements/common';
import { LineChart, QualityCombined } from 'components/elements/quality';
import { Stats } from 'components/orderAnalysis';

import colors from 'utility/colors';

import { useSelector, useDispatch } from 'redux/store';
import { dataQualityAsync } from 'redux/reducers/dataQualitySlice';
import { STATUS_TYPE } from 'utility/constants/general';

const OrderDataAnalysisCard = () => {
  const dispatch = useDispatch();
  const {
    ordersWithCorrectCV,
    avgDeliveryTime,
    TOTAL_SHOPIFY_ORDERS,
    TOTAL_DATA_QUALITY_FACEBOOK,
    status
  } = useSelector((state) => state.dataQuality);
  useEffect(() => {
    if (status === STATUS_TYPE.IDLE) dispatch(dataQualityAsync());
  }, [status]);
  return (
    <ComponentWrapper>
      <div className="flex flex-row flex-wrap lg:flex-nowrap gap-[40px] justify-evenly">
        <QualityCombined />
        <div className="flex-grow">
          <LineChart height={140} color={colors.lineGraphStart} />
        </div>
        <div className="flex flex-row gap-[20px]">
          <Stats value={TOTAL_SHOPIFY_ORDERS} message="Shopify Orders" />
          <Stats value={ordersWithCorrectCV} message="Orders with correct CV" />
          <Stats value={TOTAL_DATA_QUALITY_FACEBOOK} message="Received by FB" />
          <Stats value={avgDeliveryTime} message="AVG. Delivery Time" />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default OrderDataAnalysisCard;
