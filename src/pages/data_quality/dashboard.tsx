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
    <div className="flex w-full gap-3 justify-between flex-col lg:flex-row  flex-grow-[.5] ">
      <div className="flex flex-col justify-between gap-3 w-full lg:w-60 min-w-[6.25rem] flex-grow-[1] flex-shrink-[2]">
        <DataQualityCard />
        <div className="flex flex-col lg:flex-row flex-wrap xl:flex-nowrap gap-2 ">
          <PageSpeedCard />
          <EventsCard />
        </div>
      </div>
      <div className="flex flex-col flex-grow w-full lg:w-35 justify-start gap-3 min-w-[6.25rem]">
        <WarningCenterCard />
        <EventsDataBarChart />
      </div>
    </div>
    <div className="flex flex-col lg:flex-row gap-3  min-h-[13.75rem]  flex-grow h-[13.75rem] max-h-[500px]">
      <div className="flex w-100 lg:w-60  h-full flex-grow-[1]">
        <DataContainedPerEventCard />
      </div>
      <div className="flex w-100 lg:w-35 h-full flex-grow">
        <EventsPerDayCard />
      </div>
    </div>
  </section>
);

export default Dashboard;
