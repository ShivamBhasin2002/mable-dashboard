import { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { createGradient } from 'utility/functions';
import { useSelector } from 'redux/store';
import colors from 'utility/colors';
import fonts from 'utility/fonts';

const LineChart = ({
  width,
  height,
  color = colors.dataQualityChartArea
}: {
  width?: number;
  height?: number;
  color?: string;
}) => {
  const { dataQualityGrouped } = useSelector((state) => state.dataQuality);
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
              { color: colors.transparent, stop: 0.1 },
              { color: color, stop: 1 }
            ]),
            borderColor: colors.success,
            borderWidth: 3,
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
              position: 'right',
              beginAtZero: true,
              ticks: {
                font: { family: fonts.text },
                stepSize: 25,
                callback(this, tickValue) {
                  return `${tickValue}%`;
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
                font: { family: fonts.text }
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
        ref={chart}
        data={chartData}
        width={width || 'auto'}
        height={height || 'auto'}
      />
    </div>
  );
};

export default LineChart;
