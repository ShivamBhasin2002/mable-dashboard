import { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
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
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

import { createGradient } from 'utility/functions';
import { useSelector } from 'redux/store';
import colors from 'utility/colors';

const LineChart = ({ width, height }: { width?: number; height?: number }) => {
  const { dataQualityGrouped } = useSelector((state) => state.dashboard);
  const chart = useRef<any>(null); // eslint-disable-line
  const [chartData, setChartData] = useState<any>({ datasets: [] }); // eslint-disable-line
  useEffect(() => {
    if (chart.current) {
      const chartData = {
        labels: dataQualityGrouped.map((data) => data.date),
        datasets: [
          {
            label: 'Data Quality',
            data: dataQualityGrouped.map((data) => data.DQ_COM * 100),
            backgroundColor: createGradient(chart.current.ctx, chart.current.chartArea, [
              { color: colors.transparent, stop: 0.2 },
              { color: colors.dataQualityChartArea, stop: 1 }
            ]),
            borderColor: colors.success,
            borderWidth: 2,
            lineTension: 0.5,
            fill: true,
            datalabels: {
              display: false
            }
          }
        ]
      };
      setChartData(chartData);
    }
  }, [dataQualityGrouped]);
  return (
    <div>
      <Line
        options={{
          maintainAspectRatio: false,
          scales: {
            y: {
              position: 'right',
              beginAtZero: true,
              ticks: {
                stepSize: 25,
                callback(this, tickValue) {
                  return `${tickValue}%`;
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
        ref={chart}
        data={chartData}
        width={width || 'auto'}
        height={height || 'auto'}
      />
    </div>
  );
};

export default LineChart;
