import Icon from 'assets/icons';
import { SideBarItemProps } from 'utility/typeDefinitions/componentPropTypes';

const SideBarItem = ({ icon, title, clickHandle, isActive }: SideBarItemProps) => (
  <div
    className={`flex flex-row ${
      isActive
        ? 'text-light bg-transparent lg:bg-primary/[0.1] font-bold '
        : 'text-secondary font-medium'
    } h-[3.125rem] w-full lg:w-[10rem] rounded-r-[.625rem] lg:rounded-[.625rem] cursor-pointer  font-montserrat justify-start items-center `}
    onClick={clickHandle}
  >
    <span className="m-auto lg:mr-[.9375rem] lg:ml-[1.25rem] lg:my-auto ">
      {<Icon icon={icon} width={20} height={20} isActive={isActive} />}
    </span>
    <span className="hidden lg:inline-block text-[.5rem] lg:text-[.7rem]">{title}</span>
  </div>
);

export default SideBarItem;
