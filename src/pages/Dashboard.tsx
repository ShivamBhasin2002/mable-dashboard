import DashboardHeader from "../components/Dashboard/Header";
import DataQuality from "../components/Dashboard/DataQuality";
import WarningCenter from "../components/Dashboard/WarningCenter";
import List from "../components/Dashboard/EventQuality";

import data from "../data/data.json";
import FunnelAnalysis from "../components/Dashboard/FunnelAnalysis";
import OrderAnalysis from "../components/Dashboard/OrderAnalysis";
import PageSpeed from "../components/Dashboard/PageSpeed";
import Events from "../components/Dashboard/Events";
import EventsPerDay from "../components/Dashboard/EventsPerDay";
const { dashboard } = data;
const {
  usersOnline,
  dataQuality,
  orderAnalysis,
  eventQuality,
  warningCenter,
  pageSpeed,
  events,
  funnelAnalysis,
  eventsPerDay
} = dashboard;

const Dashboard = () => {
  return (
    <div className="w-full h-min-screen bg-background flex flex-col px-[32px] py-[30px]">
      <DashboardHeader usersOnline={usersOnline} />
      <main className="flex flex-row gap-[40px] flex-grow flex-wrap mt-[40px]">
        <div className="flex flex-col w-[920px] gap-[40px] ">
          <DataQuality data={dataQuality} />
          <div className="flex flex-row flex-none">
            <div className="flex flex-col gap-[40px] w-[640px]">
              <OrderAnalysis data={orderAnalysis} />
              <EventsPerDay data={eventsPerDay}/>
            </div>
            <List data={eventQuality} />
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-[30px]">
          <WarningCenter data={warningCenter} />
          <FunnelAnalysis data={funnelAnalysis}/>
          <div className="flex flex-row gap-[25px]">
            <PageSpeed data={pageSpeed}/>
            <Events data={events}/>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
