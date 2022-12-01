import {
  AttributionParametersCard,
  EventParametersCard,
  EventQualityCard
} from 'components/dataQuality/Cards/eventQuality';

const EventQuality = () => (
  <div className="flex flex-col h-full  justify-evenly gap-4">
    <EventQualityCard />
    <div className="flex gap-4 h-full">
      <div className="w-60 h-full">
        <AttributionParametersCard />
      </div>
      <div className="w-40 h-full">
        <EventParametersCard />
      </div>
    </div>
  </div>
);

export default EventQuality;
