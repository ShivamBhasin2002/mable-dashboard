import { useNavigate } from 'react-router-dom';
import Icon from 'assets/icons';
import SideBarItem from './items/generalSidebarItemCard';

import { useSelector, useDispatch } from 'redux/store';
import { logout } from 'redux/reducers/authSlice';
import { setScreen } from 'redux/reducers/screenSlice';
import { screenToURL } from 'utility/functions/mappingFunctions';
import { useWindowSize } from 'utility/customHooks';
import { screenType } from 'utility/constants/enums';
import { mableAiLandingPage } from 'utility/constants/strings';

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const { activeScreen } = useSelector((state) => state.screen);
  const { width: screenWidth } = useWindowSize();
  const navigator = useNavigate();

  const sideBar = {
    'Data Quality': [
      { title: screenType.dashboard, icon: 'dashboard' },
      { title: screenType.orderAnalysis, icon: 'orderAnalysis' },
      { title: screenType.eventQuality, icon: 'eventQuality' }
    ],
    Analytics: [{ title: screenType.analytics, icon: 'analytics' }],
    Settings: [{ title: screenType.settings, icon: 'settings' }]
  };
  return (
    <aside
      id="side-bar"
      className="sticky top-0 left-0 w-[70px] lg:w-[280px] h-screen bg-background border-r-2 border-lines/[0.15] py-[40px] flex flex-col gap-[25px] lg:gap-[70px] pr-[5px] lg:px-[30px]"
    >
      <header className="flex justify-center">
        <a href={mableAiLandingPage}>
          <Icon
            icon={(screenWidth ?? 0) >= 1024 ? 'mableLogo' : 'mableIcon'}
            width={(screenWidth ?? 0) >= 1024 ? 140 : 27}
          />
        </a>
      </header>

      <section className="flex-grow overflow-y-scroll hide_scrollbar">
        <div className="flex flex-col gap-[10px lg:gap-[27px]">
          {Object.entries(sideBar).map(([sidebarCategory, sidebarItems]) => {
            return (
              <div key={sidebarCategory}>
                <div className="text-[11px] lg:text-[14px] text-primary font-montserrat font-bold mb-[10px] text-center lg:text-start">
                  {sidebarCategory}
                </div>
                <div className="flex flex-col gap-[5px]">
                  {sidebarItems.map((item) => (
                    <SideBarItem
                      {...item}
                      key={item.icon}
                      clickHandle={() => {
                        const path = screenToURL(item.title);
                        if (activeScreen !== item.title && path) navigator(path);
                        dispatch(setScreen(item.title));
                      }}
                      isActive={activeScreen === item.title}
                    />
                  ))}
                </div>
                <hr className="ml-[5px] mt-[27px] lg:ml-0 border-secondary/25 hidden lg:block" />
              </div>
            );
          })}
        </div>
      </section>

      <section className="flex flex-col gap-[20px]">
        <div className="flex flex-row gap-4 w-full items-center justify-center lg:justify-start">
          <span className="w-[30px] h-[30px] lg:w-[35px] lg:h-[35px] text-[14px] lg:text-[18px] text-light bg-primary font-extrabold rounded-full inline-flex justify-center items-center">
            {firstName !== undefined ? firstName[0] : 'U'}
          </span>
          <span className="flex-col justify-center hidden lg:inline-flex">
            <span className="text-[16px] text-light font-montserrat font-bold">
              {`${firstName || ''} ${lastName || ''}`}
            </span>
          </span>
          <span className="text-md text-secondary hidden lg:inline-block">
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
          <span className="mr-[10px] ml-[15px] lg:ml-0 text-2xl rounded-full hover:bg-secondary/20 p-2">
            <Icon icon="logout" />
          </span>
          <span className="hidden lg:inline-block font-montserrat text-[18px] ">Log Out</span>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
