import { useNavigate } from 'react-router-dom';
import Icon from 'utility/icons';

import { useSelector, useDispatch } from 'redux/store';
import { logout } from 'redux/reducers/userSlice';
import { setScreen } from 'redux/reducers/generalSlice';

const SideBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { firstName, lastName } = useSelector((state) => state.user);
  const { screen } = useSelector((state) => state.general);
  const sideBarItems = [
    { title: 'Dashboard', icon: 'dashboard' },
    { title: 'Order Analysis', icon: 'orderAnalysis' },
    { title: 'Event Quality', icon: 'eventQuality' },
    { title: 'Settings', icon: 'settings' },
    { title: 'Tutorial', icon: 'tutorial' }
  ];
  return (
    <aside
      id="side-bar"
      className="sticky top-0 left-0 w-[280px] h-screen bg-background border-r-2 border-lines/[0.15] py-[50px] lg:flex flex-col gap-16 px-[25px] hidden"
    >
      <header className="text-light text-center font-bold text-3xl flex gap-2 jus">
        <Icon icon="mableIcon" />
        Mable
      </header>
      <section className="flex-grow">
        <div className="flex flex-col gap-[5px]">
          <div className=" ml-[9px] text-[16px] text-light/[0.57] font-heading font-bold">MENU</div>
          {sideBarItems.map((item) => {
            return (
              <div
                key={item.icon}
                className={`w-[228px] flex flex-row items-center ${
                  screen === item.title ? 'text-light bg-primary/[0.20] ' : 'text-secondary'
                } py-[18px] rounded-[8px] cursor-pointer text-[14px] font-heading font-bold`}
                onClick={() => dispatch(setScreen(item.title))}
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
        <div
          className="flex text-[14px] text-secondary font-heading font-bold items-center cursor-pointer"
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
