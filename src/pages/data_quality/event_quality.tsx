import {
  AttributionParametersCard,
  EventParametersCard,
  EventQualityCard
} from '@components/dataQuality/Cards/eventQuality';

const EventQuality = () => (
  <div className="flex flex-col justify-evenly gap-4">
    <EventQualityCard />
    <div className="flex gap-[16px] flex-wrap">
      <AttributionParametersCard />
      <EventParametersCard />
    </div>
  </div>
);

export default EventQuality;
