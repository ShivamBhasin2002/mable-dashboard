import {
  DataQualityCard,
  WarningCenterCard,
  EventsCard,
  PageSpeedCard,
  EventsPerDayCard,
  DataContainedPerEventCard
} from 'components/dataQuality/Cards/dashboard';
import { EventsDataBarChart } from 'components/dataQuality/Graphs';

const Dashboard = () => {
  return (
    <main className="flex-grow">
      <section className="flex flex-row justify-evenly gap-[30px] flex-wrap mt-[40px]">
        <div className="flex flex-col gap-[40px] xl:flex-grow-[1]">
          <div>
            <DataQualityCard />
          </div>
          <div className="flex flex-row flex-wrap gap-[30px]">
            <PageSpeedCard />
            <EventsCard />
          </div>
          <DataContainedPerEventCard />
        </div>
        <div className="flex flex-row flex-wrap 2xl:flex-col 2xl:flex-grow-[0.5] gap-[30px]">
          <WarningCenterCard />
          <EventsDataBarChart />
          <EventsPerDayCard />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
