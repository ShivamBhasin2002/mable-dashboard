import AnalyticsTable from 'components/analytics/analyticsTable';
import ColumnSelectorMenu from 'components/analytics/columnSelectorMenu';
import { ComponentWrapper } from 'components/elements/common';
import { useSelector } from 'redux/store';
import { csv } from 'utility/typeDefinitions/componentTypes';
import { ExportToCsv } from 'export-to-csv';
import moment from 'moment';

const Analytics = () => {
  const csv = [] as Array<object>;
  const header=[] as Array<string>;
  const analyticData = useSelector((state) => state.analytics);
  const { dateRange } = useSelector((state) => state.dates);

  header.push('Day');
  header.push('Dates');

  if (analyticData.events.PageView) {
    header.push('Page View');
  }

  if (analyticData.events.AddToCart) {
    header.push('Add To Cart');
  }

  if (analyticData.events.InitiateCheckout) {
    header.push('Initiate Checkout');
  }

  if (analyticData.events.AddPaymentInfo) {
    header.push('Payment Info');
  }

  if (analyticData.events.Purchase) {
    header.push('Purchase');
  }

  analyticData.analyticReport.map(
    ({
      total_count_add_payment_info,
      total_count_add_to_cart,
      total_count_intitate_checkout,
      total_count_page_view,
      total_count_purchase,
      date
    }) => {
      const obj = {} as csv;
      obj['day'] = moment(date).format('ddd');
      obj['date'] = date;

      if (analyticData.events.PageView) {
        obj['count_page_view'] = total_count_page_view;
      }

      if (analyticData.events.AddToCart) {
        obj['count_add_to_cart'] = total_count_add_to_cart;
      }

      if (analyticData.events.InitiateCheckout) {
        obj['count_intitate_checkout'] = total_count_intitate_checkout;
      }

      if (analyticData.events.AddPaymentInfo) {
        obj['count_add_payment_info'] = total_count_add_payment_info;
      }

      if (analyticData.events.Purchase) {
        obj['count_purchase'] = total_count_purchase;
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
  ;

  const csvExporter = new ExportToCsv(options);
  

  return (
    <ComponentWrapper className="text-light mt-[40px]">
      <div className=" flex flex-row justify-between align-middle">
        <ColumnSelectorMenu />
        <button onClick={()=>{csvExporter.generateCsv(csv);}} className=" !border-lines/[0.20]  h-[30px] px-2 rounded-md font-medium">Export Csv</button>
      </div>
      <AnalyticsTable />
    </ComponentWrapper>
  );
};

export default Analytics;
