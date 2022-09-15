import { useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

import { useSelector, useDispatch } from 'redux/store';
import { dataQualityAsync } from 'redux/reducers/dataQualitySlice';

import { getColor, getMessage } from 'utility/functions';
import colors from 'utility/colors';

const QualityCombined = () => {
  const dispatch = useDispatch();
  const { DQ_COM, status } = useSelector((state) => state.dataQuality);
  useEffect(() => {
    if (status === 'idle') dispatch(dataQualityAsync());
  });
  const doughnutData = {
      datasets: [
        {
          data: [DQ_COM * 100, (1 - DQ_COM) * 100],
          backgroundColor: [getColor(DQ_COM), `${colors.lines}40`],
          borderColor: colors.transparent,
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
      cutout: 32,
      rotation: 10 * Math.PI,
      borderRadius: [20, 0]
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
          ctx.fillStyle = getColor(DQ_COM);
          const text = `${DQ_COM * 100}%`,
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
          ctx.fillText(text, textX, textY);
          ctx.save();
        }
      }
    ];

  return (
    <div className="flex flex-row gap-4 items-center text-primary">
      {/* <CircularProgress
        value={DQ_COM * 100}
        color={getColor(DQ_COM)}
        size="84px"
        trackColor="#7F8C9F40"
        capIsRound
        max={100}
        min={0}
      >
        <CircularProgressLabel className={`font-lato text-[30px] text-[${getColor(DQ_COM)}]`}>
          {DQ_COM * 100} %
        </CircularProgressLabel>
      </CircularProgress> */}
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
        <span className="text-[26px] font-montserrat font-bold text-primary h-[34px]">
          {getMessage(DQ_COM)}
        </span>
      </div>
    </div>
  );
};

export default QualityCombined;
