import { FC, useState, useEffect, useRef } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  ChartArea
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

interface EventsPerDayProps {
  data: {
    title: string;
    data: {
      date: string;
      value: number;
    }[];
  }[];
}

const EventsPerDay: FC<EventsPerDayProps> = ({ data }) => {
  function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
    const colorStart = "transparent";
    const colorEnd = "rgba(84, 183, 219, 0.6)";
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0.2, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
  }

  const chart = useRef<any>(null);
  const [currentData] = useState(data[0]);
  const [charData, setCharData] = useState<any>({ datasets: [] });
  useEffect(() => {
    setCharData({
      labels: currentData.data.map((item) => item.date),
      datasets: [
        {
          label: "Events",
          backgroundColor: createGradient(
            chart.current.ctx,
            chart.current.chartArea
          ),
          borderColor: "#54B7DB",
          borderWidth: 1,
          lineTension: 0.4,
          fill: true,
          data: currentData.data.map((item) => item.value),
          datalabels: {
            display: false,
          },
        },
      ],
    });
  }, [currentData]);
  return (
    <ComponentWrapper title="Events Per Day" width={600} height={250}>
      <div>
        <Line
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 500,
                  callback(this, tickValue: any, index, ticks) {
                    return `${tickValue / 1000}k`;
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
          data={charData}
          height={216}
          ref={chart}
        />
      </div>
    </ComponentWrapper>
  );
};

export default EventsPerDay;
