import AnalyticsTable from 'components/analytics/analyticsTable';
import ColumnSelectorMenu from 'components/analytics/columnSelectorMenu';
import { ComponentWrapper } from 'components/elements/common';

const Analytics = () => {
  return (
    <ComponentWrapper className="text-light mt-[40px]">
      <div className=" flex flex-row justify-between align-middle">
      <ColumnSelectorMenu />
      <button className=' bg-success px-2 py-1 rounded-md font-semibold'>Export Csv</button>
      </div>
      <AnalyticsTable />
    </ComponentWrapper>
  );
};

export default Analytics;
