import ComponentWrapper from 'components/elements/ComponentWrapper';
import LineChart from 'components/elements/quality/LineChart';
import QualityCombined from 'components/elements/quality/QualityCombined';
import Stats from 'components/orderAnalysis/Statistics';

import { useSelector } from 'redux/store';

const OrderAnalysis = () => {
  const { shopifyOrders, ordersWithCorrectCV, recievedByFB, avgDelieveryTime } = useSelector(
    (state) => state.dashboard
  );
  return (
    <div className="flex-grow mt-[40px] gap-[40px]">
      <ComponentWrapper>
        <div className="flex flex-row flex-wrap gap-[40px] justify-evenly">
          <QualityCombined />
          <LineChart width={520} height={140} />
          <Stats value={shopifyOrders} message="Shopify Orders" />
          <Stats value={ordersWithCorrectCV} message="Orders with correct CV" />
          <Stats value={recievedByFB} message="Received by FB" />
          <Stats value={avgDelieveryTime} message="Avg. Delivery Time" />
        </div>
      </ComponentWrapper>
      <ComponentWrapper>a</ComponentWrapper>
    </div>
  );
};

export default OrderAnalysis;
