import { IconType } from 'utility/typeDefinitions/componentPropTypes';

import { RiBarChart2Line, RiLock2Fill } from 'react-icons/ri';
import { MdMail } from 'react-icons/md';
import { FiTarget } from 'react-icons/fi';
import { FaRegCopyright, FaSortDown, FaSortUp } from 'react-icons/fa';
import {
  AiOutlineBell,
  AiFillCaretDown,
  AiFillEye,
  AiFillEyeInvisible,
  AiFillCaretLeft,
  AiFillCaretRight
} from 'react-icons/ai';
import { BsBarChartLine } from 'react-icons/bs';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TbReportMoney, TbMoodSmile, TbPackageOff } from 'react-icons/tb';
import { BiRefresh, BiError } from 'react-icons/bi';

import Dashboard from 'assets/icons/DashboardIcon';
import EventQuality from 'assets/icons/EventQualityIcon';
import Analytics from 'assets/icons/Analytics';
import MableLogoIcon from 'assets/icons/MableLogoIcon';
import OrderAnalysis from 'assets/icons/OrderAnalysisIcon';
import Settings from 'assets/icons/SettingsIcon';
import Shop from 'assets/icons/ShopIcon';
import Tutorial from 'assets/icons/TutorialIcon';
import MableLogo from 'assets/icons/MableLogo';
import ViewFullReport from 'assets/icons/ViewFullReportIcon';
import Info from 'assets/icons/Info';
import Error from 'assets/icons/Error';
import Warning from 'assets/icons/Warning';
import Delayed from 'assets/icons/Delayed';
import Pending from 'assets/icons/Pending';
import Tick from 'assets/icons/Tick';
import Cross from 'assets/icons/Cross';
import Logout from 'assets/icons/Logout';
import ScriptTagNotFound from 'assets/icons/ScriptTagNotFoundIcon';

import { SORT_ORDER } from 'utility/constants/enums';

const Icon = ({ icon, color, className, ...props }: IconType) => {
  switch (icon) {
    case 'error':
      return <Error className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'warning':
      return <Warning className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'info':
      return <Info className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'delayed':
      return <Delayed className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'pending':
      return <Pending className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'tick':
      return <Tick className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'cross':
      return <Cross className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

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

    case 'analytics':
      return <Analytics className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'logout':
      return <Logout className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

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

    case 'errorTriangular':
      return <BiError className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'noWarnings':
      return <TbMoodSmile className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'noOrders':
      return <TbPackageOff className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case 'left':
      return (
        <AiFillCaretLeft className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'right':
      return (
        <AiFillCaretRight className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case 'scriptTagNotFound':
      return (
        <ScriptTagNotFound className={`${color ? `text-${color}` : ''} ${className}`} {...props} />
      );

    case SORT_ORDER.INCREASING:
      return <FaSortDown className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    case SORT_ORDER.DECREASING:
      return <FaSortUp className={`${color ? `text-${color}` : ''} ${className}`} {...props} />;

    default:
      return null;
  }
};
export default Icon;
