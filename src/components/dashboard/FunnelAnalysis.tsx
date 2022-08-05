import { FC, useRef, useState, useEffect } from 'react';
import ComponentWrapper from './ComponentWrapper';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  ChartArea
} from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Bar } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, ChartDataLabels);

interface FunnelAnalysisProps {
  data: {
    'Page View': number;
    'Add to Cart': number;
    'Initiate Checkout ': number;
    'Add Payment Info': number;
    Purchase: number;
  };
}

const FunnelAnalysis: FC<FunnelAnalysisProps> = ({ data }) => {
  const chart = useRef<any>(null); //eslint-disable-line
  const [chartData, setChartData] = useState<any>({ datasets: [] }); //eslint-disable-line

  useEffect(() => {
    if (chart.current) {
      const chartData = {
        labels: Object.keys(data),
        datasets: [
          {
            label: 'Events',
            data: Object.values(data),
            backgroundColor: createGradient(chart.current.ctx, chart.current.chartArea),
            datalabels: {
              color: '#ffffff',
              fontSize: 13,
              anchor: 'end',
              align: 'top',
              offset: 2,
              formatter(value: number) {
                return `${value / 1000}k`;
              }
            }
          }
        ]
      };
      setChartData(chartData);
    }
  }, [chart, data]);

  const options = {
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
  };

  function createGradient(ctx: CanvasRenderingContext2D, area: ChartArea) {
    const colorStart = '#285C6F';
    const colorEnd = '#4FB7DD';
    const gradient = ctx.createLinearGradient(0, area.bottom, 0, area.top);
    gradient.addColorStop(0, colorStart);
    gradient.addColorStop(1, colorEnd);
    return gradient;
  }

  return (
    <ComponentWrapper width={600} title="Funnel Analysis">
      <Bar ref={chart} data={chartData} width={520} options={options} />
    </ComponentWrapper>
  );
};

export default FunnelAnalysis;
