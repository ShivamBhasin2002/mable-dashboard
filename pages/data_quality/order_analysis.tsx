import OrderAnalysisTable from "@components/dataQuality/Cards/orderAnalysis/OrderAnalysisTable";
import { Layout } from "@components/common";
import OrderDataAnalysisCard from "@components/dataQuality/Cards/orderAnalysis/OrderDataAnalysisCard";

const OrderAnalysis = () => (
  <Layout>
    <div className="flex flex-col h-full gap-4">
      <OrderDataAnalysisCard />
      <OrderAnalysisTable />
    </div>
  </Layout>
);

export default OrderAnalysis;
