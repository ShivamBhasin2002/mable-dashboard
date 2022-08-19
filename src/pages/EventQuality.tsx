import ComponentWrapper from 'components/elements/ComponentWrapper';
import BarChart from 'components/elements/event/BarChart';
import DoughnutChart from 'components/elements/event/DoughnutChart';
import Metrics from 'components/elements/event/Metrics';
import ParameterComposition from 'components/elements/event/ParameterComposition';
import SelectorMenu from 'components/elements/event/SeleectorMenu';

const EventQuality = () => {
  return (
    <div className="flex-grow mt-[40px]">
      <ComponentWrapper nextComponent={<SelectorMenu />} height={400}>
        <div className="flex items-center justify-between mr-8">
          <Metrics />
          <div>
            <BarChart width={470} height={150} />
          </div>
          <div className="flex gap-8">
            <div className="w-[250px] ">
              <DoughnutChart />
            </div>
            <ParameterComposition />
          </div>
        </div>
      </ComponentWrapper>
    </div>
  );
};

export default EventQuality;
