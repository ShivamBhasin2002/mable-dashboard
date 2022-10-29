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
    <main>
      <section className="flex flex-row justify-evenly gap-[30px] flex-wrap hd:flex-nowrap h-full">
        <div className="flex flex-col justify-between flex-grow [&>*]:flex-1 gap-5">
          <DataQualityCard />
          <div className="flex flex-row flex-wrap xl:flex-nowrap gap-[30px] !flex-grow-0">
            <PageSpeedCard />
            <EventsCard />
          </div>
          <DataContainedPerEventCard />
        </div>
        <div className="flex flex-col flex-grow hd:max-w-[600px] justify-between gap-4">
          <WarningCenterCard />
          <EventsDataBarChart />
          <EventsPerDayCard />
        </div>
      </section>
    </main>
  );
};

export default Dashboard;
