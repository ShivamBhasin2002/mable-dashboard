import OrderAnalysisTable from 'components/dataQuality/Cards/orderAnalysis/OrderAnalysisTable';
import OrderDataAnalysisCard from 'components/dataQuality/Cards/orderAnalysis/OrderDataAnalysisCard';

const OrderAnalysis = () => (
  <div className="flex flex-col h-full gap-2 w-full">
    <OrderDataAnalysisCard />
    <OrderAnalysisTable />
  </div>
);

export default OrderAnalysis;
