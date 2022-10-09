import OrderAnalysisTable from 'components/dataQuality/Cards/orderAnalysis/OrderAnalysisTable';
import OrderDataAnalysisCard from 'components/dataQuality/Cards/orderAnalysis/OrderDataAnalysisCard';

const OrderAnalysis = () => {
  return (
    <div className="flex flex-col mt-[40px] gap-[40px]">
      <OrderDataAnalysisCard />
      <OrderAnalysisTable />
    </div>
  );
};

export default OrderAnalysis;
