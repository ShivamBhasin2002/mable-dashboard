import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

import { useSelector } from 'redux/store';

import colors from 'utility/colors';
import fonts from 'utility/fonts';

interface BarChartProps {
  width?: number;
  height?: number;
}

const AttributionEventBarChart: FC<BarChartProps> = ({ width, height }) => {
  const { byDate } = useSelector((state) => state.dataPerEvent);
  const barOptions = {
      responsive: true,
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
            borderColor: `${colors.lines}20`,
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
            borderColor: `${colors.lines}20`,
            borderWidth: 3
          }
        }
      }
    },
    barData = {
      labels: byDate.map((data) => data.date),
      datasets: [
        {
          label: 'Attribution Parameters',
          data: byDate.map((data) => data.attribution_params_quality),
          backgroundColor: colors.purple,
          datalabels: {
            display: false
          }
        },
        {
          label: 'Event Parameters',
          data: byDate.map((data) => data.events_quality),
          backgroundColor: colors.lightPurple,
          datalabels: {
            display: false
          }
        }
      ]
    };
  return <Bar data={barData} width={width} height={height} options={barOptions} />;
};

export default AttributionEventBarChart;
