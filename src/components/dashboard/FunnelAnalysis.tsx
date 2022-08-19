import { useRef, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';

import ComponentWrapper from '../elements/ComponentWrapper';

import { createGradient } from 'utility/functions';
import { useSelector } from 'redux/store';
import colors from 'utility/colors';

const FunnelAnalysis = () => {
  const { total_events } = useSelector((state) => state.dashboard);
  const chart = useRef<any>(null); //eslint-disable-line
  const [chartData, setChartData] = useState<any>({ datasets: [] }); //eslint-disable-line

  useEffect(() => {
    if (chart.current) {
      const chartData = {
        labels: Object.keys(total_events),
        datasets: [
          {
            label: 'Events',
            data: Object.values(total_events),
            backgroundColor: createGradient(chart.current.ctx, chart.current.chartArea, [
              { stop: 0, color: colors.dark },
              { stop: 1, color: colors.primary }
            ]),
            datalabels: {
              color: colors.light,
              fontSize: 13,
              anchor: 'end',
              align: 'top',
              offset: 2,
              formatter(value: number) {
                if (value >= 1000) return `${value / 1000}k`;
                else return value;
              }
            }
          }
        ]
      };
      setChartData(chartData);
    }
  }, []);
  return (
    <ComponentWrapper width={600} title="Funnel Analysis">
      <Bar
        ref={chart}
        data={chartData}
        width={520}
        options={{
          layout: {
            padding: {
              top: 10
            }
          },
          elements: {
            bar: {
              borderRadius: 10
            }
          },
          scales: {
            y: {
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
