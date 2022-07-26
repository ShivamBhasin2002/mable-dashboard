import { FC } from "react";
import ComponentWrapper from "./ComponentWrapper";

interface StatisticsProps {
  data: {
    current: string;
    prev: string;
  };
  title: string;
  icon?: string;
}

const Statistics: FC<StatisticsProps> = ({ data,title,icon }) => {
  return (
    <ComponentWrapper titleIcon={icon} title={title}>
      <div className="font-bold text-5xl text-center text-bgPrimary-dark my-4">
        {data.current}
      </div>
      <div className="text-primary/50 text-center ">{data.prev} from Last Month</div>
    </ComponentWrapper>
  );
};
export default Statistics;
