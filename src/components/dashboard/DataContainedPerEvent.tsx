import { FC } from 'react';
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

// importing components
import ComponentWrapper from 'components/dashboard/ComponentWrapper';

// Registering all the react-chartjs-2 components
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, ArcElement);

// eslint-disable-next-line
const DataContainerPerEvent: FC<any> = ({ data }) => {
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
    doughnutData = {
      labels: ['Backend', 'Frontend', 'Mobile Engine', 'Not Tracked'],
      datasets: [
        {
          data: [74, 21, 3, 2],
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
          const text = '97%',
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2 + 15;
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
    ];
  return (
    <ComponentWrapper title="Data Contained Per Event" width={560} height={335}>
      <div className="flex flex-row flex-wrap  justify-center gap-[20px]">
        <div>
          <Bar data={data[0].data} width={450} height={80} options={barOptions} />
        </div>
        <div className="flex flex-col w-[350] flex-auto">
          <div className="flex gap-[20px]">
            <div className="w-[170px] ">
              <Doughnut
                id="doughnut"
                width={160}
                data={doughnutData}
                plugins={doughnutPlugins}
                options={doughnutOptions}
              />
            </div>
            <div className="flex flex-col flex-grow text-[14px] justify-center gap-2">
              <div className="flex flex-row gap-[10px] items-center">
                <span className="bg-[#185BC6A0] w-[11px] h-[11px] rounded-full"></span>
                <span className="text-primary text-sm">Backend</span>
                <span className="text-light ml-auto font-bold">74%</span>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <span className="bg-[#1FB6AA] w-[11px] h-[11px] rounded-full"></span>
                <span className="text-primary text-sm">Backend</span>
                <span className="text-light ml-auto font-bold">21%</span>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <span className="bg-[#fff] w-[11px] h-[11px] rounded-full"></span>
                <span className="text-primary text-sm">Backend</span>
                <span className="text-light ml-auto font-bold">5%</span>
              </div>
              <div className="flex flex-row gap-[10px] items-center">
                <span className="border-[#fff] border-[1px] w-[10px] h-[10px] rounded-full"></span>
                <span className="text-primary text-sm">Not Tracked</span>
                <span className="text-light ml-auto font-bold">3%</span>
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-evenly gap-[10px]">
            <div className="p-[20px] w-[165px] h-[105px] flex flex-col items-center justify-evenly bg-gradient-to-r to-bgContainer-from from-bgContainer-to rounded-[16px] shadow-2xl">
              <div className=" text-[28px] leading-[34px] font-text text-center text-light">
                257
              </div>
              <div className="text-primary text-center text-[13px]">Received by FB</div>
            </div>
            <div className="p-[20px] w-[165px] h-[105px] flex flex-col items-center justify-evenly bg-gradient-to-r to-bgContainer-from from-bgContainer-to rounded-[16px] shadow-2xl">
              <div className=" text-[28px] leading-[34px] font-text text-center text-light">
                257
              </div>
              <div className="text-primary text-center text-[13px]">Received by FB</div>
            </div>
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataContainerPerEvent;
