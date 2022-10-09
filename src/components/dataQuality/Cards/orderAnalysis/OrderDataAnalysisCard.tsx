import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';
import { DataQualityLineChart } from 'components/dataQuality/Graphs';
import { QualityCombined, Statistics } from 'components/dataQuality/General';

import colors from 'utility/colors';
import { STATUS_TYPE } from 'utility/constants/general';

import { useSelector, useDispatch } from 'redux/store';
import { dataQualityAsync } from 'redux/reducers/dataQualitySlice';

const OrderDataAnalysisCard = () => {
  const dispatch = useDispatch();
  const {
    ordersWithCorrectCV,
    avgDeliveryTime,
    TOTAL_SHOPIFY_ORDERS,
    TOTAL_DATA_QUALITY_FACEBOOK,
    status
  } = useSelector((state) => state.dataQuality);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(dataQualityAsync());
  }, [refresh]);
  return (
    <ComponentWrapper status={status}>
      <div className="flex flex-row flex-wrap gap-[40px] justify-evenly">
        <QualityCombined />
        <div className="flex-grow">
          <DataQualityLineChart height={140} color={colors.lineGraphStart} />
        </div>
        <div className="flex flex-row gap-[20px]">
          <Statistics value={TOTAL_SHOPIFY_ORDERS} message="Shopify Orders" />
          <Statistics value={ordersWithCorrectCV} message="Orders with correct CV" />
          <Statistics value={TOTAL_DATA_QUALITY_FACEBOOK} message="Received by FB" />
          <Statistics value={avgDeliveryTime} message="AVG. Delivery Time" />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default OrderDataAnalysisCard;
