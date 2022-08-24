import { CircularProgress, CircularProgressLabel } from '@chakra-ui/react';
import { useEffect } from 'react';

import { useSelector, useDispatch } from 'redux/store';
import { dataQualityAsync } from 'redux/reducers/dataQualitySlice';

import { getColor, getMessage } from 'utility/functions';

const QualityCombined = () => {
  const dispatch = useDispatch();
  const { DQ_COM, status } = useSelector((state) => state.dataQuality);
  useEffect(() => {
    if (status === 'idle') dispatch(dataQualityAsync());
  });
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
