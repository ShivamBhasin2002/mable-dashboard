import {
  AttributionParametersCard,
  EventParametersCard,
  EventQualityCard
} from 'components/dataQuality/Cards/eventQuality';

const EventQuality = () => (
  <div className="flex flex-col h-full  justify-evenly gap-2">
    <EventQualityCard />
    <div className="flex gap-2 flex-wrap">
      <AttributionParametersCard />
      <EventParametersCard />
    </div>
  </div>
);

export default EventQuality;
