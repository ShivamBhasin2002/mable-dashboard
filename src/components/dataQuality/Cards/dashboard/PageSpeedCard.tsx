import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';

import { STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { pageSpeedAsync } from 'redux/reducers/dataQuality/pageSpeedSlice';
import { loadingTimeLabel, mableShareSpeedLabel } from 'utility/constants/strings';
import { dateTimeReducer } from 'utility/functions/formattingFunctions';
import ScriptTagNotFoundCard from './ScriptTagNotFoundCard';

const PageSpeedCard = () => {
  const dispatch = useDispatch();
  const {
    avg_loading_time_page,
    avg_loading_time_mable_script,
    avg_contribution_time_mable_script,
    status
  } = useSelector((state) => state.pageSpeed);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(pageSpeedAsync());
  }, [refresh]);
  return (
    <ComponentWrapper title="Page Speed" className="flex-grow lg:pb-[10px]" status={status}>
      <ScriptTagNotFoundCard />
      <div className="flex flex-row justify-center pb-[10px]">
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {dateTimeReducer(avg_loading_time_mable_script).value}
            <span className="text-[20px]">
              {dateTimeReducer(avg_loading_time_mable_script).unit}
            </span>
          </div>
          <div className="text-primary text-center text-[14px]">{loadingTimeLabel('Mable')}</div>
        </div>
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {dateTimeReducer(avg_loading_time_page).value}
            <span className="text-[20px]">{dateTimeReducer(avg_loading_time_page).unit}</span>
          </div>
          <div className="text-primary text-center text-[14px] ">{loadingTimeLabel('Page')}</div>
        </div>
        <div className="min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {Math.round(avg_contribution_time_mable_script * 100) / 100}
            <span className="text-[20px]">%</span>
          </div>
          <div className="text-primary text-center text-[14px]">{mableShareSpeedLabel}</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default PageSpeedCard;
