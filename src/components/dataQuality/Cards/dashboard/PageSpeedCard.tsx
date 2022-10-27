import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';

import { STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { pageSpeedAsync } from 'redux/reducers/dataQuality/pageSpeedSlice';
import {
  avgLoadingTimeLabel,
  mableScriptsLabel,
  pageShareSpeedLabel
} from 'utility/constants/strings';
import { dateTimeReducer } from 'utility/functions/formattingFunctions';

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
      <div className="flex flex-row justify-center pb-[10px]">
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {dateTimeReducer(avg_loading_time_page * 1000).value}
            <span className="text-[20px]">
              {dateTimeReducer(avg_loading_time_mable_script * 1000).unit}
            </span>
          </div>
          <div className="text-primary text-center text-[14px]">{avgLoadingTimeLabel}</div>
        </div>
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {dateTimeReducer(avg_loading_time_mable_script * 1000).value}
            <span className="text-[20px]">
              {dateTimeReducer(avg_loading_time_mable_script * 1000).unit}
            </span>
          </div>
          <div className="text-primary text-center text-[14px] ">
            {avgLoadingTimeLabel} <br /> {mableScriptsLabel}
          </div>
        </div>
        <div className="min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {Math.round(avg_contribution_time_mable_script * 100) / 100}
            <span className="text-[20px]">%</span>
          </div>
          <div className="text-primary text-center text-[14px]">{pageShareSpeedLabel}</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default PageSpeedCard;
