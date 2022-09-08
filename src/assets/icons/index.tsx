import { IconType } from 'utility/typeDefinitions/componentTypes';

import { RiBarChart2Line, RiLock2Fill } from 'react-icons/ri';
import { MdMail } from 'react-icons/md';
import { FiTarget, FiLogOut } from 'react-icons/fi';
import { FaRegCopyright } from 'react-icons/fa';
import {
  AiOutlineBell,
  AiFillCaretDown,
  AiOutlineWarning,
  AiFillEye,
  AiFillEyeInvisible
} from 'react-icons/ai';
import { BsBarChartLine } from 'react-icons/bs';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TbReportMoney } from 'react-icons/tb';
import { BiRefresh } from 'react-icons/bi';

import Dashboard from 'assets/icons/DashboardIcon';
import EventQuality from 'assets/icons/EventQualityIcon';
import MableLogoIcon from 'assets/icons/MableLogoIcon';
import OrderAnalysis from 'assets/icons/OrderAnalysisIcon';
import Settings from 'assets/icons/SettingsIcon';
import Shop from 'assets/icons/ShopIcon';
import Tutorial from 'assets/icons/TutorialIcon';
import MableLogo from 'assets/icons/MableLogo';
import ViewFullReport from 'assets/icons/ViewFullReportIcon';

const Icon = ({ icon, color, className, ...props }: IconType) => {
  switch (icon) {
    case 'alert':
      return (
        <AiOutlineWarning className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'bar-chart':
      return (
        <RiBarChart2Line className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'dashboard':
      return <Dashboard className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'settings':
      return <Settings className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'target':
      return <FiTarget className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'bell':
      return (
        <AiOutlineBell className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'bar-chart-line':
      return (
        <BsBarChartLine className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'speakerphone':
      return (
        <HiOutlineSpeakerphone
          className={`${color ? `text-${color}` : ''} ${className}`}
          {...props}
        />
      );

    case 'report-money':
      return (
        <TbReportMoney className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'refresh':
      return <BiRefresh className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'orderAnalysis':
      return (
        <OrderAnalysis className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'eventQuality':
      return <EventQuality className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'logout':
      return <FiLogOut className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'dropdown':
      return (
        <AiFillCaretDown className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'next':
      return (
        <ViewFullReport className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'email':
      return <MdMail className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'password':
      return <RiLock2Fill className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'copyright':
      return (
        <FaRegCopyright className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'showPassword':
      return <AiFillEye className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'hidePassword':
      return (
        <AiFillEyeInvisible className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'tutorial':
      return <Tutorial className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'mableIcon':
      return (
        <MableLogoIcon className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'shopIcon':
      return <Shop className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'mableLogo':
      return <MableLogo className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;
  }
  return null;
};
export default Icon;
