import { useSelector, useDispatch } from 'redux/store';
import { useEffect } from 'react';
import { analyticsAsync } from 'redux/reducers/analyticsSlice';
import Loading from 'components/elements/common/Loading';
import { filterType } from 'utility/constants/general';

const AnalyticsTable = () => {
  const dispatch = useDispatch();
  const analyticData = useSelector((state) => state.analytics);

  const { dateRange, datePreset } = useSelector((state) => state.dashboard);

  useEffect(() => {
    if (analyticData.status !== 'fetching') {
      dispatch(analyticsAsync());
      console.log('analyticsAsync');
    }
  }, [datePreset, dateRange, dispatch]);

  if(analyticData.status==='fetching'){
    return(<Loading message="Fetching Analytic Report" />)
  }else if(analyticData.status==='error'){
    return(<div>Error Message</div>);
  }else if(analyticData.status==='success'){
    return(
      <table className="w-full table-auto my-[10px]">
      <thead>
        <tr className="[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-extrabold [&>*]:py-[12px] [&>*]:px-[20px] [&>*]:whitespace-nowrap">
          <td className="bg-primary rounded-tl-[10px]">Day</td>
          {Object.entries(filterType).map((item,i)=>{
            if((analyticData.events as any)[item[0]]){
              return(
                <td key={i} className="bg-primary">{item[1]}</td>
              );
            }
          })}
          {/* {analyticData.PageView ? <td className="bg-primary">Page View</td> : null}
          {analyticData.AddToCart ? <td className="bg-primary">Add to Cart</td> : null}
          {analyticData.InitiateCheckout ? <td className="bg-primary">Initiate Checkout</td> : null}
          {analyticData.AddPaymentInfo ? <td className="bg-primary">Payment Info</td> : null}
          {analyticData.Purchase ? <td className="bg-primary">Purchase</td> : null} */}
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

          {analyticData.events.PageView ? (
            <td>{analyticData.analyticReport.result_total_events.total_page_view.toLocaleString("en-US")}</td>
          ) : null}
          {analyticData.events.AddToCart ? (
            <td>{analyticData.analyticReport.result_total_events.total_add_to_cart.toLocaleString("en-US")}</td>
          ) : null}
          {analyticData.events.InitiateCheckout ? (
            <td>{analyticData.analyticReport.result_total_events.total_intitate_checkout.toLocaleString("en-US")}</td>
          ) : null}
          {analyticData.events.AddPaymentInfo ? (
            <td>{analyticData.analyticReport.result_total_events.total_add_payment_info.toLocaleString("en-US")}</td>
          ) : null}
          {analyticData.events.Purchase ? (
            <td>{analyticData.analyticReport.result_total_events.total_purchases.toLocaleString("en-US")}</td>
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
              {analyticData.events.PageView ? <td>{item.count_page_view.toLocaleString("en-US")}</td> : null}
              {analyticData.events.AddToCart ? <td>{item.count_add_to_cart.toLocaleString("en-US")}</td> : null}
              {analyticData.events.InitiateCheckout ? <td>{item.count_intitate_checkout.toLocaleString("en-US")}</td> : null}
              {analyticData.events.AddPaymentInfo ? <td>{item.count_add_payment_info.toLocaleString("en-US")}</td> : null}
              {analyticData.events.Purchase ? <td>{item.count_purchase.toLocaleString("en-US")}</td> : null}
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
