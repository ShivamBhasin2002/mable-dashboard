import {
  AttributionParametersCard,
  EventParametersCard,
  EventQualityCard
} from 'components/dataQuality/Cards/eventQuality';

const EventQuality = () => {
  return (
    <div className="flex flex-col flex-grow mt-[40px] gap-[40px]">
      <EventQualityCard />
      <div className="flex flex-grow gap-[40px] flex-wrap">
        <AttributionParametersCard />
        <EventParametersCard />
      </div>
    </div>
  );
};

export default EventQuality;
