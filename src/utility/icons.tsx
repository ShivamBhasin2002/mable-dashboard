import React from "react";

import {  RiBarChart2Line } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { FiSettings, FiTarget, FiLogOut } from "react-icons/fi";
import {
  AiOutlineBell,
  AiFillCaretDown,
  AiOutlineArrowRight,
  AiOutlineWarning,
} from "react-icons/ai";
import { BsBarChartLine, BsBorderWidth } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbReportMoney } from "react-icons/tb";
import { BiRefresh, BiDoughnutChart } from "react-icons/bi"; 


interface iconProps {
  icon?: string;
}

const Icon: React.FC<iconProps> = ({ icon }) => {
  switch (icon) {
    case "alert":
      return <AiOutlineWarning />;
    case "bar-chart":
      return <RiBarChart2Line />;
    case "dashboard":
      return <MdOutlineDashboard />;
    case "settings":
      return <FiSettings />;
    case "target":
      return <FiTarget />;
    case "bell":
      return <AiOutlineBell />;
    case "bar-chart-line":
      return <BsBarChartLine />;
    case "speakerphone":
      return <HiOutlineSpeakerphone />;
    case "report-money":
      return <TbReportMoney />;
    case "refresh":
      return <BiRefresh />;
    case "order":
      return <BsBorderWidth />;
    case "eventQuality":
      return <BiDoughnutChart />;
    case "logout":
      return <FiLogOut />;
    case "dropdown":
      return <AiFillCaretDown />;
    case "next":
      return <AiOutlineArrowRight />;
  }
  return null;
};
export default Icon;
