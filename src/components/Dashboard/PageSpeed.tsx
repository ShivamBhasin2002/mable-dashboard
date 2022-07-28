import { FC } from "react";
import ComponentWrapper from "./ComponentWrapper";

interface PageSpeedProps {
  data: {
    avgLoadingTime: string;
    pageSpeedShare: string;
  };
}

const PageSpeed: FC<PageSpeedProps> = ({ data }) => {
  return (
    <ComponentWrapper
      title="Page Speed"
      width={395}
    >
      <div className="flex flex-row justify-center">
        <div className="border-r-2 border-lines/[0.15] w-[150px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {data.avgLoadingTime}
          </div>
          <div className="text-primary text-center text-[14px]">
            Avg Loading Time
          </div>
        </div>
        <div className="w-[150px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {data.pageSpeedShare}
          </div>
          <div className="text-primary text-center text-[14px]">
            Page Speed Share
          </div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default PageSpeed;
