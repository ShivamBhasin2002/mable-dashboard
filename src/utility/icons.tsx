import React from 'react';

import { RiBarChart2Line, RiLock2Fill } from 'react-icons/ri';
import { MdMail } from 'react-icons/md';
import { FiTarget, FiLogOut } from 'react-icons/fi';
import { FaRegCopyright } from 'react-icons/fa';
import {
  AiOutlineBell,
  AiFillCaretDown,
  AiOutlineArrowRight,
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

interface iconProps {
  icon?: string;
  size?: string;
  color?: string;
  width?: number;
  height?: number;
}

const Icon: React.FC<iconProps> = ({ icon, color, ...props }) => {
  switch (icon) {
    case 'alert':
      return <AiOutlineWarning className={color && `text-${color}`} {...props} />;
      break;
    case 'bar-chart':
      return <RiBarChart2Line className={color && `text-${color}`} {...props} />;
      break;
    case 'dashboard':
      return <Dashboard className={color && `text-${color}`} {...props} />;
      break;
    case 'settings':
      return <Settings className={color && `text-${color}`} {...props} />;
      break;
    case 'target':
      return <FiTarget className={color && `text-${color}`} {...props} />;
      break;
    case 'bell':
      return <AiOutlineBell className={color && `text-${color}`} {...props} />;
      break;
    case 'bar-chart-line':
      return <BsBarChartLine className={color && `text-${color}`} {...props} />;
      break;
    case 'speakerphone':
      return <HiOutlineSpeakerphone className={color && `text-${color}`} {...props} />;
      break;
    case 'report-money':
      return <TbReportMoney className={color && `text-${color}`} {...props} />;
      break;
    case 'refresh':
      return <BiRefresh className={color && `text-${color}`} {...props} />;
      break;
    case 'orderAnalysis':
      return <OrderAnalysis className={color && `text-${color}`} {...props} />;
      break;
    case 'eventQuality':
      return <EventQuality className={color && `text-${color}`} {...props} />;
      break;
    case 'logout':
      return <FiLogOut className={color && `text-${color}`} {...props} />;
      break;
    case 'dropdown':
      return <AiFillCaretDown className={color && `text-${color}`} {...props} />;
      break;
    case 'next':
      return <AiOutlineArrowRight className={color && `text-${color}`} {...props} />;
      break;
    case 'email':
      return <MdMail className={color && `text-${color}`} {...props} />;
      break;
    case 'password':
      return <RiLock2Fill className={color && `text-${color}`} {...props} />;
      break;
    case 'copyright':
      return <FaRegCopyright className={color && `text-${color}`} {...props} />;
      break;
    case 'showPassword':
      return <AiFillEye className={color && `text-${color}`} {...props} />;
      break;
    case 'hidePassword':
      return <AiFillEyeInvisible className={color && `text-${color}`} {...props} />;
      break;
    case 'tutorial':
      return <Tutorial className={color && `text-${color}`} {...props} />;
      break;
    case 'mableIcon':
      return <MableLogoIcon className={color && `text-${color}`} {...props} />;
      break;
    case 'shopIcon':
      return <Shop className={color && `text-${color}`} {...props} />;
      break;
    case 'mableLogo':
      return <MableLogo className={color && `text-${color}`} {...props} />;
      break;
  }
  return null;
};
export default Icon;
