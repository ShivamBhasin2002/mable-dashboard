import { ComponentWrapper } from 'components/common';
import Icon from 'assets/icons';

import { useSelector } from 'redux/store';
import { noWarningsMessage } from 'utility/constants/strings';

const WarningCenterCard = () => {
  const { active, status } = useSelector((state) => state.warnings);
  return (
    <ComponentWrapper
      title="Warning Center"
      underlined
      className="flex-grow-[1] w-full min-h-[179px]"
      status={status}
    >
      {active.length === 0 && (
        <div className="flex flex-col h-full justify-center items-center">
          <Icon icon="noWarnings" className="text-[5rem] text-dark/20" />
          <p className="text-[1.5rem] font-montserrat font-bold text-dark/20">
            {noWarningsMessage}
          </p>
        </div>
      )}
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
