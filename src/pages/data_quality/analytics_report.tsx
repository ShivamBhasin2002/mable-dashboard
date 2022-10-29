import AnalyticsTable from 'components/dataQuality/analytics/analyticsTable';
import ColumnSelectorMenu from 'components/dataQuality/analytics/columnSelectorMenu';
import { ComponentWrapper } from 'components/common';
import { Button } from '@chakra-ui/react';
import { ExportToCsv } from 'export-to-csv';
import { generateCSV } from 'components/dataQuality/analytics/csvExport';
import { useToast } from '@chakra-ui/react';
import { useSelector } from 'redux/store';

const Analytics = () => {
  const { options, csvData } = generateCSV();
  const csvExporter = new ExportToCsv(options);
  const CsvExport = () => {
    return (
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
      </Button>
    );
  };
  const toast = useToast();
  const { status } = useSelector((state) => state.analytics);

  const DoNotGenerateCsv = () => {
    toast({
      title: 'Table is not fetched',
      status: 'error',
      isClosable: true,
      position: 'top-right'
    });
  };

  return (
    <ComponentWrapper
      title="Analytic Report"
      underlined={true}
      className="text-light mt-[40px]"
      nextComponent={CsvExport()}
    >
      <ColumnSelectorMenu />
      <AnalyticsTable />
    </ComponentWrapper>
  );
};

export default Analytics;
