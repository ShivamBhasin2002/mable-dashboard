import { useNavigate } from 'react-router-dom';
import Icon from 'assets/icons';

import { useSelector, useDispatch } from 'redux/store';
import { logout } from 'redux/reducers/authSlice';
import { setScreen } from 'redux/reducers/screenSlice';
import { screenToURL } from 'utility/functions/mappingFunctions';
import { useWindowSize } from 'utility/customHooks';
import { screenType } from 'utility/constants/enums';
import { mableAiLandingPage } from 'utility/constants/strings';
import SideBarItem from './items/generalSidebarItemCard';

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
    Settings: [
      { title: screenType.settings, icon: 'settings' },
      { title: screenType.privacyCockpit, icon: 'sunglass' }
    ]
  };
  return (
    <aside
      id="side-bar"
      className="sticky top-0 left-0 w-[70px] lg:w-[200px] h-screen bg-background border-r-2 border-lines/[0.15] py-[20px] flex flex-col gap-[25px] lg:gap-[20px] pr-[5px] lg:px-[25px]"
    >
      <header className="flex justify-center">
        <a href={mableAiLandingPage}>
          <Icon
            icon={(screenWidth ?? 0) >= 1024 ? 'mableLogo' : 'mableIcon'}
            width={(screenWidth ?? 0) >= 1024 ? 93 : 27}
          />
        </a>
      </header>

      <section className="flex-grow overflow-y-scroll hide_scrollbar">
        <div className="flex flex-col gap-[10px] lg:gap-2">
          {Object.entries(sideBar).map(([sidebarCategory, sidebarItems], index) => (
            <div key={sidebarCategory}>
              <div className="hidden xl:inline-block text-[.7rem] xl:text-[.8rem] text-primary font-montserrat font-bold mb-2 text-center lg:text-start">
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
              {index !== Object.entries(sideBar).length - 1 && (
                <hr className="ml-[5px] lg:ml-0 border-secondary/25 hidden lg:block" />
              )}
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col gap-[10px]">
        <div className="flex flex-row  w-full items-center justify-between lg:justify-between">
          <span className="h-[1.7rem] w-[1.7rem] text-[.8rem] lg:text-[.8rem] text-light bg-primary/50 font-extrabold rounded-full inline-flex justify-center items-center p-2">
            {firstName !== undefined ? firstName[0] : 'U'}
          </span>
          <span className="flex-col justify-center hidden lg:inline-flex">
            <span className="text-[.7rem] text-light font-montserrat font-bold">
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
          <span className="mr-[10px] ml-[15px] lg:ml-0 text-[.7rem] rounded-full hover:bg-secondary/20 p-2">
            <Icon icon="logout" />
          </span>
          <span className="hidden lg:inline-block font-montserrat text-[.7rem] ">Log Out</span>
        </div>
      </section>
    </aside>
  );
};

export default SideBar;
