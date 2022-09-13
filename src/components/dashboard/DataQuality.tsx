import { ComponentWrapper, ViewFullReport } from 'components/elements/common';
import { QualityCombined, LineChart, OrderComposition } from 'components/elements/quality';
import { screenType } from 'utility/constants/general';

const DataQuality = () => {
  return (
    <ComponentWrapper
      title="Data Quality"
      nextComponent={<ViewFullReport screen={screenType.orderAnalysis} />}
    >
      <div className="flex flex-row justify-evenly flex-wrap gap-8">
        <div className="flex flex-col gap-4 justify-evenly">
          <QualityCombined />
          <OrderComposition />
        </div>
        <div className="flex-grow box-border">
          <LineChart height={250} />
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataQuality;
