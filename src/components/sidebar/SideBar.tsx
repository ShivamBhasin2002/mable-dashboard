import { useNavigate } from 'react-router-dom';
import Icon from 'assets/icons';
import SideBarItem from './items/generalSidebarItemCard';

import { useSelector, useDispatch } from 'redux/store';
import { logout } from 'redux/reducers/authSlice';
import { setScreen } from 'redux/reducers/screenSlice';

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const { activeScreen } = useSelector((state) => state.screen);
  const sideBar = {
    'Data Quality': [
      { title: 'Dashboard', icon: 'dashboard' },
      { title: 'Order Analysis', icon: 'orderAnalysis' },
      { title: 'Event Quality', icon: 'eventQuality' }
    ],
    Analytics: [{ title: 'Reports', icon: 'analytics' }],
    Settings: [
      { title: 'Account Settings', icon: 'settings' },
      { title: 'Privacy Cockpit', icon: 'settings' }
    ]
  };
  return (
    <aside
      id="side-bar"
      className="lg:sticky lg:top-0 lg:left-0 w-[280px] h-screen bg-background border-r-2 border-lines/[0.15] py-[40px] lg:flex flex-col  px-[25px] hidden"
    >
      <header className="flex justify-center h-10 ">
        <Icon icon="mableLogo" width={140} />
      </header>

      <section className="flex-grow h-10 overflow-hidden h-70 ">
        <div className="flex flex-col gap-[5px] h-full">
          {Object.entries(sideBar).map(([sidebarCategory, sidebarItems]) => {
            return (
              <div key={sidebarCategory}>
                <div className="ml-[9px] text-[16px] text-light/[0.57] font-montserrat font-bold mb-[15px]">
                  {sidebarCategory}
                </div>
                {sidebarItems.map((item) => (
                  <SideBarItem
                    {...item}
                    key={item.icon}
                    clickHandle={() => dispatch(setScreen(item.title))}
                    isActive={activeScreen === item.title}
                  />
                ))}
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-[10px] h-20 items justify-end">
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
