import { Layout } from "@components/common";
import {
  AttributionParametersCard,
  EventParametersCard,
  EventQualityCard,
} from "@components/dataQuality/Cards/eventQuality";

const EventQuality = () => (
  <Layout>
    <div className="flex flex-col h-full  justify-evenly gap-4">
      <EventQualityCard />
      <div className="flex gap-[40px] flex-wrap">
        <AttributionParametersCard />
        <EventParametersCard />
      </div>
    </div>
  </Layout>
);

export default EventQuality;
