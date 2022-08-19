import { useState, useEffect, useRef } from 'react';

import { Line } from 'react-chartjs-2';
import ComponentWrapper from '../elements/ComponentWrapper';

import { useSelector } from 'redux/store';
import { createGradient } from 'utility/functions';
import colors from 'utility/colors';

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
    <ComponentWrapper title="Events Per Day" width={600} height={250}>
      <div>
        <Line
          options={{
            maintainAspectRatio: false,
            scales: {
              y: {
                beginAtZero: true,
                ticks: {
                  stepSize: 500,
                  callback(this, tickValue: string | number) {
                    if (tickValue >= 1000) return `${parseInt(`${tickValue}`) / 1000}k`;
                    return tickValue;
                  }
                },
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
