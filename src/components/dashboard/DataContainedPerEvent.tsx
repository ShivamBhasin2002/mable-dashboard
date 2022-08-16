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

import colors from 'utility/colors';

export const DataContainerPerEventDoughnutChart = () => {
  const data = useSelector((state) => state.dashboard.dataContaindedPerEventDoughnutChart);
  const doughnutData = {
      labels: ['Backend', 'Frontend', 'Mobile Engine', 'Unavailable'],
      datasets: [
        {
          data: [data.backend, data.frontend, data.mableEngine, data.unavailable],
          backgroundColor: [colors.darkBlue, colors.lightBlue, colors.light, colors.transparent],
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
          ctx.fillStyle = colors.light;
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
      {[
        { color: 'bg-darkBlue', name: 'Backend', value: data.backend },
        { color: 'bg-lightBlue', name: 'Frontend', value: data.frontend },
        { color: 'bg-light', name: 'Mable Engine', value: data.mableEngine },
        { border: 'border-light border-[2px]', name: 'Unavailable', value: data.unavailable }
      ].map((stats, i) => (
        <div
          className="flex flex-row gap-[10px] items-center"
          key={`statsOfDataContainedPerEvent${i}`}
        >
          <span className={`${stats.color} ${stats.border} w-[11px] h-[11px] rounded-full`} />
          <span className="text-primary text-sm">{stats.name}</span>
          <span className="text-light ml-auto font-bold">{stats.value}%</span>
        </div>
      ))}
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
    },
    barData = {
      labels: dataContainedPerEventBarChart.map((data) => data._id),
      datasets: [
        {
          label: 'Attribute Parameters',
          data: dataContainedPerEventBarChart.map((data) => data.attribute_quality),
          backgroundColor: colors.purple,
          datalabels: {
            display: false
          }
        },
        {
          label: 'Event Parameters',
          data: dataContainedPerEventBarChart.map((data) => data.event_quality),
          backgroundColor: colors.lightPurple,
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
            <div className="p-[20px] w-[165px] h-[105px] flex flex-col items-center justify-evenly bg-gradient-to-r to-bgContainerFrom from-bgContainerTo rounded-[16px] shadow-2xl">
              <div className="flex flex-row gap-[5px] items-baseline">
                <span className="bg-purple w-[11px] h-[11px] rounded-full" />
                <div className=" text-[30px] leading-[34px] font-text text-center text-light">
                  {attribution}
                </div>
                <span className="text-[14px] text-light/[.41]">/ {totatlAttribution}</span>
              </div>
              <div className="text-primary text-center text-[13px] whitespace-nowrap">
                Attribution Parameters
              </div>
            </div>
            <div className="p-[20px] w-[165px] h-[105px] flex flex-col items-center justify-evenly bg-gradient-to-r to-bgContainerFrom from-bgContainerTo rounded-[16px] shadow-2xl">
              <div className="flex flex-row gap-[5px] items-baseline">
                <span className="bg-lightPurple w-[11px] h-[11px] rounded-full" />
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
