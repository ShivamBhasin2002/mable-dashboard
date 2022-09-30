import { useEffect } from 'react';

import { ComponentWrapper } from 'components/common';

import { STATUS_TYPE } from 'utility/constants/general';

import { useSelector, useDispatch } from 'redux/store';
import { pageSpeedAsync } from 'redux/reducers/pageSpeedSlice';

const PageSpeedCard = () => {
  const dispatch = useDispatch();
  const {
    AVG_LOADING_TIME_PAGE,
    AVG_LOADING_TIME_MABLE_SCRIPT,
    AVG_CONTRIBUTION_TIME_MABLE_SCRIPT,
    status
  } = useSelector((state) => state.pageSpeed);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(pageSpeedAsync());
  }, [refresh]);
  return (
    <ComponentWrapper title="Page Speed" width={560} className="flex-grow">
      <div className="flex flex-row justify-center pb-[10px]">
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {AVG_LOADING_TIME_PAGE}
            <span className="text-[20px]">s</span>
          </div>
          <div className="text-primary text-center text-[14px]">Avg Loading Time</div>
        </div>
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {AVG_LOADING_TIME_MABLE_SCRIPT}
            <span className="text-[20px]">s</span>
          </div>
          <div className="text-primary text-center text-[14px]">Avg Loading Time</div>
        </div>
        <div className="min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {AVG_CONTRIBUTION_TIME_MABLE_SCRIPT}
            <span className="text-[20px]">%</span>
          </div>
          <div className="text-primary text-center text-[14px]">Page Speed Share</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default PageSpeedCard;
