import { Doughnut } from 'react-chartjs-2';

import { useSelector } from 'redux/store';

import colors from 'utility/colors';
import { dataEventLabels } from 'utility/constants/general';

const DoughnutChart = () => {
  const data = useSelector((state) => state.dataPerEvent.dataContainedPerEventDoughnutChart);
  const doughnutData = {
      labels: Object.values(dataEventLabels),
      datasets: [
        {
          data: [data.backend, 0.5, data.frontend, 0.5, data.mableEngine, data.unavailable],
          backgroundColor: [
            colors.darkBlue,
            colors.transparent,
            colors.lightBlue,
            colors.transparent,
            colors.light,
            colors.transparent
          ],
          borderColor: [
            colors.transparent,
            colors.transparent,
            colors.transparent,
            colors.transparent,
            colors.transparent,
            colors.light
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

export default DoughnutChart;
