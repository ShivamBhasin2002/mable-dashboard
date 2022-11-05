import { useRef, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';

import { createGradient } from 'utility/functions/colorSelector';
import { useSelector } from 'redux/store';
import colors from 'utility/colors';
import fonts from 'utility/fonts';
import { BubbleDataPoint, Chart, ChartTypeRegistry, ScatterDataPoint } from 'chart.js';

const DataQualityLineChart = ({ color = colors.dataQualityChartArea }: { color?: string }) => {
  const { DATA_QUALITY_BY_DATE } = useSelector((state) => state.dataQuality);
  const chart = useRef<any>(null); // eslint-disable-line
  const [chartData, setChartData] = useState<any>({ datasets: [] }); // eslint-disable-line
  useEffect(() => {
    if (chart.current) {
      const chartDataToBeSet = {
        labels: DATA_QUALITY_BY_DATE.map((data) => data.date),
        datasets: [
          {
            label: 'Data Quality',
            data: DATA_QUALITY_BY_DATE.map((data) => data.data_quality * 100),
            backgroundColor: createGradient(chart.current.ctx, chart.current.chartArea, [
              { color: colors.transparent, stop: 0.1 },
              { color, stop: 1 }
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
      setChartData(chartDataToBeSet);
    }
  }, [DATA_QUALITY_BY_DATE]);
  return (
    <Line
      options={{
        layout: {
          padding: {
            right: -3,
            bottom: -3
          }
        },
        hover: {
          intersect: false,
          mode: 'index'
        },
        maintainAspectRatio: false,
        responsive: true,
        elements: {
          point: {
            radius: 0
          }
        },
        scales: {
          y: {
            position: 'right',
            suggestedMax: 100,
            suggestedMin: 0,
            beginAtZero: true,
            ticks: {
              font: { family: fonts.text, weight: 'bold' },
              stepSize: 25,
              autoSkip: true,
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
              font: { family: fonts.text, weight: 'bold' },
              autoSkip: true,
              maxTicksLimit: 10,
              maxRotation: 0
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
          afterDraw(
            chart: Chart<
              keyof ChartTypeRegistry,
              (number | ScatterDataPoint | BubbleDataPoint)[],
              unknown
            >
          ) {
            if (chart.tooltip?.getActiveElements().length) {
              const { x } = chart.tooltip.getActiveElements()[0].element;
              const { y } = chart.tooltip.getActiveElements()[0].element;
              const yAxis = chart.scales.y;
              const { ctx } = chart;
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
    />
  );
};

export default DataQualityLineChart;
