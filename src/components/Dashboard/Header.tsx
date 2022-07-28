import { FC } from "react";
import Icon from "../../data/icons";

interface DashboardHeaderProps {
  usersOnline: string[];
}

const DashboardHeader: FC<DashboardHeaderProps> = ({ usersOnline }) => {
  return (
    <header>
      <div className="p-[20px] bg-gradient-to-r from-bgContainer-from to-bgContainer-to h-[55px] w-[200px] ml-auto rounded-xl flex flex-row items-center justify-evenly text-light">
        <span className="h-[10px] w-[10px] bg-success rounded-full" />
        {usersOnline[0]} &#38; {usersOnline[1]}
        <Icon icon="dropdown" />
      </div>
      <hr className="h-[2px] border-none my-[23px] bg-lines/[0.15] w-[600px] ml-auto" />
      <div className="flex justify-between items-center h-[45px]">
        <h1 className="text-bgPrimary-dark text-[42px] text-light font-heading font-bold relative top-[-16px]">
          Dashboard
        </h1>
        <span className="flex flex-row text-bgPrimary-dark gap-[15px]">
          <span className="text-primary w-[60px] h-[45px] rounded-[10px] bg-gradient-to-r from-bgContainer-from to-bgContainer-to flex justify-center items-center text-3xl">
            <Icon icon="refresh" />
          </span>
          <span className="bg-gradient-to-r from-bgContainer-from to-bgContainer-to w-[220px] h-[45px] rounded-[10px] flex flex-row justify-evenly items-center text-[16px] font-text text-light">
            15.07.22 to 29.07.22
            <Icon icon="dropdown"/>
          </span>
        </span>
      </div>
    </header>
  );
};

export default DashboardHeader;
