import AnalyticsTable from 'components/analytics/analyticsTable';
import ColumnSelectorMenu from 'components/analytics/columnSelectorMenu';
import { ComponentWrapper } from 'components/elements/common';

const Analytics = () => {
  return (
    <ComponentWrapper className="text-light mt-[40px]">
      <ColumnSelectorMenu />
      <AnalyticsTable />
    </ComponentWrapper>
  );
};

export default Analytics;
