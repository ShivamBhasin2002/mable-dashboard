import Icon from 'assets/icons';
import { SideBarItemProps } from 'utility/typeDefinitions/componentPropTypes';

const SideBarItem = ({ icon, title, clickHandle, isActive }: SideBarItemProps) => (
  <div
    className={`flex flex-row ${
      isActive
        ? 'text-light bg-transparent lg:bg-primary/[0.1] font-bold '
        : 'text-secondary font-medium'
    } h-[50px] w-full lg:w-[160px] rounded-r-[10px] lg:rounded-[10px] cursor-pointer  font-montserrat justify-start items-center `}
    onClick={clickHandle}
  >
    <span className="m-auto lg:mr-[15px] lg:ml-[20px] lg:my-auto ">
      {<Icon icon={icon} width={20} height={20} isActive={isActive} />}
    </span>
    <span className="hidden lg:inline-block text-[.5rem] lg:text-[.7rem]">{title}</span>
  </div>
);

export default SideBarItem;
