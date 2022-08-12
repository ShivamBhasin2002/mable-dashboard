import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  ArcElement
} from 'chart.js';
import { Bar, Doughnut } from 'react-chartjs-2';
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ArcElement);

import ComponentWrapper from 'components/dashboard/ComponentWrapper';

import { useSelector } from 'redux/store';

export const DataContainerPerEventDoughnutChart = () => {
  const data = useSelector((state) => state.dashboard.dataContaindedPerEventDoughnutChart);
  const doughnutData = {
      labels: ['Backend', 'Frontend', 'Mobile Engine', 'Unavailable'],
      datasets: [
        {
          data: [data.backend, data.frontend, data.mableEngine, data.unavailable],
          backgroundColor: [
            'rgba(26, 72, 148, 1)',
            'rgba(32, 185, 173, 1)',
            'rgba(222, 218, 218, 1)',
            'rgba(0, 0, 0, 0)'
          ],
          datalabels: {
            display: false
          }
        }
      ]
    },
    doughnutOptions = {
      maintainAspectRatio: false,
      elements: {
        arc: {
          borderWidth: 1,
          borderColor: 'white'
        }
      },
      cutout: 60,
      rotation: 86 * Math.PI,
      circumference: 57 * Math.PI
    },
    doughnutPlugins = [
      {
        id: 'doughnut',
        // eslint-disable-next-line
        beforeDraw(chart: any) {
          const width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
          ctx.restore();
          ctx.font = '25px sans-serif';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = '#fff';
          const text = `${data.backend + data.frontend + data.mableEngine}%`,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2 + 15;
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
    ];
  return (
    <Doughnut
      id="doughnut"
      width={160}
      data={doughnutData}
      plugins={doughnutPlugins}
      options={doughnutOptions}
    />
  );
};

export const DataContainedPerEventSeperateParameters = () => {
  const data = useSelector((state) => state.dashboard.dataContaindedPerEventDoughnutChart);
  return (
    <div className="flex flex-col flex-grow text-[14px] justify-center gap-2">
      <div className="flex flex-row gap-[10px] items-center">
        <span className="bg-[#185BC6A0] w-[11px] h-[11px] rounded-full" />
        <span className="text-primary text-sm">Backend</span>
        <span className="text-light ml-auto font-bold">{data.backend}%</span>
      </div>
      <div className="flex flex-row gap-[10px] items-center">
        <span className="bg-[#1FB6AA] w-[11px] h-[11px] rounded-full" />
        <span className="text-primary text-sm">Frontend</span>
        <span className="text-light ml-auto font-bold">{data.frontend}%</span>
      </div>
      <div className="flex flex-row gap-[10px] items-center">
        <span className="bg-[#fff] w-[11px] h-[11px] rounded-full" />
        <span className="text-primary text-sm">Mable Engine</span>
        <span className="text-light ml-auto font-bold">{data.mableEngine}%</span>
      </div>
      <div className="flex flex-row gap-[10px] items-center">
        <span className="border-[#fff] border-[1px] w-[10px] h-[10px] rounded-full" />
        <span className="text-primary text-sm">Unavailable</span>
        <span className="text-light ml-auto font-bold">{data.unavailable}%</span>
      </div>
    </div>
  );
};

const DataQualityPerEventBarChart = () => {
  const { dataContainedPerEventBarChart } = useSelector((state) => state.dashboard);
  const barOptions = {
      maintainAspectRatio: false,
      barPercentage: 0.7,
      elements: {
        bar: {
          borderRadius: 5
        }
      },
      scales: {
        y: {
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
    },
    barData = {
      labels: dataContainedPerEventBarChart.map((data) => data._id),
      datasets: [
        {
          label: 'Attribute Parameters',
          data: dataContainedPerEventBarChart.map((data) => data.attribute_quality),
          backgroundColor: 'rgba(132, 18, 167, 1)',
          datalabels: {
            display: false
          }
        },
        {
          label: 'Event Parameters',
          data: dataContainedPerEventBarChart.map((data) => data.event_quality),
          backgroundColor: 'rgba(197, 120, 226, 1)',
          datalabels: {
            display: false
          }
        }
      ]
    };
  return <Bar data={barData} width={450} height={80} options={barOptions} />;
};

const DataContainerPerEvent = () => {
  const { attribution, event, totalEvent, totatlAttribution } = useSelector(
    (state) => state.dashboard
  );
  return (
    <ComponentWrapper title="Data Contained Per Event" width={560} height={335}>
      <div className="flex flex-row flex-wrap  justify-center gap-[20px]">
        <div>
          <DataQualityPerEventBarChart />
        </div>
        <div className="flex flex-col w-[350]">
          <div className="flex gap-[20px]">
            <div className="w-[170px] ">
              <DataContainerPerEventDoughnutChart />
            </div>
            <DataContainedPerEventSeperateParameters />
          </div>
          <div className="flex flex-row justify-evenly gap-[10px]">
            <div className="p-[20px] w-[165px] h-[105px] flex flex-col items-center justify-evenly bg-gradient-to-r to-bgContainer-from from-bgContainer-to rounded-[16px] shadow-2xl">
              <div className="flex flex-row gap-[5px] items-baseline">
                <span className="bg-[#8412a7] w-[11px] h-[11px] rounded-full" />
                <div className=" text-[30px] leading-[34px] font-text text-center text-light">
                  {attribution}
                </div>
                <span className="text-[14px] text-light/[.41]">/ {totatlAttribution}</span>
              </div>
              <div className="text-primary text-center text-[13px] whitespace-nowrap">
                Attribution Parameters
              </div>
            </div>
            <div className="p-[20px] w-[165px] h-[105px] flex flex-col items-center justify-evenly bg-gradient-to-r to-bgContainer-from from-bgContainer-to rounded-[16px] shadow-2xl">
              <div className="flex flex-row gap-[5px] items-baseline">
                <span className="bg-[#c578e2] w-[11px] h-[11px] rounded-full" />
                <div className=" text-[30px] leading-[34px] font-text text-center text-light">
                  {event}
                </div>
                <span className="text-[14px] text-light/[.41]">/ {totalEvent}</span>
              </div>
              <div className="text-primary text-center text-[13px] whitespace-nowrap">
                Event Parameters
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataContainerPerEvent;
