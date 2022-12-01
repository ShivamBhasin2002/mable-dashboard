import { useState, useEffect, useRef } from 'react';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

import { numberReducer } from 'utility/functions/formattingFunctions';
import { getSelectedEventData } from 'utility/functions/mappingFunctions';
import { createGradient } from 'utility/functions/colorSelector';
import colors from 'utility/colors';
import fonts from 'utility/fonts';

import { useSelector } from 'redux/store';

const EventsPerDayLineChart = () => {
  const { byDate, status, eventSelected } = useSelector((state) => state.eventsData);
  const chart = useRef<any>(null); // eslint-disable-line
  const [charData, setCharData] = useState<any>({ datasets: [] }); // eslint-disable-line
  useEffect(() => {
    setCharData({
      labels: byDate.map((item) => moment(item.date).format('D. MMM')),
      datasets: [
        {
          label: 'Events',
          backgroundColor: createGradient(chart.current.ctx, chart.current.chartArea, [
            { stop: 0.2, color: colors.transparent },
            { stop: 1, color: colors.eventsPerDayLineArea }
          ]),
          borderColor: colors.eventsPerDayLineColor,
          borderWidth: 1,
          lineTension: 0.4,
          fill: true,
          data: byDate.map((item) => getSelectedEventData(item, eventSelected)),
          datalabels: {
            display: false
          }
        }
      ]
    });
  }, [status, eventSelected]);
  return (
    <Line
      options={{
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
              labelColor: () => ({
                backgroundColor: colors.eventsPerDayLineColor,
                borderColor: colors.eventsPerDayLineColor
              }),
              labelPointStyle: () => ({ pointStyle: 'circle', rotation: 0 })
            }
          }
        },
        hover: {
          intersect: false,
          mode: 'nearest'
        },
        maintainAspectRatio: false,
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          y: {
            beginAtZero: true,
            ticks: {
              font: {
                family: fonts.text
              },
              stepSize: Math.floor(
                byDate
                  .map((item) => getSelectedEventData(item, eventSelected))
                  .reduce((a, b) => Math.max(a, b), 0) / 5
              ),
              callback(this, tickValue: string | number) {
                return numberReducer(tickValue);
              }
            },
            grid: {
              display: false,
              borderColor: `${colors.lines}20`,
              borderWidth: 2
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
      }}
      plugins={[
        {
          id: 'lines',
          // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-shadow
          afterDraw: (chart: any) => {
            if (chart.tooltip?.getActiveElements().length) {
              const { x } = chart.tooltip.getActiveElements()[0].element;
              const { y } = chart.tooltip.getActiveElements()[0].element;
              const yAxis = chart.scales.y;
              const { ctx } = chart;
              ctx.save();
              ctx.beginPath();
              ctx.setLineDash([10, 15]);
              ctx.moveTo(x, y);
              ctx.lineTo(x, yAxis.bottom);
              ctx.lineWidth = 2;
              ctx.strokeStyle = `${colors.lines}40`;
              ctx.stroke();
              ctx.restore();
            }
          }
        }
      ]}
      data={charData}
      ref={chart}
    />
  );
};

export default EventsPerDayLineChart;
