// importing the Dashboard components
import {
  DataQuality,
  WarningCenter,
  FunnelAnalysis,
  PageSpeed,
  Events,
  EventsPerDay,
  DataContainedPerEvent
} from 'components/dashboard';

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
