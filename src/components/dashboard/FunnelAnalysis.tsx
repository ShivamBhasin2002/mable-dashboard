import { useRef, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import { ComponentWrapper } from 'components/elements/common';

import { useSelector, useDispatch } from 'redux/store';
import { funnelAnalysisAsync } from 'redux/reducers/funnelAnalysisSlice';

import { createGradient, getEventDisplayName } from 'utility/functions';
import colors from 'utility/colors';
import fonts from 'utility/fonts';

const FunnelAnalysis = () => {
  const dispatch = useDispatch();
  const { total_events, status } = useSelector((state) => state.funnelAnalysis);
  const chart = useRef<any>(null); //eslint-disable-line
  const [chartData, setChartData] = useState<any>({ datasets: [] }); //eslint-disable-line
  useEffect(() => {
    if (status === 'idle') dispatch(funnelAnalysisAsync());
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
              formatter(value: number) {
                if (value >= 1000) return `${(value / 1000).toFixed(2)}k`;
                else return value;
              }
            }
          }
        ]
      };
      setChartData(chartData);
    }
  }, [status]);
  return (
    <ComponentWrapper
      width={600}
      title="Funnel Analysis"
      className="flex flex-col justify-between flex-grow"
    >
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

export default FunnelAnalysis;
