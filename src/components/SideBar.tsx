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
    { title: "Order Analysis", icon: "order" },
    { title: "Event Quality", icon: "eventQuality" },
    { title: "Settings", icon: "settings" },
  ];
  const [activeItem, setActiveItem] = useState(0);
  return (
    <aside
      id="side-bar"
      className="sticky top-0 left-0 w-[280px] h-screen bg-background border-r-2 border-lines/[0.15] py-[50px] flex flex-col gap-16 px-[25px]"
    >
      <header className="text-light text-center font-bold text-3xl">
        Mable
      </header>
      <section className="flex-grow">
        <div className="flex flex-col gap-[5px]">
          <div className=" ml-[9px] text-[16px] text-light/[0.57] font-heading font-bold">
            MENU
          </div>
          {sideBarItems.map((item: any, i: number): any => {
            return (
              <div
                key={i}
                className={`w-[228px] flex flex-row items-center ${
                  activeItem === i
                    ? "text-light bg-primary/[0.20] "
                    : "text-secondary"
                } py-[18px] rounded-[8px] cursor-pointer text-[14px] font-heading font-bold`}
                onClick={(): void => setActiveItem(i)}
              >
                <span className="mx-[25px] text-2xl">
                  {<Icon icon={item.icon} />}
                </span>
                {item.title}
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-[20px]">
        <div className="text-[16px] text-light/[0.57] font-heading font-bold">
          PROFILE
        </div>
        <div className="flex flex-row gap-4 w-full items-center ">
          <span className="w-[35px] h-[35px] text-light bg-primary font-extrabold rounded-full inline-flex justify-center items-center">
            {user.name[0]}
          </span>
          <span className="inline-flex flex-col ">
            <span className="text-[16px] text-light font-heading font-bold h-[17px]">
              {user.name}
            </span>
            <span className="text-[13px] text-secondary font-heading ">
              {user.designation}
            </span>
          </span>
          <span className="text-md text-secondary">
            <Icon icon="dropdown" />
          </span>
        </div>
        <div className="flex text-[14px] text-secondary font-heading font-bold">
          <span className="mx-[25px] text-2xl">
            <Icon icon="logout" />
          </span>
          Logout
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
