import { FC } from 'react';
import Icon from 'utility/icons';
import ComponentWrapper from '../ComponentWrapper';

interface OrderAnalysisProps {
  data: {
    shopifyOrders: string;
    purchaseEventsInFB: string;
    avgDeliveryTime: string;
  };
}

const OrderAnalysis: FC<OrderAnalysisProps> = ({ data }) => {
  return (
    <ComponentWrapper
      title="Order Analysis"
      width={600}
      nextComponent={
        <span className="text-[14px] font-text text-secondary flex gap-2 items-center">
          View Full Report
          <span className="text-secondary text-[15px]">
            <Icon icon="next" />
          </span>
        </span>
      }
    >
      <div className="flex flex-row justify-center">
        <div className="border-r-2 border-lines/[0.15] w-[179px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {data.shopifyOrders}
          </div>
          <div className="text-primary text-center text-[14px]">Shopify Orders</div>
        </div>
        <div className="border-r-2 border-lines/[0.15] w-[179px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {data.purchaseEventsInFB}
          </div>
          <div className="text-primary text-center text-[14px]">Purchase Events in FB</div>
        </div>
        <div className="w-[179px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {data.avgDeliveryTime}
          </div>
          <div className="text-primary text-center text-[14px]">Avg Delivery Time</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default OrderAnalysis;
