import { Doughnut } from 'react-chartjs-2';

import { useSelector } from 'redux/store';

import { getMessage } from 'utility/functions/mappingFunctions';
import { getColor } from 'utility/functions/colorSelector';
import colors from 'utility/colors';

const QualityCombined = () => {
  const { TOTAL_DATA_QUALITY_FACEBOOK } = useSelector((state) => state.dataQuality);
  const doughnutData = {
      datasets: [
        {
          data: [TOTAL_DATA_QUALITY_FACEBOOK, 100 - TOTAL_DATA_QUALITY_FACEBOOK],
          backgroundColor: [getColor(TOTAL_DATA_QUALITY_FACEBOOK), `${colors.lines}40`],
          borderColor: colors.transparent,
          datalabels: {
            display: false
          }
        }
      ]
    },
    doughnutOptions = {
      elements: {
        arc: {
          borderWidth: 1,
          borderColor: 'white'
        }
      },
      cutout: 32,
      rotation: 10 * Math.PI,
      borderRadius: [TOTAL_DATA_QUALITY_FACEBOOK === 100 ? 0 : 20, 0],
      value: TOTAL_DATA_QUALITY_FACEBOOK
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
          ctx.font = '22px lato';
          ctx.textBaseline = 'middle';
          ctx.fillStyle = getColor(chart.config.options.value);
          const text = `${chart.config.options.value}%`,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
    ];

  return (
    <div className="flex flex-row gap-4 items-center text-primary">
      <div>
        <Doughnut
          id="doughnut"
          width={84}
          data={doughnutData}
          plugins={doughnutPlugins}
          options={doughnutOptions}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[14px] font-lato text-light font-bold">Quality Combined</span>
        <span className="text-[26px] font-montserrat font-bold text-primary">
          {getMessage(TOTAL_DATA_QUALITY_FACEBOOK)}
        </span>
      </div>
    </div>
  );
};

export default QualityCombined;
