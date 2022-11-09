import { Doughnut } from 'react-chartjs-2';

import { useSelector } from 'redux/store';

import { getMessage } from 'utility/functions/mappingFunctions';
import { getColor } from 'utility/functions/colorSelector';
import colors from 'utility/colors';
import { useEffect, useState } from 'react';

const QualityCombined = () => {
  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }

    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  useEffect(() => {
    console.log(windowSize);
  }, [windowSize]);

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
    cutout: windowSize.innerWidth / 53,
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
        ctx.font = '17px lato';
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
    <div className="flex w-full gap-2 justify-start items-center text-primary  flex-grow-[1]">
      <div className="flex-wrap-[1] ">
        <Doughnut
          id="doughnut"
          width={windowSize.innerWidth / 18}
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
