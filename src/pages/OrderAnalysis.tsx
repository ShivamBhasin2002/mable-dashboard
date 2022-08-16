import ComponentWrapper from 'components/ComponentWrapper';
import { LineChart, DataQualityCombined } from 'components/dashboard/DataQuality';
import Stats from 'components/orderAnalysis/statistics';

import { useSelector } from 'redux/store';

const OrderAnalysis = () => {
  const { shopifyOrders, ordersWithCorrectCV, recievedByFB, avgDelieveryTime } = useSelector(
    (state) => state.dashboard
  );
  return (
    <div className="flex-grow mt-[40px]">
      <ComponentWrapper>
        <div className="flex flex-row flex-wrap gap-[40px] justify-evenly">
          <DataQualityCombined />
          <LineChart width={520} height={140} />
          <Stats value={shopifyOrders} message="Shopify Orders" />
          <Stats value={ordersWithCorrectCV} message="Orders with correct CV" />
          <Stats value={recievedByFB} message="Received by FB" />
          <Stats value={avgDelieveryTime} message="Avg. Delivery Time" />
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default OrderAnalysis;
