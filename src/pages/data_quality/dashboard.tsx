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
  <section className="flex flex-col flex-wrap h-full gap-3 justify-between ">
    <div className="flex w-full gap-3 justify-between flex-row flex-grow-[1] min-w-[43.75rem] ">
      <div className="flex flex-col justify-between gap-3 w-full lg:w-60 min-w-[6.25rem] flex-grow-[1] flex-shrink-[1]">
        <DataQualityCard />
        <div className="flex flex-row flex-wrap xl:flex-nowrap gap-2 !flex-grow-0">
          <PageSpeedCard />
          <EventsCard />
        </div>
      </div>
      <div className="flex flex-col flex-grow w-full lg:w-35 justify-between gap-3 min-w-[6.25rem]">
        <WarningCenterCard />
        <EventsDataBarChart />
      </div>
    </div>
    <div className="flex  gap-3  min-h-[13.75rem]  flex-grow-[1] max-h-[400px] flex-shrink-[1]">
      <div className="flex w-60 h-full flex-grow">
        <DataContainedPerEventCard />
      </div>
      <div className="flex  w-35 h-full flex-grow">
        <EventsPerDayCard />
      </div>
    </div>
  </section>
);

export default Dashboard;
