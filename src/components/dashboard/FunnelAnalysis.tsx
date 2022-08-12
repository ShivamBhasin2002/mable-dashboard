import { useRef, useState, useEffect } from 'react';
import ComponentWrapper from './ComponentWrapper';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ChartDataLabels);

import { createGradient } from 'utility/dashboard';
import { useSelector } from 'redux/store';

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
              { stop: 0, color: '#285C6F' },
              { stop: 1, color: '#4FB7DD' }
            ]),
            datalabels: {
              color: '#ffffff',
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
                color: '#ffffff'
              }
            }
          }
        }}
      />
    </ComponentWrapper>
  );
};

export default FunnelAnalysis;
