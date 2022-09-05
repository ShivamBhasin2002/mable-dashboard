import { useState, useEffect, useRef } from 'react';

import { ComponentWrapper } from 'components/elements/common';
import { Line } from 'react-chartjs-2';

import { useSelector } from 'redux/store';
import { createGradient } from 'utility/functions';
import colors from 'utility/colors';
import fonts from 'utility/fonts';

const EventsPerDay = () => {
  const { eventsPerDay } = useSelector((state) => state.dashboard);

  const chart = useRef<any>(null); // eslint-disable-line
  const [charData, setCharData] = useState<any>({ datasets: [] }); // eslint-disable-line
  useEffect(() => {
    setCharData({
      labels: eventsPerDay.map((item) => item.date),
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
          data: eventsPerDay.map((item) => item.value),
          datalabels: {
            display: false
          }
        }
      ]
    });
  }, [eventsPerDay]);
  return (
    <ComponentWrapper title="Events Per Day" width={600} height={250} className="flex-grow-0">
      <div>
        <Line
          options={{
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
                  stepSize: 500,
                  callback(this, tickValue: string | number) {
                    if (tickValue >= 1000) return `${parseInt(`${tickValue}`) / 1000}k`;
                    return tickValue;
                  }
                },
                grid: {
                  display: false,
                  borderColor: `${colors.lines}20`,
                  borderWidth: 3
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
