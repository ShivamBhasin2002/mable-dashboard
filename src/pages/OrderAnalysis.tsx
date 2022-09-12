import { ComponentWrapper } from 'components/elements/common';
import { LineChart, QualityCombined } from 'components/elements/quality';
import { Stats } from 'components/orderAnalysis';

import { useSelector } from 'redux/store';
import StatusSelectorMenu from 'components/orderAnalysis/StatusSelecterMenu';

const OrderAnalysis = () => {
  const { shopifyOrders, ordersWithCorrectCV, recievedByFB, avgDelieveryTime } = useSelector(
    (state) => state.dataQuality
  );
  return (
    <div className="flex flex-col mt-[40px] gap-[40px]">
      <ComponentWrapper>
        <div className="flex flex-row flex-wrap gap-[40px] justify-evenly">
          <QualityCombined />
          <LineChart width={520} height={140} />
          <div className="flex flex-row gap-[20px]">
            <Stats value={shopifyOrders} message="Shopify Orders" />
            <Stats value={ordersWithCorrectCV} message="Orders with correct CV" />
            <Stats value={recievedByFB} message="Received by FB" />
            <Stats value={avgDelieveryTime} message="AVG. Delivery Time" />
          </div>
        </div>
      </ComponentWrapper>
      <ComponentWrapper className="text-light">
        <StatusSelectorMenu />
      </ComponentWrapper>
    </div>
  );
};

export default OrderAnalysis;
