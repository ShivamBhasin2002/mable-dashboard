import { FC, useState } from "react";
import Icon from "../data/icons";

interface SideBarProps {
  user: {
    name: string;
    designation: string;
  };
}

const SideBar: FC<SideBarProps> = ({ user }) => {
  const sideBarItems = [
    { title: "Dashboard", icon: "dashboard" },
    { title: "Customer", icon: "people" },
    { title: "Marketing", icon: "bar-chart" },
    { title: "Management", icon: "files" },
    { title: "Settings", icon: "settings" },
  ];
  const [activeItem, setActiveItem] = useState(0);
  return (
    <aside
      id="side-bar"
      className="sticky top-0 left-0 w-[280px] h-screen bg-background border-r-2 border-[#7F8C9F]/20 py-[40px] flex flex-col gap-16"
    >
      <header className="text-bgPrimary-dark text-center font-bold text-3xl">
        Mable
      </header>
      <div id="menu" className="">
        <div id="menu-header" className="text-bgPrimary-dark ml-5">
          Menu
        </div>
        <div className="flex flex-col">
          {sideBarItems.map((item: any, i: number): any => {
            return (
              <div
                key={i}
                className={`w-[80%] flex flex-row ${
                  activeItem === i
                    ? "text-bgPrimary-dark bg-primary/20 border-l-primary border-l-8"
                    : "text-bgPrimary-dark/60"
                } p-2 m-2 ml-0 rounded-r-lg cursor-pointer`}
                onClick={(): void => setActiveItem(i)}
              >
                <span className="mx-[15px] text-2xl">
                  {<Icon icon={item.icon} />}
                </span>
                {item.title}
              </div>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row justify-center gap-4 w-full text-bgPrimary-dark mt-auto">
        <span className="w-[35px] h-[35px]  bg-primary font-extrabold rounded-full inline-flex justify-center items-center">
          {user.name[0]}
        </span>
        <span className="inline-flex flex-col  text-sm h-[35px]">
          <span className="font-bold">{user.name}</span>
          <span>{user.designation}</span>
        </span>
        <span className="text-3xl">
          <Icon icon="bell" />
        </span>
      </div>
    </aside>
  );
};

export default SideBar;
