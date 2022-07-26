import React from "react";

import { RiAlertFill, RiBarChart2Line } from "react-icons/ri";
import { MdOutlineDashboard } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { VscFiles } from "react-icons/vsc";
import { FiSettings, FiTarget } from "react-icons/fi";
import { AiOutlineBell } from "react-icons/ai";
import { BsBarChartLine } from "react-icons/bs";
import { HiOutlineSpeakerphone } from "react-icons/hi";
import { TbReportMoney } from "react-icons/tb";
import { BiRefresh } from "react-icons/bi";

interface iconProps {
  icon?: string;
}

const Icon: React.FC<iconProps> = ({ icon }) => {
  switch (icon) {
    case "alert":
      return <RiAlertFill />;
    case "bar-chart":
      return <RiBarChart2Line />;
    case "dashboard":
      return <MdOutlineDashboard />;
    case "people":
      return <IoIosPeople />;
    case "files":
      return <VscFiles />;
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
  }
  return null;
};
export default Icon;
