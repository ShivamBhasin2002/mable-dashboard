import Icon from 'assets/icons';
import { SideBarItemProps } from 'utility/typeDefinitions/componentPropTypes';

const SideBarItem = ({ icon, title, clickHandle, isActive }: SideBarItemProps) => {
  return (
    <div
      className={`w-[228px] flex flex-row ${
        isActive ? 'text-light bg-primary/[0.1] font-bold ' : 'text-secondary font-medium'
      } h-[50px] rounded-[8px] cursor-pointer text-[14px] font-montserrat `}
      onClick={clickHandle}
    >
      <span className="mr-[15px] ml-[20px] my-auto text-2xl">
        {<Icon icon={icon} width={24} height={24} active={isActive} />}
      </span>
      <span className="mt-[14px]">{title}</span>
    </div>
  );
};

export default SideBarItem;
