import { useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  BubbleDataPoint,
  Chart,
  Tooltip,
  ChartTypeRegistry,
  ScatterDataPoint,
  TooltipPositionerFunction,
  ChartType
} from 'chart.js';
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
  Tooltip.positioners.customPos = function (elements, position) {
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
    },
    {
      id: 'lines',
      afterDraw(
        chart: Chart<
          keyof ChartTypeRegistry,
          (number | ScatterDataPoint | BubbleDataPoint)[],
          unknown
        >
      ) {
        if (chart.tooltip?.getActiveElements().length) {
          const { x } = chart.tooltip.getActiveElements()[0].element;
          const { y } = chart.tooltip.getActiveElements()[0].element;
          const yAxis = chart.scales.y;
          const { ctx } = chart;
          ctx.save();
          ctx.beginPath();
          ctx.setLineDash([10, 15]);
          ctx.moveTo(x, y);
          ctx.lineTo(x, yAxis.top);
          ctx.lineWidth = 2;
          ctx.strokeStyle = `${colors.lines}40`;
          ctx.stroke();
          ctx.restore();
        }
      }
    }
  ];

  const barOptions: any = {
    responsive: true,
    maintainAspectRatio: false,
    barPercentage: 0.7,
    plugins: {
      tooltip: {
        yAlign: 'bottom',
        position: 'customPos'
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
  };
  const barData = {
    labels: byDate.map((data) => data.date),
    datasets: [
      {
        label: 'Attribution Parameters',
        data: byDate.map((data) => data.attributionParamsQuality),
        backgroundColor: barBagColor,
        hoverBackgroundColor: () => onHover(colors.purple),
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
        hoverBackgroundColor: () => onHover(colors.lightPurple),
        borderRadius: 5,
        borderSkipped: false,
        datalabels: {
          display: false
        }
      }
    ]
  };

  return (
    <Bar data={barData} width={width} height={height} plugins={barPlugins} options={barOptions} />
  );
};

export default AttributionEventBarChart;
