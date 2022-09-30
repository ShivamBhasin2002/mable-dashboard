import { ComponentWrapper } from 'components/common';
import Icon from 'assets/icons';

import { useSelector } from 'redux/store';

const WarningCenterCard = () => {
  const { active } = useSelector((state) => state.warnings);
  return (
    <ComponentWrapper title="Warning Center" width={600} underlined className="flex-grow">
      {active.map(({ type, message, time }, index) => (
        <div
          key={index}
          className="flex flex-row items-center p-[20px] bg-primary/[0.15] mb-2 rounded-[15px] gap-4 text-light"
        >
          <span className="px-[5px] flex items-center">
            <Icon icon={type} size="xl" />
          </span>
          <span className="flex flex-col  flex-grow">
            <span className="text-[12px] leading-[15px] font-montserrat">
              {type.charAt(0).toLocaleUpperCase()}
              {type.slice(1)}
            </span>
            <span className="text-[16px] leading-[19px] font-montserrat font-semibold whitespace-nowrap">
              {message}
            </span>
          </span>
          <span className="text-[12px] leading-[19px] font-montserrat font-bold">{time}</span>
        </div>
      ))}
    </ComponentWrapper>
  );
};
export default WarningCenterCard;
