import Icon from 'assets/icons';
import { SideBarItemProps } from 'utility/typeDefinitions/componentPropTypes';

const SideBarItem = ({ icon, title, clickHandle, isActive }: SideBarItemProps) => {
  return (
    <div
      className={`w-[65px] lg:w-[228px] flex flex-row ${
        isActive ? 'text-light bg-primary/[0.1] font-bold ' : 'text-secondary font-medium'
      } h-[50px] rounded-r-[10px] lg:rounded-[10px] cursor-pointer text-[14px] font-montserrat justify-center lg:justify-start items-center lg:items-start`}
      onClick={clickHandle}
    >
      <span className="lg:mr-[15px] lg:ml-[20px] lg:my-auto text-2xl">
        {<Icon icon={icon} width={24} height={24} isActive={isActive} />}
      </span>
      <span className="mt-[14px] hidden lg:inline-block">{title}</span>
    </div>
  );
};

export default SideBarItem;
