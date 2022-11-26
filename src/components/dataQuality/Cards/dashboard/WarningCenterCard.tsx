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
      className="flex-grow-[1] w-full min-h-[11.1875rem] max-h-[12.5rem] overflow-hidden"
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
        } min-h-[6.25rem] flex-grow-[1] h-[9.375rem]`}
      >
        {active.map(({ type, message, time }, index) => (
          <div
            key={index}
            className="flex flex-row items-center p-[.625rem] bg-primary/[0.15] mb-2 rounded-[.3125rem] gap-2 text-light"
          >
            <span className="px-[.3125rem] flex items-center">
              <Icon icon={type} size="xl" />
            </span>
            <span className="flex flex-col  flex-grow">
              <span className="text-[.75rem] leading-[.9375rem] font-montserrat">
                {type.charAt(0).toLocaleUpperCase()}
                {type.slice(1)}
              </span>
              <span className="text-[1rem] leading-[1.1875rem] font-montserrat font-semibold whitespace-nowrap">
                {message}
              </span>
            </span>
            <span className="text-[.75rem] leading-[1.1875rem] font-montserrat font-bold">
              {time}
            </span>
          </div>
        ))}
      </div>
    </ComponentWrapper>
  );
};
export default WarningCenterCard;
