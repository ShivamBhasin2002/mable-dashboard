import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';

import { useSelector } from 'redux/store';

import { getColor, getMessage } from 'utility/functions';

const QualityCombined = () => {
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

export default QualityCombined;
