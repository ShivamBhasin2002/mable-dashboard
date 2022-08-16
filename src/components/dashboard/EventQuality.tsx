import { FC } from 'react';
import Icon from 'utility/icons';
import ComponentWrapper from '../ComponentWrapper';

interface EventQualityProps {
  data: {
    event: string;
    percentage: number;
  }[];
}

const EventQuality: FC<EventQualityProps> = ({ data }) => {
  return (
    <ComponentWrapper title="Event Quality">
      {data.map(({ event }, i) => (
        <div
          key={i}
          className={`flex flex-row items-center justify-between h-[75px] ${
            i + 1 !== data.length ? 'border-b-2 border-lines/[0.15]' : ''
          }`}
        >
          <span className="text-light text-[14px] font-text">{event}</span>
          <span className="w-[53px] h-[53px]">
            {/* <CircularProgressbar
              value={percentage}
              text={`${percentage}%`}
              styles={buildStyles({
                textColor: "#ffffff",
                textSize: "30px",
                pathColor: percentage <= 90 ? "#D99A43" : "#0DCE1C",
              })}
              counterClockwise
            /> */}
          </span>
        </div>
      ))}
      <span className="text-[14px] font-text text-secondary flex gap-2 items-center justify-center mt-[10px]">
        View Full Report
        <span className="text-secondary text-[15px]">
          <Icon icon="next" />
        </span>
      </span>
    </ComponentWrapper>
  );
};
export default EventQuality;
