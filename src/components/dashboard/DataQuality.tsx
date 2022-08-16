import { useState, useEffect, useRef } from 'react';
import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
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

// Registering all the react-chartjs-2 components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler);

import ComponentWrapper from 'components/ComponentWrapper';
import { createGradient, getColor, getMessage } from 'utility/functions';
import { useSelector } from 'redux/store';

export const LineChart = ({ width, height }: { width?: number; height?: number }) => {
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
              { color: 'transparent', stop: 0.2 },
              { color: 'rgba(13, 206, 28, 0.3)', stop: 1 }
            ]),
            borderColor: '#0DCE1C',
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
                borderColor: 'rgba(127, 140, 160, 0.2)',
                borderWidth: 3
              }
            },
            x: {
              grid: {
                display: false,
                borderColor: 'rgba(127, 140, 160, 0.2)',
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

export const DataQualityCombined = () => {
  const { DQ_COM } = useSelector((state) => state.dashboard);
  return (
    <div className="flex flex-row gap-4 items-center text-primary">
      <CircularProgress
        value={DQ_COM * 100}
        color={getColor(DQ_COM)}
        size="84px"
        trackColor="#7F8C9F"
        capIsRound
        max={100}
        min={0}
      >
        <CircularProgressLabel className="font-bold text-light ">{DQ_COM}%</CircularProgressLabel>
      </CircularProgress>
      <div className="flex flex-col">
        <span className="text-[14px] font-text text-light">Quality Combine</span>
        <span className="text-[26px] font-heading font-bold text-primary h-[34px]">
          {getMessage(DQ_COM)}
        </span>
      </div>
    </div>
  );
};

const DataQuality = () => {
  const { P_MDB, P_SH } = useSelector((state) => state.dashboard);
  return (
    <ComponentWrapper height={400} width={920} title="Data Quality">
      <div className="flex flex-row justify-evenly flex-wrap">
        <div className="flex flex-col gap-4 w-[225px] justify-evenly">
          <DataQualityCombined />
          <div className="h-[105px] flex justify-between items-center bg-gradient-to-r to-bgContainer-from from-bgContainer-to p-2 rounded-[16px] shadow-2xl">
            <span>
              <div className=" text-[28px] leading-[34px] font-text text-center text-light">
                {P_SH}
              </div>
              <div className="text-primary text-center text-[13px]">Received by FB</div>
            </span>
            <span className="w-[2px] h-[50%] bg-lines rotate-12 mx-2" />
            <span>
              <div className=" text-[28px] leading-[34px] font-text text-center text-light">
                {P_MDB}
              </div>
              <div className="text-primary text-center text-[13px]">Shopify Orders</div>
            </span>
          </div>
        </div>
        <LineChart width={560} height={250} />
      </div>
    </ComponentWrapper>
  );
};
export default DataQuality;
