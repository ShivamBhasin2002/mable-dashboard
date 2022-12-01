import { Bar } from 'react-chartjs-2';
import { Tooltip } from 'chart.js';
import { useSelector } from 'redux/store';

import colors from 'utility/colors';
import { totalAttributions } from 'utility/constants/numbers';
import fonts from 'utility/fonts';
import { AttributionEventBarChartProps } from 'utility/typeDefinitions/componentPropTypes';

declare module 'chart.js' {
  // Extend tooltip positioner map
  interface TooltipPositionerMap {
    customPos: TooltipPositionerFunction<ChartType>;
  }
}

const AttributionEventBarChart = ({ width, height }: AttributionEventBarChartProps) => {
  const { byDate } = useSelector((state) => state.dataPerEvent);
  Tooltip.positioners.customPos = (elements, position) => {
    if (!elements.length) {
      return false;
    }
    return {
      x: position.x,
      y: position.y - 30
    };
  };

  const barData = {
    labels: byDate.map((data) => data.date),
    datasets: [
      {
        label: 'Attribution Parameters',
        data: byDate.map((data) => data.attributionParamsQuality),
        backgroundColor: colors.purple,
        hoverBackgroundColor: colors.purpleOpaque,
        borderRadius: 5,
        borderSkipped: false,
        datalabels: {
          display: false
        }
      },
      {
        label: 'Event Parameters',
        data: byDate.map((data) => data.eventsQuality),
        hoverBackgroundColor: colors.lightPurpleOpaque,
        backgroundColor: colors.lightPurple,
        borderRadius: 5,
        borderSkipped: false,
        datalabels: {
          display: false
        }
      }
    ]
  };

  return (
    <Bar
      data={barData}
      width={width}
      height={height}
      options={{
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          tooltip: {
            usePointStyle: true,
            cornerRadius: 2,
            backgroundColor: colors.background,
            bodyFont: {
              family: 'lato',
              size: 10
            },
            yAlign: 'bottom',
            position: 'average',
            callbacks: {
              title: () => '',
              label(tooltipItem) {
                return tooltipItem.formattedValue;
              },
              labelColor: (tooltipItem) => ({
                backgroundColor: `${tooltipItem.dataset.backgroundColor}`,
                borderColor: `${tooltipItem.dataset.backgroundColor}`
              }),
              labelPointStyle: () => ({ pointStyle: 'circle', rotation: 0 })
            }
          }
        },
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
              borderWidth: 2
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
              borderWidth: 2
            }
          }
        }
      }}
    />
  );
};

export default AttributionEventBarChart;
