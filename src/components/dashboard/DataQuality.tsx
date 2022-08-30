import { ComponentWrapper, ViewFullReport } from 'components/elements/common';
import { QualityCombined, LineChart, OrderComposition } from 'components/elements/quality';

const DataQuality = () => {
  return (
    <ComponentWrapper
      height={400}
      width={920}
      title="Data Quality"
      nextComponent={<ViewFullReport screen="Order Analysis" />}
    >
      <div className="flex flex-row justify-evenly flex-wrap">
        <div className="flex flex-col gap-4 w-[225px] justify-evenly">
          <QualityCombined />
          <OrderComposition />
        </div>
        <LineChart width={560} height={250} />
      </div>
    </ComponentWrapper>
  );
};
export default DataQuality;
