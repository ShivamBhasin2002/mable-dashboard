import { FC, useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import ComponentWrapper from "./ComponentWrapper";

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

const DataQuality: FC<DataQualityProps> = ({ data }) => {
  const [charData, setCharData] = useState({
    labels: data.plot.map((item) => item.date),
    datasets: [
      {
        label: "Data Quality",
        data: data.plot.map((item) => item.value),
        backgroundColor: "rgb(84, 183, 219, 0.2)",
        borderColor: "rgb(84, 183, 219)",
        borderWidth: 2,
        lineTension: 0.5,
        fill: true,
      },
    ],
  });
  return (
    <ComponentWrapper height={400} width={920} title="Data Quality">
      <div className="flex flex-row justify-between">
        <div className="flex flex-col gap-4 w-[225px]">
          <span className="flex flex-row gap-4 items-center text-primary">
            <span className="w-[84px] h-[84px]">
              <CircularProgressbar
                value={data.overAllQuality.stats}
                text={`${data.overAllQuality.stats}%`}
                styles={buildStyles({
                  textColor: "#ffffff",
                  textSize: "30px",
                  pathColor:
                    data.overAllQuality.stats <= 90 ? "#D99A43" : "#0DCE1C",
                })}
                counterClockwise
              />
            </span>
            <span className="flex flex-col">
              <span className="text-[16px] font-text text-light">
                Quality Combine
              </span>
              <span className="text-[28px] font-heading font-bold text-primary h-[34px]">
                {data.overAllQuality.message}
              </span>
            </span>
          </span>
          <hr className="h-[2px] border-none w-[225px] bg-[#7F8C9F]/20" />
          <span className="flex flex-row gap-4 items-center justify-evenly text-primary">
            <span className="w-[53px] h-[53px]">
              <CircularProgressbar
                value={data.frontendTracking.stats}
                text={`${data.frontendTracking.stats}%`}
                styles={buildStyles({
                  textColor: "#ffffff",
                  textSize: "30px",
                  pathColor:
                    data.frontendTracking.stats <= 90 ? "#D99A43" : "#0DCE1C",
                })}
                counterClockwise
              />
            </span>
            <span className="flex flex-col">
              <span className="text-[14px] font-text text-light">
                Frontend Tracking
              </span>
              <span className="text-[18px] font-heading font-bold text-primary h-[34px]">
                {data.frontendTracking.message}
              </span>
            </span>
          </span>
          <span className="flex flex-row gap-4 items-center justify-evenly text-primary">
            <span className="w-[53px] h-[53px]">
              <CircularProgressbar
                value={data.backendTracking.stats}
                text={`${data.backendTracking.stats}%`}
                styles={buildStyles({
                  textColor: "#ffffff",
                  textSize: "30px",
                  pathColor:
                    data.backendTracking.stats <= 90 ? "#D99A43" : "#0DCE1C",
                })}
                counterClockwise
              />
            </span>
            <span className="flex flex-col">
              <span className="text-[14px] font-text text-light">
                Backend Tracking
              </span>
              <span className="text-[18px] font-heading font-bold text-primary h-[34px]">
                {data.backendTracking.message}
              </span>
            </span>
          </span>
        </div>
        <div>
          <Line
            options={{
              maintainAspectRatio: false,
              scales: {
                LinearScale: {
                  grid: {
                    display: false,
                  },
                },
              },
            }}
            data={charData}
            width={560}
            height={250}
          />
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataQuality;
