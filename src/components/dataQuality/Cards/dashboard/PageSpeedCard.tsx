import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';

import { STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { pageSpeedAsync } from 'redux/reducers/dataQuality/pageSpeedSlice';
import { avgLoadingTime, mableScripts, pageShareSpeed } from 'utility/constants/strings';

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
    <ComponentWrapper title="Page Speed" width={560} className="flex-grow" status={status}>
      <div className="flex flex-row justify-center pb-[10px]">
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {avg_loading_time_page}
            <span className="text-[20px]">s</span>
          </div>
          <div className="text-primary text-center text-[14px]">{avgLoadingTime}</div>
        </div>
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {avg_loading_time_mable_script}
            <span className="text-[20px]">s</span>
          </div>
          <div className="text-primary text-center text-[14px] ">
            {avgLoadingTime} <br /> {mableScripts}
          </div>
        </div>
        <div className="min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {avg_contribution_time_mable_script}
            <span className="text-[20px]">%</span>
          </div>
          <div className="text-primary text-center text-[14px]">{pageShareSpeed}</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default PageSpeedCard;
