import AnalyticsTable from 'components/dataQuality/analytics/analyticsTable';
import ColumnSelectorMenu from 'components/dataQuality/analytics/columnSelectorMenu';
import { ComponentWrapper } from 'components/common';

import { ExportToCsv } from 'export-to-csv';
import { generateCSV } from 'components/dataQuality/analytics/csvExport';

const Analytics = () => {
  const { options, csvData } = generateCSV();
  const csvExporter = new ExportToCsv(options);

  return (
    <ComponentWrapper className="text-light ">
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
