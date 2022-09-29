import { useRef, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import { ComponentWrapper } from 'components/common';

import { useSelector, useDispatch } from 'redux/store';
import { eventsDataAsync } from 'redux/reducers/eventsDataSlice';

import { createGradient, getEventDisplayName, numberFormatter } from 'utility/functions';
import colors from 'utility/colors';
import fonts from 'utility/fonts';
import { STATUS_TYPE } from 'utility/constants/general';

const EventsDataBarChart = () => {
  const dispatch = useDispatch();
  const { total_events, status } = useSelector((state) => state.eventsData);
  const chart = useRef<any>(null); //eslint-disable-line
  const [chartData, setChartData] = useState<any>({ datasets: [] }); //eslint-disable-line
  useEffect(() => {
    if (status === STATUS_TYPE.IDLE) dispatch(eventsDataAsync());
  }, [status]);
  useEffect(() => {
    if (chart.current) {
      const chartData = {
        labels: Object.keys(total_events).map((event) => getEventDisplayName(event)),
        datasets: [
          {
            label: 'Events',
            data: Object.values(total_events),
            backgroundColor: createGradient(chart.current.ctx, chart.current.chartArea, [
              { stop: 0, color: colors.dark },
              { stop: 1, color: colors.primary }
            ]),
            datalabels: {
              font: { family: fonts.text },
              color: colors.light,
              fontSize: 13,
              anchor: 'end',
              align: 'top',
              offset: 2,
              formatter: numberFormatter
            }
          }
        ]
      };
      setChartData(chartData);
    }
  }, [status]);
  return (
    <ComponentWrapper width={600} title="Funnel Analysis" className="flex flex-col justify-between">
      <Bar
        className="flex-grow-0"
        ref={chart}
        data={chartData}
        width={520}
        options={{
          layout: {
            padding: {
              top: 20
            }
          },
          elements: {
            bar: {
              borderRadius: 10
            }
          },
          scales: {
            y: {
              suggestedMin: 0,
              min: 0,
              beginAtZero: true,
              display: false,
              grid: {
                display: false
              }
            },
            x: {
              grid: {
                display: false
              },
              ticks: {
                color: colors.light
              }
            }
          }
        }}
      />
    </ComponentWrapper>
  );
};

export default EventsDataBarChart;