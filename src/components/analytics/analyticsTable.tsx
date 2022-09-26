import { useSelector, useDispatch } from 'redux/store';
import { useEffect } from 'react';
import { analyticsAsync } from 'redux/reducers/analyticsSlice';
import Loading from 'components/elements/common/Loading';

const AnalyticsTable = () => {
  const dispatch = useDispatch();
  const analyticData = useSelector((state) => state.analytics);

  const { dateRange, datePreset } = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (analyticData.status === 'idle') {
      dispatch(analyticsAsync());
    }
  }, [datePreset, dateRange, dispatch]);

  analyticData.analyticReport.bydate.map((item) => {
    console.log(item.date);
  });

  if(analyticData.status==='fetching'){
    return(<Loading message="Fetching Shops" />)
  }else if(analyticData.status==='error'){
    return(<div>Error Message</div>);
  }else if(analyticData.status==='success'){
    return(
      <table className="w-full table-auto my-[10px]">
      <thead>
        <tr className="[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-extrabold [&>*]:py-[12px] [&>*]:px-[20px] [&>*]:whitespace-nowrap">
          <td className="bg-primary rounded-tl-[10px]">Day</td>
          {analyticData.PageView ? <td className="bg-primary">Page View</td> : null}
          {analyticData.AddToCart ? <td className="bg-primary">Add to Cart</td> : null}
          {analyticData.InitiateCheckout ? <td className="bg-primary">Initiate Checkout</td> : null}
          {analyticData.AddPaymentInfo ? <td className="bg-primary">Payment Info</td> : null}
          {analyticData.Purchase ? <td className="bg-primary">Purchase</td> : null}
        </tr>
      </thead>
      <tbody className="last-of:rounded-b-[10px]">
        <tr
          className={`[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px]`}
        >
          {datePreset ? (
            <td>
              {(dateRange[0] as any).format('MMM-DD-YYYY')} to{' '}
              {(dateRange[1] as any).format('MMM-DD-YYYY')}
            </td>
          ) : (
            <td>
              {(dateRange[0] as any).format('MMM-DD-YYYY')} to{' '}
              {(dateRange[1] as any).format('MMM-DD-YYYY')}
            </td>
          )}

          {analyticData.PageView ? (
            <td>{analyticData.analyticReport.result_total_events.total_page_view}</td>
          ) : null}
          {analyticData.AddToCart ? (
            <td>{analyticData.analyticReport.result_total_events.total_add_to_cart}</td>
          ) : null}
          {analyticData.InitiateCheckout ? (
            <td>{analyticData.analyticReport.result_total_events.total_intitate_checkout}</td>
          ) : null}
          {analyticData.AddPaymentInfo ? (
            <td>{analyticData.analyticReport.result_total_events.total_add_payment_info}</td>
          ) : null}
          {analyticData.Purchase ? (
            <td>{analyticData.analyticReport.result_total_events.total_purchases}</td>
          ) : null}
        </tr>
        {Object.values(analyticData.analyticReport.bydate).map((item, i) => {
          return (
            <tr
              key={i}
              className={`[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px] ${
                !(i & 1) && 'bg-tableStrips/[0.5]'
              }`}
            >
              <td>{item.date}</td>
              {analyticData.PageView ? <td>{item.count_page_view}</td> : null}
              {analyticData.AddToCart ? <td>{item.count_add_to_cart}</td> : null}
              {analyticData.InitiateCheckout ? <td>{item.count_intitate_checkout}</td> : null}
              {analyticData.AddPaymentInfo ? <td>{item.count_add_payment_info}</td> : null}
              {analyticData.Purchase ? <td>{item.count_purchase}</td> : null}
            </tr>
          );
        })}
      </tbody>
    </table>
    );
  }else{
    return(<div>Idle</div>);
  }
};

export default AnalyticsTable;
