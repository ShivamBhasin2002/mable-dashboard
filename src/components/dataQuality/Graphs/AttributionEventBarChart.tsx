import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { BubbleDataPoint, Chart, Tooltip, ChartTypeRegistry, ScatterDataPoint } from 'chart.js';
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
  const [barBagColor, setBarBagColor] = useState(colors.purple);
  const [barSmBagColor, setBarSmBagColor] = useState(colors.lightPurple);

  const onHover = (color: string) => {
    setBarBagColor(colors.purpleOpaque);
    setBarSmBagColor(colors.lightPurpleOpaque);

    return color;
  };

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

  const barPlugins = [
    {
      id: 'bar',
      afterEvent(
        chart: Chart<
          keyof ChartTypeRegistry,
          (number | ScatterDataPoint | BubbleDataPoint)[],
          unknown
        >,
        args: {
          event: {
            type:
              | 'resize'
              | 'click'
              | 'contextmenu'
              | 'dblclick'
              | 'keydown'
              | 'keypress'
              | 'keyup'
              | 'mousedown'
              | 'mouseenter'
              | 'mousemove'
              | 'mouseout'
              | 'mouseup';
          };
        }
      ) {
        // const event = args.event;
        if (args.event.type === 'mouseout') {
          setBarBagColor(colors.purple);
          setBarSmBagColor(colors.lightPurple);
        }
      }
    }
  ];

  const barData = {
    labels: byDate.map((data) => data.date),
    datasets: [
      {
        label: 'Attribution Parameters',
        data: byDate.map((data) => data.attributionParamsQuality),
        backgroundColor: barBagColor,
        borderRadius: 5,
        borderSkipped: false,
        datalabels: {
          display: false
        }
      },
      {
        label: 'Event Parameters',
        data: byDate.map((data) => data.eventsQuality),
        backgroundColor: barSmBagColor,
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
      plugins={barPlugins}
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
