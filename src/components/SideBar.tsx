import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Icon from '../utility/icons';

import { useSelector, useDispatch } from 'redux/store';
import { logout } from 'redux/reducers/userSlice';

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const sideBarItems = [
    { title: 'Dashboard', icon: 'dashboard' },
    { title: 'Order Analysis', icon: 'order' },
    { title: 'Event Quality', icon: 'eventQuality' },
    { title: 'Settings', icon: 'settings' }
  ];
  const [activeItem, setActiveItem] = useState(0);
  return (
    <aside
      id="side-bar"
      className="sticky top-0 left-0 w-[280px] h-screen bg-background border-r-2 border-lines/[0.15] py-[50px] lg:flex flex-col gap-16 px-[25px] hidden"
    >
      <header className="text-light text-center font-bold text-3xl">Mable</header>
      <section className="flex-grow">
        <div className="flex flex-col gap-[5px]">
          <div className=" ml-[9px] text-[16px] text-light/[0.57] font-heading font-bold">MENU</div>
          {sideBarItems.map((item, i) => {
            return (
              <div
                key={i}
                className={`w-[228px] flex flex-row items-center ${
                  activeItem === i ? 'text-light bg-primary/[0.20] ' : 'text-secondary'
                } py-[18px] rounded-[8px] cursor-pointer text-[14px] font-heading font-bold`}
                onClick={(): void => setActiveItem(i)}
              >
                <span className="mx-[25px] text-2xl">{<Icon icon={item.icon} />}</span>
                {item.title}
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-[10px]">
        <div className="text-[16px] text-light/[0.57] font-heading font-bold">PROFILE</div>
        <div className="flex flex-row gap-4 w-full items-center ">
          <span className="w-[35px] h-[35px] text-light bg-primary font-extrabold rounded-full inline-flex justify-center items-center">
            {firstName !== undefined ? firstName[0] : 'U'}
          </span>
          <span className="inline-flex flex-col ">
            <span className="text-[16px] text-light font-heading font-bold h-[17px]">
              {`${firstName || ''} ${lastName || ''}`}
            </span>
            <span className="text-[13px] text-secondary font-heading ">Mable User</span>
          </span>
          <span className="text-md text-secondary">
            <Icon icon="dropdown" />
          </span>
        </div>
        <div className="flex text-[14px] text-secondary font-heading font-bold items-center">
          <span
            className="mr-[25px] ml-[10px] text-2xl rounded-full hover:bg-secondary/20 p-2 cursor-pointer"
            onClick={() => {
              dispatch(logout());
              navigate('/');
            }}
          >
            <Icon icon="logout" />
          </span>
          Logout
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
