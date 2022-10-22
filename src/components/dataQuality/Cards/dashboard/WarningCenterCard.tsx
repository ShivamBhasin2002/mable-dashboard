import { ComponentWrapper } from 'components/common';
import Icon from 'assets/icons';

import { useSelector } from 'redux/store';

const WarningCenterCard = () => {
  const { active, status } = useSelector((state) => state.warnings);
  const { script_tag_found, script_tag_last_found } = useSelector((state) => state.pageSpeed);
  return (
    <ComponentWrapper
      title="Warning Center"
      width={600}
      underlined
      className="flex-grow min-h-[200px]"
      status={status}
    >
      {!script_tag_found && (
        <div className="flex flex-row items-center p-[20px] bg-primary/[0.15] mb-2 rounded-[15px] gap-4 text-light">
          <span className="px-[5px] flex items-center">
            <Icon icon="warning" size="xl" />
          </span>
          <span className="flex flex-col  flex-grow">
            <span className="text-[12px] leading-[15px] font-montserrat">Warning</span>
            <span className="text-[16px] leading-[19px] font-montserrat font-semibold whitespace-nowrap">
              Script tag not found
            </span>
          </span>
          <span className="text-[12px] leading-[19px] font-montserrat font-bold">
            {script_tag_last_found}
          </span>
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
