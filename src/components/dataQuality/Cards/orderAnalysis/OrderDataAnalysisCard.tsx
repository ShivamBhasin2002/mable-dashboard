import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';
import { DataQualityLineChart } from 'components/dataQuality/Graphs';
import { QualityCombined, Statistics } from 'components/dataQuality/General';

import colors from 'utility/colors';
import { STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { dataQualityAsync } from 'redux/reducers/dataQuality/dataQualitySlice';
import { dateTimeReducer, numberReducer } from 'utility/functions/formattingFunctions';
import { eventsAsync } from 'redux/reducers/dataQuality/eventSlice';

const OrderDataAnalysisCard = () => {
  const dispatch = useDispatch();
  const {
    TOTAL_SHOPIFY_ORDERS,
    FACEBOOK_SUCCESS_DELIVERED_ORDERS,
    status: dataQualityStatus
  } = useSelector((state) => state.dataQuality);
  const {
    avgTimeDifference,
    correctCvOrders,
    status: eventsStatus
  } = useSelector((state) => state.events);
  const refresh = useSelector((state) => state.dates.refresh);

  useEffect(() => {
    if (dataQualityStatus !== STATUS_TYPE.FETCHING) dispatch(dataQualityAsync());
    if (eventsStatus !== STATUS_TYPE.FETCHING) dispatch(eventsAsync());
  }, [refresh]);
  return (
    <ComponentWrapper
      title="Data Quality"
      status={[dataQualityStatus, eventsStatus]}
      className=" overflow-hidden"
    >
      <div className="flex flex-row gap-2 items-center">
        <QualityCombined />
        <div className="min-w-[300px] h-[100px] flex-grow-[1] ">
          <DataQualityLineChart color={colors.lineGraphStart} />
        </div>
        <div className="flex flex-row gap-[5px]">
          <Statistics value={numberReducer(TOTAL_SHOPIFY_ORDERS)} message="Shopify Orders" />
          <Statistics value={numberReducer(correctCvOrders)} message="Orders with correct CV" />
          <Statistics
            value={numberReducer(FACEBOOK_SUCCESS_DELIVERED_ORDERS)}
            message="Received by FB"
          />
          <Statistics
            value={`${dateTimeReducer(avgTimeDifference).value}${
              dateTimeReducer(avgTimeDifference).unit
            }`}
            message="AVG. Delivery Time"
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default OrderDataAnalysisCard;
