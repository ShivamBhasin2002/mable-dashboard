import { useEffect } from 'react';

import { ComponentWrapper, Error } from 'components/common';

import { STATUS_TYPE } from 'utility/constants/enums';

import { useSelector, useDispatch } from 'redux/store';
import { pageSpeedAsync } from 'redux/reducers/dataQuality/pageSpeedSlice';
import {
  loadingTimeLabel,
  mableShareSpeedLabel,
  scriptTagNotFoundPopupBody,
  scriptTagNotFoundPopupHeader,
  supportEmail
} from 'utility/constants/strings';
import { dateTimeReducer } from 'utility/functions/formattingFunctions';

const PageSpeedCard = () => {
  const dispatch = useDispatch();
  const {
    avgLoadingTimePage,
    avgLoadingTimeMableScript,
    avgContributionTimeMableScript,
    status,
    scriptTagNotFound
  } = useSelector((state) => state.pageSpeed);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(pageSpeedAsync());
  }, [refresh]);
  return (
    <ComponentWrapper title="Page Speed" className="flex-grow-[1] h-[114px]" status={status}>
      {!scriptTagNotFound && (
        <Error
          header={scriptTagNotFoundPopupHeader}
          body={
            <>
              {scriptTagNotFoundPopupBody}{' '}
              <a className="text-primary outline-none" href={`mailto:${supportEmail}`}>
                {supportEmail}
              </a>
            </>
          }
        />
      )}
      <div className="flex flex-row justify-center items-center h-full">
        <div className="border-r-2 border-lines/[0.15]  flex-grow  mx-[-5px]">
          <div className=" text-[1.2rem]  font-lato text-center text-light ">
            {dateTimeReducer(avgLoadingTimeMableScript).value}
            <span className="text-[1.25rem]">
              {dateTimeReducer(avgLoadingTimeMableScript).unit}
            </span>
          </div>
          <div className="text-primary text-center text-[0.8rem]">{loadingTimeLabel('Mable')}</div>
        </div>
        <div className="border-r-2 border-lines/[0.15]  flex-grow">
          <div className=" text-[1.2rem]  font-lato text-center text-light ">
            {dateTimeReducer(avgLoadingTimePage).value}
            <span className="text-[1.25rem]">{dateTimeReducer(avgLoadingTimePage).unit}</span>
          </div>
          <div className="text-primary text-center text-[0.8rem] ">{loadingTimeLabel('Page')}</div>
        </div>
        <div className=" flex-grow">
          <div className=" text-[1.2rem]  font-lato text-center text-light ">
            {Math.round(avgContributionTimeMableScript * 100) / 100}
            <span className="text-[1.25rem]">%</span>
          </div>
          <div className="text-primary text-center text-[0.6rem]">{mableShareSpeedLabel}</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default PageSpeedCard;
