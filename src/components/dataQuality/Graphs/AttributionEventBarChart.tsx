import { Bar } from 'react-chartjs-2';

import { useSelector } from 'redux/store';

import colors from 'utility/colors';
import { totalAttributions } from 'utility/constants/numbers';
import fonts from 'utility/fonts';
import { AttributionEventBarChartProps } from 'utility/typeDefinitions/componentPropTypes';

const AttributionEventBarChart = ({ width, height }: AttributionEventBarChartProps) => {
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
        suggestedMax: totalAttributions,
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
          },
          autoSkip: true,
          maxTicksLimit: 10,
          maxRotation: 0
        },
        grid: {
          display: false,
          borderColor: `${colors.lines}20`,
          borderWidth: 3
        }
      }
    }
  };
  const barData = {
    labels: byDate.map((data) => data.date),
    datasets: [
      {
        label: 'Attribution Parameters',
        data: byDate.map((data) => data.attributionParamsQuality),
        backgroundColor: colors.purple,
        datalabels: {
          display: false
        }
      },
      {
        label: 'Event Parameters',
        data: byDate.map((data) => data.eventsQuality),
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
