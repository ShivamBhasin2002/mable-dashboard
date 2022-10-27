import OrderAnalysisTable from 'components/dataQuality/Cards/orderAnalysis/OrderAnalysisTable';
import OrderDataAnalysisCard from 'components/dataQuality/Cards/orderAnalysis/OrderDataAnalysisCard';

const OrderAnalysis = () => {
  return (
    <div className="flex flex-col  gap-4">
      <OrderDataAnalysisCard />
      <OrderAnalysisTable />
    </div>
  );
};

export default OrderAnalysis;
