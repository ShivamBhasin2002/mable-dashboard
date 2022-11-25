import AnalyticsTable from '@components/dataQuality/analytics/analyticsTable';
import ColumnSelectorMenu from '@components/dataQuality/analytics/columnSelectorMenu';
import { ComponentWrapper } from '@components/common';
import { ExportToCsv } from 'export-to-csv';
import { GenerateCSV } from '@components/dataQuality/analytics/csvExport';
import { useToast, Button } from '@chakra-ui/react';
import { useSelector } from '@redux/store';

const Analytics = () => {
  const { options, csvData } = GenerateCSV();
  const csvExporter = new ExportToCsv(options);
  const { status } = useSelector((state) => state.analytics);
  const toast = useToast();

  const DoNotGenerateCsv = () => {
    toast({
      title: 'Table is not fetched ',
      status: 'error',
      isClosable: true,
      position: 'top-right'
    });
  };

  const CsvExport = () => {
    <Button
      className="w-[8rem] mb-2"
      type="submit"
      colorScheme="blue"
      onClick={() => {
        if (status === 'error') {
          DoNotGenerateCsv();
        } else {
          csvExporter.generateCsv(csvData);
        }
      }}
    >
      Export Csv
    </Button>;
  };

  return (
    <ComponentWrapper className="text-light ">
      <div className=" flex flex-row justify-between align-middle">
        <ColumnSelectorMenu />
        <button
          onClick={() => {
            CsvExport();
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
