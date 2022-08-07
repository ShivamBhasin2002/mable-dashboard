import { FC } from 'react';
import ComponentWrapper from './ComponentWrapper';
import Icon from '../../utility/icons';

interface WarningCenterProps {
  data: {
    level: string;
    message: string;
    time: string;
  }[];
}

const WarningCenter: FC<WarningCenterProps> = ({ data }) => {
  return (
    <ComponentWrapper title="Warning Center" width={600} underlined>
      {data.map(({ level, message, time }, index) => (
        <div
          key={index}
          className="flex flex-row items-center p-[20px] bg-primary/[0.20] mb-2 rounded-[15px] gap-4 text-light"
        >
          <span className={`${level === 'Error' ? 'text-error' : 'text-average'} text-3xl`}>
            <Icon icon="alert" />
          </span>
          <span className="flex flex-col  flex-grow">
            <span className="text-[12px] leading-[15px] font-heading">{level}</span>
            <span className="text-[16px] leading-[19px] font-heading font-bold">{message}</span>
          </span>
          <span className="text-[12px] leading-[19px] font-heading font-bold">{time}</span>
        </div>
      ))}
    </ComponentWrapper>
  );
};
export default WarningCenter;
