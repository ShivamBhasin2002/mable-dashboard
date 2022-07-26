import { FC } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ComponentWrapper from "./ComponentWrapper";

interface DataQualityProps {
  data: {
    overAllQuality: {
      stats: number;
      message: string;
    };
    frontendTracking: {
      stats: number;
      message: string;
    };
    backendTracking: {
      stats: number;
      message: string;
    };
    plot1: number[];
    plot2: number[];
  };
}

const DataQuality: FC<DataQualityProps> = ({ data }) => {
  return (
    <ComponentWrapper height={400} width={920} title="Data Quality">
      <div className="flex flex-row gap-8">
        <span className="flex flex-row gap-4 items-center text-primary">
          <span className="w-[84px] h-[84px]">
            <CircularProgressbar
              value={data.overAllQuality.stats}
              text={`${data.overAllQuality.stats}%`}
            />
          </span>
          {data.overAllQuality.message}
        </span>
      </div>
      <hr className="h-[2px] border-none my-[20px] bg-[#7F8C9F]/20" />
      <div className="flex flex-row gap-8">
        <div className="flex flex-col gap-4">
          <span className="flex flex-row gap-4 items-center text-primary">
            <span className="text-xs">
              <span className="text-bgPrimary-dark">FrontEnd Tracking</span> <br />
              {data.frontendTracking.message}
            </span>
            <span className="w-[53px] h-[53px]">
              <CircularProgressbar
                value={data.frontendTracking.stats}
                text={`${data.frontendTracking.stats}%`}
              />
            </span>
          </span><span className="flex flex-row gap-4 items-center text-primary">
            <span className="text-xs">
              <span className="text-bgPrimary-dark">BackEnd Tracking</span> <br />
              {data.backendTracking.message}
            </span>
            <span className="w-[53px] h-[53px]">
              <CircularProgressbar
                value={data.backendTracking.stats}
                text={`${data.backendTracking.stats}%`}
              />
            </span>
          </span>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataQuality;
