import { useState, useEffect, useRef } from 'react';

import { ComponentWrapper } from 'components/elements/common';
import { Line } from 'react-chartjs-2';

import { createGradient } from 'utility/functions';
import colors from 'utility/colors';
import fonts from 'utility/fonts';

import { useSelector, useDispatch } from 'redux/store';
import { eventsDataAsync, setEventSelected } from 'redux/reducers/eventsDataSlice';
import { eventSelectedType, STATUS_TYPE } from 'utility/constants/general';
import { SelectorMenu } from 'components/elements/event';

const EventsPerDay = () => {
  const dispatch = useDispatch();
  const { byDate, status, eventSelected } = useSelector((state) => state.eventsData);
  const chart = useRef<any>(null); // eslint-disable-line
  const [charData, setCharData] = useState<any>({ datasets: [] }); // eslint-disable-line
  useEffect(() => {
    setCharData({
      labels: byDate.map((item) => item.date),
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
          data: byDate.map(
            (item) =>
              item.purchases ??
              0 + item.page_view ??
              0 + item.intitate_checkout ??
              0 + item.add_to_cart ??
              0 + item.add_payment_info ??
              0
          ),
          datalabels: {
            display: false
          }
        }
      ]
    });
  }, [status]);
  useEffect(() => {
    if (status === STATUS_TYPE.IDLE) dispatch(eventsDataAsync());
  }, [status]);
  return (
    <ComponentWrapper
      title="Events Per Day"
      width={600}
      nextComponent={
        <SelectorMenu
          active={eventSelected}
          onChange={(item: eventSelectedType) => dispatch(setEventSelected(item))}
        />
      }
    >
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
          plugins={[
            {
              id: 'lines',
              afterDraw(chart) {
                if (chart.tooltip?.getActiveElements().length) {
                  const x = chart.tooltip.getActiveElements()[0].element.x;
                  const y = chart.tooltip.getActiveElements()[0].element.y;
                  const yAxis = chart.scales.y;
                  const ctx = chart.ctx;
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
          height={216}
          ref={chart}
        />
      </div>
    </ComponentWrapper>
  );
};

export default EventsPerDay;