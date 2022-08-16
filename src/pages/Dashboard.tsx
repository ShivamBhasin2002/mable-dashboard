// importing the Dashboard components
import DataQuality from 'components/dashboard/DataQuality';
import WarningCenter from 'components/dashboard/WarningCenter';
import FunnelAnalysis from 'components/dashboard/FunnelAnalysis';
import PageSpeed from 'components/dashboard/PageSpeed';
import Events from 'components/dashboard/Events';
import EventsPerDay from 'components/dashboard/EventsPerDay';
import DataContainedPerEvent from 'components/dashboard/DataContainedPerEvent';

const Dashboard = () => {
  return (
    <main className="flex-grow">
      <section className="flex flex-row justify-evenly gap-[30px] flex-wrap mt-[40px]">
        <div className="flex flex-col w-[920px] gap-[40px] ">
          <div>
            <DataQuality />
          </div>
          <div className="flex flex-row gap-[30px] flex-wrap">
            <PageSpeed />
            <Events />
          </div>
          <DataContainedPerEvent />
        </div>
        <div className="flex flex-col gap-[30px]">
          <WarningCenter />
          <FunnelAnalysis />
          <EventsPerDay />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
