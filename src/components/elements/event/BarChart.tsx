import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement
} from 'chart.js';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ArcElement);

import { useSelector } from 'redux/store';

import colors from 'utility/colors';

const BarChart = () => {
  const { dataContainedPerEventBarChart } = useSelector((state) => state.dashboard);
  const barOptions = {
      maintainAspectRatio: false,
      barPercentage: 0.7,
      elements: {
        bar: {
          borderRadius: 5
        }
      },
      scales: {
        y: {
          grid: {
            display: false,
            borderColor: colors.lines,
            borderWidth: 3
          }
        },
        x: {
          grid: {
            display: false,
            borderColor: colors.lines,
            borderWidth: 3
          }
        }
      }
    },
    barData = {
      labels: dataContainedPerEventBarChart.map((data) => data._id),
      datasets: [
        {
          label: 'Attribute Parameters',
          data: dataContainedPerEventBarChart.map((data) => data.attribute_quality),
          backgroundColor: colors.purple,
          datalabels: {
            display: false
          }
        },
        {
          label: 'Event Parameters',
          data: dataContainedPerEventBarChart.map((data) => data.event_quality),
          backgroundColor: colors.lightPurple,
          datalabels: {
            display: false
          }
        }
      ]
    };
  return <Bar data={barData} width={450} height={80} options={barOptions} />;
};

export default BarChart;
