import { FC, useState, useEffect } from "react";
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
  const [currentData, setCurrentData] = useState(data[0]);
  const [charData, setCharData] = useState({
    labels: currentData.data.map((item) => item.date),
    datasets: [
      {
        label: "Events",
        backgroundColor: "rgba(84, 183, 219, 0.1)",
        borderColor: "#54B7DB",
        borderWidth: 1,
        lineTension: 0.4,
        fill:true,
        data: currentData.data.map((item) => item.value),
      },
    ],
  });
  useEffect(() => {
    setCharData({
      labels: currentData.data.map((item) => item.date),
      datasets: [
        {
          label: "Events",
          backgroundColor: "rgba(84, 183, 219, 0.1)",
          borderColor: "#54B7DB",
          borderWidth: 1,
          lineTension: 0.4,
          fill:true,
          data: currentData.data.map((item) => item.value),
        },
      ],
    });
  }, [currentData]);
  return (
    <ComponentWrapper title="Events Per Day" width={600} height={250}>
      <div>
        <Line
          options={{ maintainAspectRatio: false }}
          data={charData}
          height={250}
        />
      </div>
    </ComponentWrapper>
  );
};

export default EventsPerDay;
