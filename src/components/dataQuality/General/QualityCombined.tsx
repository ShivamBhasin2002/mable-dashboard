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
  };
  const doughnutOptions = {
    plugins: {
      tooltip: {
        enabled: false
      }
    },
    elements: {
      arc: {
        borderWidth: 1,
        borderColor: 'white'
      }
    },
    cutout: '75%',
    rotation: 10 * Math.PI,
    borderRadius: [TOTAL_DATA_QUALITY_FACEBOOK === 100 ? 0 : 20, 0],
    value: TOTAL_DATA_QUALITY_FACEBOOK
  };
  const doughnutPlugins = [
    {
      id: 'doughnut',
      // eslint-disable-next-line
      beforeDraw: (chart: any) => {
        const { width } = chart;
        const { height } = chart;
        const { ctx } = chart;
        ctx.restore();
        ctx.font = '21px lato';
        ctx.textBaseline = 'middle';
        ctx.fillStyle = getColor(chart.config.options.value);
        const text = `${chart.config.options.value}%`;
        const textX = Math.round((width - ctx.measureText(text).width) / 2);
        const textY = height / 2;
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    }
  ];

  return (
    <div className="flex gap-2 justify-start items-center text-primary  flex-grow-[1] flex-shrink-[2.5] h-inherit ">
      <div className="flex-grow-[1] max-w-[4rem] lg:max-w-[5rem] 2xl:max-w-[6rem] hd:max-w-[6rem] mt-2">
        <Doughnut
          id="doughnut"
          data={doughnutData}
          plugins={doughnutPlugins}
          options={doughnutOptions}
        />
      </div>
      <div className="flex flex-col">
        <span className="text-[.9rem] font-lato text-light font-bold">Quality Combined</span>
        <span className="text-[1.4rem] font-montserrat font-bold text-primary">
          {getMessage(TOTAL_DATA_QUALITY_FACEBOOK)}
        </span>
      </div>
    </div>
  );
};

export default QualityCombined;
