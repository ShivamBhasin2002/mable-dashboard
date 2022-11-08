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
  <section className="flex flex-row flex-wrap h-full gap-3 justify-evenly">
    <div className="flex flex-col justify-between gap-3 w-full lg:w-60">
      <DataQualityCard />
      <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2 !flex-grow-0">
        <PageSpeedCard />
        <EventsCard />
      </div>
      <DataContainedPerEventCard />
    </div>
    <div className="flex flex-col flex-grow w-full lg:w-35 justify-between gap-3 ">
      <WarningCenterCard />
      <EventsDataBarChart />
      <EventsPerDayCard />
    </div>
  </section>
);

export default Dashboard;
