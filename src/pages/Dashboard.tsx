// importing the Dashboard components
import DashboardHeader from "components/dashboard/Header";
import DataQuality from "components/dashboard/DataQuality";
import WarningCenter from "components/dashboard/WarningCenter";
import FunnelAnalysis from "components/dashboard/FunnelAnalysis";
import PageSpeed from "components/dashboard/PageSpeed";
import Events from "components/dashboard/Events";
import EventsPerDay from "components/dashboard/EventsPerDay";
import DataContainedPerEvent from "components/dashboard/DataContainedPerEvent";

// importing the data for the Dashboard
import data from "utility/data.json";
const { dashboard } = data;
const {
  usersOnline,
  dataQuality,
  warningCenter,
  pageSpeed,
  events,
  funnelAnalysis,
  eventsPerDay,
  dataContainedPerEvent,
} = dashboard;

const Dashboard = () => {
  return (
    <div className="w-full h-min-screen bg-background flex flex-col px-[30px] py-[30px]">
      <DashboardHeader usersOnline={usersOnline} />
      <main className="flex flex-row gap-[30px] flex-grow flex-wrap mt-[40px]">
        <div className="flex flex-col w-[920px] gap-[40px] ">
          <DataQuality data={dataQuality} />
          <div className="flex flex-row gap-[30px] flex-wrap">
            <PageSpeed data={pageSpeed} />
            <Events data={events} />
          </div>
            <DataContainedPerEvent data={dataContainedPerEvent} />
        </div>
        <div className="flex flex-col flex-grow gap-[30px]">
          <WarningCenter data={warningCenter} />
          <FunnelAnalysis data={funnelAnalysis} />
          <EventsPerDay data={eventsPerDay} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
