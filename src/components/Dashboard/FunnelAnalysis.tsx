import { FC, useState } from "react";
import ComponentWrapper from "./ComponentWrapper";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
);

interface FunnelAnalysisProps {
  data: {
    "Page View": number;
    "Add to Cart": number;
    "Initiate Checkout ": number;
    "Add Payment Info": number;
    Purchase: number;
  };
}

const FunnelAnalysis: FC<FunnelAnalysisProps> = ({ data }) => {
  const [chardData, setCharData] = useState({
    labels: Object.keys(data),
    datasets: [
      {
        label: "Events",
        data: Object.values(data),
        backgroundColor: "#4fb7dd",
      },
    ],
  });
  return (
    <ComponentWrapper width={600} title="Funnel Analysis">
      <Bar
        data={chardData}
        height={410}
        width={520}
        style={{
          backgroundColor: "transparent",
          border: "none",
        }}
      />
    </ComponentWrapper>
  );
};

export default FunnelAnalysis;
