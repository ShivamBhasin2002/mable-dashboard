import { ComponentWrapper } from 'components/common';
import StatusSelectorMenu from 'components/dataQuality/General/StatusSelecterMenu';
import OrderAnalysisTable from 'components/dataQuality/Cards/orderAnalysis/OrderAnalysisTable';
import OrderDataAnalysisCard from 'components/dataQuality/Cards/orderAnalysis/OrderDataAnalysisCard';

const OrderAnalysis = () => {
  return (
    <div className="flex flex-col mt-[40px] gap-[40px]">
      <OrderDataAnalysisCard />
      <ComponentWrapper className="text-light flex-grow-0">
        <StatusSelectorMenu />
        <OrderAnalysisTable />
      </ComponentWrapper>
    </div>
  );
};

export default OrderAnalysis;
