import { useRef, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import { ComponentWrapper } from 'components/common';

import { useSelector, useDispatch } from 'redux/store';
import { eventsDataAsync } from 'redux/reducers/dataQuality/eventsDataSlice';

import { numberReducer } from 'utility/functions/formattingFunctions';
import { getEventDisplayName } from 'utility/functions/mappingFunctions';
import { createGradient } from 'utility/functions/colorSelector';
import colors from 'utility/colors';
import fonts from 'utility/fonts';
import { STATUS_TYPE } from 'utility/constants/enums';
import { useWindowSize } from 'utility/customHooks';

const EventsDataBarChart = () => {
  const dispatch = useDispatch();
  const { total_events, status } = useSelector((state) => state.eventsData);
  const refresh = useSelector((state) => state.dates.refresh);
  const chart = useRef<any>(null); //eslint-disable-line
  const [chartData, setChartData] = useState<any>({ datasets: [] }); //eslint-disable-line
  const { width: screenWidth } = useWindowSize();
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(eventsDataAsync());
  }, [refresh]);
  useEffect(() => {
    if (chart.current) {
      const chartData = {
        labels: Object.keys(total_events).map((event) =>
          (screenWidth ?? 0) >= 1280 && (screenWidth ?? 0) <= 1440
            ? getEventDisplayName(event)?.split(' ')
            : getEventDisplayName(event)
        ),
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
              formatter: numberReducer
            }
          }
        ]
      };
      setChartData(chartData);
    }
  }, [refresh, total_events]);
  return (
    <ComponentWrapper title="Funnel Analysis" className="flex-grow-[0.5]" status={status}>
      <div className="h-[90%]">
        <Bar
          ref={chart}
          data={chartData}
          options={{
            maintainAspectRatio: false,
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
                suggestedMin: -100,
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
                  color: colors.light,
                  maxRotation: 0,
                  autoSkip: false
                }
              }
            }
          }}
        />
      </div>
    </ComponentWrapper>
  );
};

export default EventsDataBarChart;
