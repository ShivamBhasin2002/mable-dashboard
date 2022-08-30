import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

import { useSelector } from 'redux/store';

import colors from 'utility/colors';
import fonts from 'utility/fonts';

interface BarChartProps {
  width?: number;
  height?: number;
}

const BarChart: FC<BarChartProps> = ({ width, height }) => {
  const { dataContainedPerEventBarChart } = useSelector((state) => state.dataPerEvent);
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
          },
          ticks: {
            stepSize: 4,
            font: {
              family: fonts.text
            }
          }
        },
        x: {
          ticks: {
            font: {
              family: fonts.text
            }
          },
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
          label: 'Attribution Parameters',
          data: dataContainedPerEventBarChart.map((data) => data.attribution_quality),
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
  return <Bar data={barData} width={width} height={height} options={barOptions} />;
};

export default BarChart;
