import {
  DataQuality,
  WarningCenter,
  FunnelAnalysis,
  PageSpeed,
  Events,
  EventsPerDay,
  DataContainedPerEvent
} from 'components/dataQuality/Cards/dashboard';

const Dashboard = () => {
  return (
    <main className="flex-grow">
      <section className="flex flex-row justify-evenly gap-[30px] flex-wrap mt-[40px]">
        <div className="flex flex-col gap-[40px] xl:flex-grow-[1]">
          <div>
            <DataQuality />
          </div>
          <div className="flex flex-row flex-wrap gap-[30px]">
            <PageSpeed />
            <Events />
          </div>
          <DataContainedPerEvent />
        </div>
        <div className="flex flex-row flex-wrap 2xl:flex-col 2xl:flex-grow-[0.5] gap-[30px]">
          <WarningCenter />
          <FunnelAnalysis />
          <EventsPerDay />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
