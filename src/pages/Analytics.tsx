import AnalyticsTable from 'components/analytics/analyticsTable';
import ColumnSelectorMenu from 'components/analytics/columnSelectorMenu';
import { ComponentWrapper } from 'components/elements/common';
import { useSelector } from 'redux/store';
import { csv } from 'utility/typeDefinitions/componentTypes';
import { ExportToCsv } from 'export-to-csv';

const Analytics = () => {
  const csv = [] as Array<object>;
  const header=[] as Array<string>;
  const analyticData = useSelector((state) => state.analytics);
  const { dateRange, datePreset } = useSelector((state) => state.dashboard);

  header.push('Dates');

  if (analyticData.PageView) {
    header.push('Page View');
  }

  if (analyticData.AddToCart) {
    header.push('Add To Cart');
  }

  if (analyticData.InitiateCheckout) {
    header.push('Initiate Checkout');
  }

  if (analyticData.AddPaymentInfo) {
    header.push('Payment Info');
  }

  if (analyticData.Purchase) {
    header.push('Purchase');
  }


  analyticData.analyticReport.bydate.map(
    ({
      count_add_payment_info,
      count_add_to_cart,
      count_intitate_checkout,
      count_page_view,
      count_purchase,
      date
    }) => {
      const obj = {} as csv;
      obj['date'] = date;

      if (analyticData.PageView) {
        obj['count_page_view'] = count_page_view;
      }

      if (analyticData.AddToCart) {
        obj['count_add_to_cart'] = count_add_to_cart;
      }

      if (analyticData.InitiateCheckout) {
        obj['count_intitate_checkout'] = count_intitate_checkout;
      }

      if (analyticData.AddPaymentInfo) {
        obj['count_add_payment_info'] = count_add_payment_info;
      }

      if (analyticData.Purchase) {
        obj['count_purchase'] = count_purchase;
      }

      csv.push(obj);
    }
  );


  const options = { 
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true, 
    showTitle: true,
    title: `Report from ${(dateRange[0]).format('MMM-DD-YYYY')} to ${(dateRange[1]).format('MMM-DD-YYYY')}`,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: false,
    headers: header 
  };

  const csvExporter = new ExportToCsv(options);
  

  return (
    <ComponentWrapper className="text-light mt-[40px]">
      <div className=" flex flex-row justify-between align-middle">
        <ColumnSelectorMenu />
        <button onClick={()=>{csvExporter.generateCsv(csv);}} className=" bg-success px-2 py-1 rounded-md font-semibold">Export Csv</button>
      </div>
      <AnalyticsTable />
    </ComponentWrapper>
  );
};

export default Analytics;
