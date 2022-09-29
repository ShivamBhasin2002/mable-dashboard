import { useNavigate } from 'react-router-dom';
import Icon from 'assets/icons';

import { useSelector, useDispatch } from 'redux/store';
import { logout } from 'redux/reducers/authSlice';
import { setScreen } from 'redux/reducers/screenSlice';

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const { activeScreen } = useSelector((state) => state.screen);
  const sideBarItems = [
    { title: 'Dashboard', icon: 'dashboard' },
    { title: 'Order Analysis', icon: 'orderAnalysis' },
    { title: 'Event Quality', icon: 'eventQuality' },
    { title: 'Reports', icon: 'analytics' }
    // { title: 'Store', icon: 'shopIcon' },
    // { title: 'Settings', icon: 'settings' },
    // { title: 'Tutorial', icon: 'tutorial' }
  ];
  return (
    <aside
      id="side-bar"
      className="lg:sticky lg:top-0 lg:left-0 w-[280px] h-screen bg-background border-r-2 border-lines/[0.15] py-[50px] lg:flex flex-col gap-16 px-[25px] hidden"
    >
      <header className="flex justify-center">
        <Icon icon="mableLogo" width={140} />
      </header>
      <section className="flex-grow">
        <div className=" ml-[9px] text-[16px] text-light/[0.57] font-montserrat font-bold mb-[15px]">
          MENU
        </div>
        <div className="flex flex-col gap-[5px]">
          {sideBarItems.map((item) => {
            return (
              <div
                key={item.icon}
                className={`w-[228px] flex flex-row ${
                  activeScreen === item.title
                    ? 'text-light bg-primary/[0.1] font-bold '
                    : 'text-secondary font-medium'
                } h-[50px] rounded-[8px] cursor-pointer text-[14px] font-montserrat `}
                onClick={() => dispatch(setScreen(item.title))}
              >
                <span className="mr-[15px] ml-[20px] my-auto text-2xl">
                  {
                    <Icon
                      icon={item.icon}
                      width={24}
                      height={24}
                      active={activeScreen === item.title}
                    />
                  }
                </span>
                <span className="mt-[14px]">{item.title}</span>
              </div>
            );
          })}
        </div>
      </section>
      <section className="flex flex-col gap-[10px]">
        <div className="text-[16px] text-light/[0.57] font-montserrat font-bold">PROFILE</div>
        <div className="flex flex-row gap-4 w-full items-center ">
          <span className="w-[35px] h-[35px] text-light bg-primary font-extrabold rounded-full inline-flex justify-center items-center">
            {firstName !== undefined ? firstName[0] : 'U'}
          </span>
          <span className="inline-flex flex-col justify-center">
            <span className="text-[16px] text-light font-montserrat font-bold">
              {`${firstName || ''} ${lastName || ''}`}
            </span>
          </span>
          <span className="text-md text-secondary">
            <Icon icon="dropdown" />
          </span>
        </div>
        <div
          className="flex text-[14px] text-secondary font-montserrat font-bold items-center cursor-pointer"
          onClick={() => {
            dispatch(logout());
            navigate('/');
          }}
        >
          <span className="mr-[25px] ml-[10px] text-2xl rounded-full hover:bg-secondary/20 p-2 ">
            <Icon icon="logout" />
          </span>
          Logout
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
