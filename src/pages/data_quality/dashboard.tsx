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
      <section className="flex flex-row justify-evenly gap-[30px] flex-wrap hd:flex-nowrap mt-[40px]">
        <div className="flex flex-col gap-[40px] flex-grow">
          <div>
            <DataQualityCard />
          </div>
          <div className="flex flex-row flex-wrap gap-[30px]">
            <PageSpeedCard />
            <EventsCard />
          </div>
          <DataContainedPerEventCard />
        </div>
        <div className="flex flex-row flex-wrap hd:flex-col flex-grow hd:max-w-[600px] gap-[30px]">
          <div className="flex flex-grow flex-wrap gap-[30px]">
            <WarningCenterCard />
            <EventsDataBarChart />
          </div>
          <EventsPerDayCard />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
