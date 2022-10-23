import { useEffect, useState } from 'react';

import { ComponentWrapper } from 'components/common';
import { DataQualityLineChart } from 'components/dataQuality/Graphs';
import { QualityCombined, Statistics } from 'components/dataQuality/General';

import colors from 'utility/colors';
import { STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { dataQualityAsync } from 'redux/reducers/dataQuality/dataQualitySlice';
import { dateTimeReducer, numberReducer } from 'utility/functions/formattingFunctions';

const OrderDataAnalysisCard = () => {
  const dispatch = useDispatch();
  const {
    ordersWithCorrectCV,
    TOTAL_SHOPIFY_ORDERS,
    TOTAL_DATA_QUALITY_FACEBOOK,
    status: dataQualityStatus
  } = useSelector((state) => state.dataQuality);
  const { avgTimeDifference, status: eventsStatus } = useSelector((state) => state.events);
  const refresh = useSelector((state) => state.dates.refresh);
  const [displayTime, setDisplayTime] = useState({ value: 0, unit: 'ms' });
  useEffect(() => {
    setDisplayTime(dateTimeReducer(avgTimeDifference));
  }, [avgTimeDifference]);
  useEffect(() => {
    if (dataQualityStatus !== STATUS_TYPE.FETCHING) dispatch(dataQualityAsync());
  }, [refresh]);
  return (
    <ComponentWrapper status={[dataQualityStatus, eventsStatus]} className="!px-[20px] md:px-[4px]">
      <div className="flex flex-row flex-wrap 2xl:flex-nowrap gap-[40px] justify-evenly">
        <QualityCombined />
        <div className="flex-grow xl:order-2 2xl:order-none">
          <DataQualityLineChart color={colors.lineGraphStart} />
        </div>
        <div className="flex flex-row gap-[20px]">
          <Statistics value={numberReducer(TOTAL_SHOPIFY_ORDERS)} message="Shopify Orders" />
          <Statistics value={numberReducer(ordersWithCorrectCV)} message="Orders with correct CV" />
          <Statistics value={numberReducer(TOTAL_DATA_QUALITY_FACEBOOK)} message="Received by FB" />
          <Statistics
            value={`${displayTime.value}${displayTime.unit}`}
            message="AVG. Delivery Time"
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default OrderDataAnalysisCard;
