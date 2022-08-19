import ComponentWrapper from 'components/ComponentWrapper';
import ViewFullReport from 'components/elements/ViewFullReport';
import SelectorMenu from 'components/elements/event/SeleectorMenu';
import Metrics from 'components/elements/event/Metrics';
import DoughnutChart from 'components/elements/event/DoughnutChart';
import ParameterComposition from 'components/elements/event/ParameterComposition';
import BarChart from 'components/elements/event/BarChart';

const DataContainerPerEvent = () => {
  return (
    <ComponentWrapper
      title="Data Contained Per Event"
      width={560}
      height={335}
      nextComponent={
        <div className="flex-grow px-4 flex justify-between">
          <SelectorMenu />
          <ViewFullReport screen="Event Quality" />
        </div>
      }
    >
      <div className="flex flex-row flex-wrap  justify-center gap-[20px]">
        <div>
          <BarChart width={420} height={80} />
        </div>
        <div className="flex flex-col w-[350]">
          <div className="flex gap-[20px]">
            <div className="w-[170px] ">
              <DoughnutChart />
            </div>
            <ParameterComposition />
          </div>
          <Metrics />
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataContainerPerEvent;
