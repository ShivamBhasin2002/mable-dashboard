import { useState, useEffect, useRef } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import ComponentWrapper from './ComponentWrapper';
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

import { createGradient } from 'utility/dashboard';

import { useSelector } from 'redux/store';

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
            { stop: 0.2, color: 'transparent' },
            { stop: 1, color: 'rgba(84,183,219,0.6)' }
          ]),
          borderColor: '#54B7DB',
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
                  borderColor: 'rgba(127, 140, 160, 0.2)',
                  borderWidth: 3
                }
              },
              x: {
                grid: {
                  display: false,
                  borderColor: 'rgba(127, 140, 160, 0.2)',
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
