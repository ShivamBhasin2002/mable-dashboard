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
import MableLogo from 'assets/icons/MableLogoIcon';
import OrderAnalysis from 'assets/icons/OrderAnalysisIcon';
import Settings from 'assets/icons/SettingsIcon';
// import Shop from 'assets/icons/ShopIcon'
import Tutorial from 'assets/icons/TutorialIcon';

interface iconProps {
  icon?: string;
  size?: string;
  color?: string;
}

const Icon: React.FC<iconProps> = ({ icon, size, color }) => {
  switch (icon) {
    case 'alert':
      return <AiOutlineWarning size={size} className={color && `text-${color}`} />;
      break;
    case 'bar-chart':
      return <RiBarChart2Line size={size} className={color && `text-${color}`} />;
      break;
    case 'dashboard':
      return <Dashboard size={size} className={color && `text-${color}`} />;
      break;
    case 'settings':
      return <Settings size={size} className={color && `text-${color}`} />;
      break;
    case 'target':
      return <FiTarget size={size} className={color && `text-${color}`} />;
      break;
    case 'bell':
      return <AiOutlineBell size={size} className={color && `text-${color}`} />;
      break;
    case 'bar-chart-line':
      return <BsBarChartLine size={size} className={color && `text-${color}`} />;
      break;
    case 'speakerphone':
      return <HiOutlineSpeakerphone size={size} className={color && `text-${color}`} />;
      break;
    case 'report-money':
      return <TbReportMoney size={size} className={color && `text-${color}`} />;
      break;
    case 'refresh':
      return <BiRefresh size={size} className={color && `text-${color}`} />;
      break;
    case 'orderAnalysis':
      return <OrderAnalysis size={size} className={color && `text-${color}`} />;
      break;
    case 'eventQuality':
      return <EventQuality size={size} className={color && `text-${color}`} />;
      break;
    case 'logout':
      return <FiLogOut size={size} className={color && `text-${color}`} />;
      break;
    case 'dropdown':
      return <AiFillCaretDown size={size} className={color && `text-${color}`} />;
      break;
    case 'next':
      return <AiOutlineArrowRight size={size} className={color && `text-${color}`} />;
      break;
    case 'email':
      return <MdMail size={size} className={color && `text-${color}`} />;
      break;
    case 'password':
      return <RiLock2Fill size={size} className={color && `text-${color}`} />;
      break;
    case 'copyright':
      return <FaRegCopyright size={size} className={color && `text-${color}`} />;
      break;
    case 'showPassword':
      return <AiFillEye size={size} className={color && `text-${color}`} />;
      break;
    case 'hidePassword':
      return <AiFillEyeInvisible size={size} className={color && `text-${color}`} />;
      break;
    case 'tutorial':
      return <Tutorial size={size} className={color && `text-${color}`} />;
      break;
    case 'mableIcon':
      return <MableLogo size={size} className={color && `text-${color}`} />;
      break;
  }
  return null;
};
export default Icon;
