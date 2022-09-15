import { ComponentWrapper, ViewFullReport } from 'components/elements/common';
import {
  SelectorMenu,
  Metrics,
  DoughnutChart,
  ParameterComposition,
  BarChart
} from 'components/elements/event';
import { screenType } from 'utility/constants/general';

const DataContainedPerEvent = () => {
  return (
    <ComponentWrapper
      title="Data Contained Per Event"
      width={560}
      height={335}
      nextComponent={
        <div className="flex-grow px-4 flex justify-between gap-4">
          <SelectorMenu />
          <ViewFullReport screen={screenType.eventQuality} />
        </div>
      }
    >
      <div className="flex flex-row flex-wrap justify-center gap-[20px]">
        <div className="flex-grow">
          <BarChart height={80} />
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
export default DataContainedPerEvent;
