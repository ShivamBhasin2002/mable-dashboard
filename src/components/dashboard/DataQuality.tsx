import { FC, useState, useEffect, useRef } from "react";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  ChartArea,
} from "chart.js";

// importing components
import ComponentWrapper from "components/dashboard/ComponentWrapper";

// importing utility functions
import { createGradient } from "utility/functions";

// Registering all the react-chartjs-2 components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

interface DataQualityProps {
  data: {
    overAllQuality: {
      stats: number;
      message: string;
    };
    frontendTracking: {
      stats: number;
      message: string;
    };
    backendTracking: {
      stats: number;
      message: string;
    };
    plot: {
      date: string;
      value: number;
    }[];
  };
}

interface LineChartProps {
  data: {
    date: string;
    value: number;
  }[];
}

const LineChart: FC<LineChartProps> = ({ data }) => {
  const chart = useRef<any>(null);
  const [charData, setCharData] = useState<any>({ datasets: [] });
  useEffect(() => {
    if (chart.current) {
      const chartData = {
        labels: data.map((item) => item.date),
        datasets: [
          {
            label: "Data Quality",
            data: data.map((item) => item.value),
            backgroundColor: createGradient(
              chart.current.ctx,
              chart.current.chartArea,
              [
                { color: "transparent", stop: 0.2 },
                { color: "rgba(13, 206, 28, 0.3)", stop: 1 },
              ]
            ),
            borderColor: "#0DCE1C",
            borderWidth: 2,
            lineTension: 0.5,
            fill: true,
            datalabels: {
              display: false,
            },
          },
        ],
      };
      setCharData(chartData);
    }
  }, []);
  return (
    <div>
      <Line
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              position: "right",
              beginAtZero: true,
              ticks: {
                stepSize: 25,
                callback(this, tickValue, index, ticks) {
                  return `${tickValue}%`;
                },
              },
              grid: {
                display: false,
                borderColor: "rgba(127, 140, 160, 0.2)",
                borderWidth: 3,
              },
            },
            x: {
              grid: {
                display: false,
                borderColor: "rgba(127, 140, 160, 0.2)",
                borderWidth: 3,
              },
            },
          },
        }}
        ref={chart}
        data={charData}
        width={560}
        height={250}
      />
    </div>
  );
};

const DataQuality: FC<DataQualityProps> = ({ data }) => {
  return (
    <ComponentWrapper height={400} width={920} title="Data Quality">
      <div className="flex flex-row justify-between ">
        <div className="flex flex-col gap-4 w-[225px] justify-evenly">
          <div className="flex flex-row gap-4 items-center text-primary">
            <CircularProgress
              value={data.overAllQuality.stats}
              color="#0DCE1C"
              size="84px"
              trackColor="#7F8C9F"
              capIsRound
              max={100}
              min={0}
            >
              <CircularProgressLabel className="font-bold text-light ">
                {data.overAllQuality.stats}%
              </CircularProgressLabel>
            </CircularProgress>
            <div className="flex flex-col">
              <span className="text-[14px] font-text text-light">
                Quality Combine
              </span>
              <span className="text-[26px] font-heading font-bold text-primary h-[34px]">
                {data.overAllQuality.message}
              </span>
            </div>
          </div>
          <div className="h-[105px] flex justify-between items-center bg-gradient-to-r to-bgContainer-from from-bgContainer-to p-2 rounded-[16px] shadow-2xl">
            <span>
              <div className=" text-[28px] leading-[34px] font-text text-center text-light">
                257
              </div>
              <div className="text-primary text-center text-[13px]">
                Received by FB
              </div>
            </span>
            <span className="w-[2px] h-[50%] bg-lines rotate-12 mx-2" />
            <span>
              <div className=" text-[28px] leading-[34px] font-text text-center text-light">
                258
              </div>
              <div className="text-primary text-center text-[13px]">
                Shopify Orders
              </div>
            </span>
          </div>
        </div>
        <LineChart data={data.plot} />
      </div>
    </ComponentWrapper>
  );
};
export default DataQuality;
