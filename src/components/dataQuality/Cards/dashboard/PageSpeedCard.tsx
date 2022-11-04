import { useEffect } from "react";

import { ComponentWrapper, Error } from "@components/common";

import { STATUS_TYPE } from "@utility/constants/enums";

import { useSelector, useDispatch } from "@redux/store";
import { pageSpeedAsync } from "@redux/reducers/dataQuality/pageSpeedSlice";
import {
  loadingTimeLabel,
  mableShareSpeedLabel,
  scriptTagNotFoundPopupBody,
  scriptTagNotFoundPopupHeader,
  supportEmail,
} from "@utility/constants/strings";
import { dateTimeReducer } from "@utility/functions/formattingFunctions";

const PageSpeedCard = () => {
  const dispatch = useDispatch();
  const {
    avgLoadingTimePage,
    avgLoadingTimeMableScript,
    avgContributionTimeMableScript,
    status,
    scriptTagNotFound,
  } = useSelector((state) => state.pageSpeed);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(pageSpeedAsync());
  }, [refresh]);
  return (
    <ComponentWrapper
      title="Page Speed"
      className="flex-grow h-min"
      status={status}
    >
      {!scriptTagNotFound && (
        <Error
          header={scriptTagNotFoundPopupHeader}
          body={
            <>
              {scriptTagNotFoundPopupBody}{" "}
              <a
                className="text-primary outline-none"
                href={`mailto:${supportEmail}`}
              >
                {supportEmail}
              </a>
            </>
          }
        />
      )}
      <div className="flex flex-row justify-center items-center pb-[10px] h-full">
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {dateTimeReducer(avgLoadingTimeMableScript).value}
            <span className="text-[20px]">
              {dateTimeReducer(avgLoadingTimeMableScript).unit}
            </span>
          </div>
          <div className="text-primary text-center text-[14px]">
            {loadingTimeLabel("Mable")}
          </div>
        </div>
        <div className="border-r-2 border-lines/[0.15] min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {dateTimeReducer(avgLoadingTimePage).value}
            <span className="text-[20px]">
              {dateTimeReducer(avgLoadingTimePage).unit}
            </span>
          </div>
          <div className="text-primary text-center text-[14px] ">
            {loadingTimeLabel("Page")}
          </div>
        </div>
        <div className="min-w-[160px] flex-grow">
          <div className=" text-[35px] h-[42px] font-lato text-center text-light mb-[8px]">
            {Math.round(avgContributionTimeMableScript * 100) / 100}
            <span className="text-[20px]">%</span>
          </div>
          <div className="text-primary text-center text-[14px]">
            {mableShareSpeedLabel}
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default PageSpeedCard;
