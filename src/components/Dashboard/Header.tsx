import {FC} from 'react';
import Icon from '../../data/icons';

interface DashboardHeaderProps {
    usersOnline: string[];
}

const DashboardHeader:FC<DashboardHeaderProps> = ({usersOnline}) => {
    return (
      <header>
        <div className="p-2 bg-bgPrimary h-12 w-[200px] m-8 ml-auto rounded-xl flex flex-row items-center justify-evenly text-bgPrimary-dark">
          <span className="h-[10px] w-[10px] bg-[#47B569] rounded-full" />
          {usersOnline[0]} &#38; {usersOnline[1]} &#38; ...
        </div>
        <div className="flex py-2 px-4 justify-between items-center">
          <h1 className="font-extrabold text-bgPrimary-dark text-4xl">
            Dashboard
          </h1>
          <span className="flex flex-row text-bgPrimary-dark">
            <span className="text-primary text-xl mr-4">
              <Icon icon="refresh" />
            </span>
            15.07.2022 to 29.07.2022
          </span>
        </div>
      </header>
    );
}

export default DashboardHeader;