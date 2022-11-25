import { ComponentWrapper } from 'components/common';
import Icon from 'assets/icons';

import { useSelector } from 'redux/store';
import { noWarningsMessage } from 'utility/constants/strings';

const WarningCenterCard = () => {
  const { status, active } = useSelector((state) => state.warnings);
  return (
    <ComponentWrapper
      title="Warning Center"
      underlined
      height={100}
      className="flex-grow-[1] w-full min-h-[179px] max-h-[200px] overflow-hidden"
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
      <div
        className={`${
          active.length === 0 ? 'overflow-y-hidden' : 'overflow-y-scroll'
        } min-h-[100px] flex-grow-[1] h-[150px]`}
      >
        {active.map(({ type, message, time }, index) => (
          <div
            key={index}
            className="flex flex-row items-center p-[10px] bg-primary/[0.15] mb-2 rounded-[5px] gap-2 text-light"
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
      </div>
    </ComponentWrapper>
  );
};
export default WarningCenterCard;
