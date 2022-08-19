import React from 'react';

import { RiBarChart2Line, RiLock2Fill } from 'react-icons/ri';
import { MdOutlineDashboard, MdMail } from 'react-icons/md';
import { FiSettings, FiTarget, FiLogOut } from 'react-icons/fi';
import { FaRegCopyright } from 'react-icons/fa';
import {
  AiOutlineBell,
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiOutlineWarning,
  AiFillEye,
  AiFillEyeInvisible
} from 'react-icons/ai';
import { BsBarChartLine, BsBorderWidth, BsQuestionCircle } from 'react-icons/bs';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TbReportMoney } from 'react-icons/tb';
import { BiRefresh, BiDoughnutChart } from 'react-icons/bi';

interface iconProps {
  icon?: string;
  size?: string;
  color?: string;
}

const Icon: React.FC<iconProps> = ({ icon, size, color }) => {
  switch (icon) {
    case 'alert':
      return <AiOutlineWarning size={size} className={color && `text-${color}`} />;
    case 'bar-chart':
      return <RiBarChart2Line size={size} className={color && `text-${color}`} />;
    case 'dashboard':
      return <MdOutlineDashboard size={size} className={color && `text-${color}`} />;
    case 'settings':
      return <FiSettings size={size} className={color && `text-${color}`} />;
    case 'target':
      return <FiTarget size={size} className={color && `text-${color}`} />;
    case 'bell':
      return <AiOutlineBell size={size} className={color && `text-${color}`} />;
    case 'bar-chart-line':
      return <BsBarChartLine size={size} className={color && `text-${color}`} />;
    case 'speakerphone':
      return <HiOutlineSpeakerphone size={size} className={color && `text-${color}`} />;
    case 'report-money':
      return <TbReportMoney size={size} className={color && `text-${color}`} />;
    case 'refresh':
      return <BiRefresh size={size} className={color && `text-${color}`} />;
    case 'order':
      return <BsBorderWidth size={size} className={color && `text-${color}`} />;
    case 'eventQuality':
      return <BiDoughnutChart size={size} className={color && `text-${color}`} />;
    case 'logout':
      return <FiLogOut size={size} className={color && `text-${color}`} />;
    case 'dropdown':
      return <AiFillCaretDown size={size} className={color && `text-${color}`} />;
    case 'next':
      return <AiOutlineArrowRight size={size} className={color && `text-${color}`} />;
    case 'email':
      return <MdMail size={size} className={color && `text-${color}`} />;
    case 'password':
      return <RiLock2Fill size={size} className={color && `text-${color}`} />;
    case 'copyright':
      return <FaRegCopyright size={size} className={color && `text-${color}`} />;
    case 'showPassword':
      return <AiFillEye size={size} className={color && `text-${color}`} />;
    case 'hidePassword':
      return <AiFillEyeInvisible size={size} className={color && `text-${color}`} />;
    case 'tutorial':
      return <BsQuestionCircle size={size} className={color && `text-${color}`} />;
  }
  return null;
};
export default Icon;
