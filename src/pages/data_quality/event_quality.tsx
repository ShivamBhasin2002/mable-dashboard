import {
  AttributionParametersCard,
  EventParametersCard,
  EventQualityCard,
} from "@components/dataQuality/Cards/eventQuality";

const EventQuality = () => (
    <div className="flex flex-col h-full  justify-evenly gap-4">
      <EventQualityCard />
      <div className="flex gap-[40px] flex-wrap">
        <AttributionParametersCard />
        <EventParametersCard />
      </div>
    </div>
);

export default EventQuality;
