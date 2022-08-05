import React from 'react';

import { RiBarChart2Line, RiLock2Fill } from 'react-icons/ri';
import { MdOutlineDashboard, MdMail } from 'react-icons/md';
import { FiSettings, FiTarget, FiLogOut } from 'react-icons/fi';
import { FaRegCopyright } from 'react-icons/fa';
import {
  AiOutlineBell,
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiOutlineWarning
} from 'react-icons/ai';
import { BsBarChartLine, BsBorderWidth } from 'react-icons/bs';
import { HiOutlineSpeakerphone } from 'react-icons/hi';
import { TbReportMoney } from 'react-icons/tb';
import { BiRefresh, BiDoughnutChart } from 'react-icons/bi';

interface iconProps {
  icon?: string;
  size?: string;
}

const Icon: React.FC<iconProps> = ({ icon, size }) => {
  switch (icon) {
    case 'alert':
      return <AiOutlineWarning size={size} />;
    case 'bar-chart':
      return <RiBarChart2Line size={size} />;
    case 'dashboard':
      return <MdOutlineDashboard size={size} />;
    case 'settings':
      return <FiSettings size={size} />;
    case 'target':
      return <FiTarget size={size} />;
    case 'bell':
      return <AiOutlineBell size={size} />;
    case 'bar-chart-line':
      return <BsBarChartLine size={size} />;
    case 'speakerphone':
      return <HiOutlineSpeakerphone size={size} />;
    case 'report-money':
      return <TbReportMoney size={size} />;
    case 'refresh':
      return <BiRefresh size={size} />;
    case 'order':
      return <BsBorderWidth size={size} />;
    case 'eventQuality':
      return <BiDoughnutChart size={size} />;
    case 'logout':
      return <FiLogOut size={size} />;
    case 'dropdown':
      return <AiFillCaretDown size={size} />;
    case 'next':
      return <AiOutlineArrowRight size={size} />;
    case 'email':
      return <MdMail size={size} />;
    case 'password':
      return <RiLock2Fill size={size} />;
    case 'copyright':
      return <FaRegCopyright size={size} />;
  }
  return null;
};
export default Icon;
