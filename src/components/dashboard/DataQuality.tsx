import ComponentWrapper from 'components/ComponentWrapper';
import QualityCombined from 'components/elements/quality/QualityCombined';
import LineChart from 'components/elements/quality/LineChart';
import OrderComposition from 'components/elements/quality/OrderComposition';
import ViewFullReport from 'components/elements/ViewFullReport';

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
