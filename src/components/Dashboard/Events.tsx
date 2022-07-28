import { FC } from "react";
import ComponentWrapper from "./ComponentWrapper";

interface EventsProps {
  data: string;
}

const Events: FC<EventsProps> = ({ data }) => {
  return (
    <ComponentWrapper title="Events" width={180}>
      <div className="flex flex-col justify-center">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {data}
          </div>
          <div className="text-primary text-center text-[14px]">
            Avg Loading Time
          </div>
      </div>
    </ComponentWrapper>
  );
};
export default Events;
