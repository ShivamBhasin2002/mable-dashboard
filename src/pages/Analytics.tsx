import AnalyticsTable from 'components/analytics/analyticsTable';
import ColumnSelectorMenu from 'components/analytics/columnSelectorMenu';
import { ComponentWrapper } from 'components/elements/common';

import { ExportToCsv } from 'export-to-csv';
import { generateCSV } from 'components/analytics/csvExport';

const Analytics = () => {
  const { options, csvData } = generateCSV();
  const csvExporter = new ExportToCsv(options);

  return (
    <ComponentWrapper className="text-light mt-[40px]">
      <div className=" flex flex-row justify-between align-middle">
        <ColumnSelectorMenu />
        <button
          onClick={() => {
            csvExporter.generateCsv(csvData);
          }}
          className=" !border-lines/[0.20] border-2 h-[30px] px-2 rounded-md font-medium"
        >
          Export Csv
        </button>
      </div>
      <AnalyticsTable />
    </ComponentWrapper>
  );
};

export default Analytics;
