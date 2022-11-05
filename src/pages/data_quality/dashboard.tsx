import {
  DataQualityCard,
  WarningCenterCard,
  EventsCard,
  PageSpeedCard,
  EventsPerDayCard,
  DataContainedPerEventCard
} from 'components/dataQuality/Cards/dashboard';
import { EventsDataBarChart } from 'components/dataQuality/Graphs';

const Dashboard = () => (
  <section className="flex flex-row flex-wrap h-full gap-5 justify-evenly">
    <div className="flex flex-col justify-start  w-60 gap-3">
      <DataQualityCard />
      <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2 !flex-grow-0">
        <PageSpeedCard />
        <EventsCard />
      </div>
      <DataContainedPerEventCard />
    </div>
    <div className="flex flex-col flex-grow w-35 justify-between gap-4 ">
      <WarningCenterCard />
      <EventsDataBarChart />
      <EventsPerDayCard />
    </div>
  </section>
);

export default Dashboard;
