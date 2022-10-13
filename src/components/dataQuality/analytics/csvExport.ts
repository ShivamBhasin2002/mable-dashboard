import { useSelector } from 'redux/store';
import { csv } from 'utility/typeDefinitions/componentPropTypes';
import moment from 'moment';

export const generateCSV = () => {
  const csvData = [] as Array<object>;
  const header = [] as Array<string>;
  const analyticData = useSelector((state) => state.analytics);
  const { dateRange } = useSelector((state) => state.dates);

  const obj = {} as csv;
  obj['day'] = moment(dateRange[0]).format('ddd') + ' to ' + moment(dateRange[1]).format('ddd');
  obj['date'] =
    moment(dateRange[0]).format('YYYY-MM-DD') + ' to ' + moment(dateRange[1]).format('YYYY-MM-DD');

  header.push('Day');
  header.push('Dates');

  if (analyticData.selected_events.PageView) {
    header.push('Page View');
    obj['count_page_view'] = analyticData.analyticReport.total_events.page_view;
  }

  if (analyticData.selected_events.AddToCart) {
    obj['count_add_to_cart'] = analyticData.analyticReport.total_events.add_to_cart;
    header.push('Add To Cart');
  }

  if (analyticData.selected_events.InitiateCheckout) {
    obj['count_intitate_checkout'] = analyticData.analyticReport.total_events.intitate_checkout;
    header.push('Initiate Checkout');
  }

  if (analyticData.selected_events.AddPaymentInfo) {
    obj['count_add_payment_info'] = analyticData.analyticReport.total_events.add_payment_info;
    header.push('Payment Info');
  }

  if (analyticData.selected_events.Purchase) {
    obj['count_purchase'] = analyticData.analyticReport.total_events.purchase;
    header.push('Purchase');
  }

  csvData.push(obj);

  analyticData.analyticReport.by_date.map(
    ({ date, purchase, add_payment_info, add_to_cart, intitate_checkout, page_view }) => {
      const obj = {} as csv;
      obj['day'] = moment(date).format('ddd');
      obj['date'] = date;

      if (analyticData.selected_events.PageView) {
        obj['count_page_view'] = page_view;
      }

      if (analyticData.selected_events.AddToCart) {
        obj['count_add_to_cart'] = add_to_cart;
      }

      if (analyticData.selected_events.InitiateCheckout) {
        obj['count_intitate_checkout'] = intitate_checkout;
      }

      if (analyticData.selected_events.AddPaymentInfo) {
        obj['count_add_payment_info'] = add_payment_info;
      }

      if (analyticData.selected_events.Purchase) {
        obj['count_purchase'] = purchase;
      }

      csvData.push(obj);
    }
  );
  const options = {
    fieldSeparator: ',',
    quoteStrings: '"',
    decimalSeparator: '.',
    showLabels: true,
    showTitle: true,
    title: `Report from ${dateRange[0].format('MMM-DD-YYYY')} to ${dateRange[1].format(
      'MMM-DD-YYYY'
    )}`,
    useTextFile: false,
    useBom: true,
    useKeysAsHeaders: false,
    headers: header
  };

  return { options, csvData };
};
