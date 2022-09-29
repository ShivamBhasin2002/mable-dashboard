import { useSelector, useDispatch } from 'redux/store';
import { useEffect } from 'react';
import moment from 'moment';
import { analyticsAsync } from 'redux/reducers/analyticsSlice';
import Loading from 'components/elements/common/Loading';
import { filterType } from 'utility/constants/general';

const AnalyticsTable = () => {
  const dispatch = useDispatch();
  const analyticData = useSelector((state) => state.analytics);

  const { dateRange, datePreset } = useSelector((state) => state.dates);

  useEffect(() => {
    if (analyticData.status !== 'fetching') {
      dispatch(analyticsAsync());
    }
  }, [datePreset, dateRange, dispatch]);

  if (analyticData.status === 'fetching') {
    return <Loading message="Fetching Analytic Report" />;
  } else if (analyticData.status === 'error') {
    return <div>oops ! some error occured</div>;
  } else if (analyticData.status === 'success') {
    return (
      <table className="w-full table-auto my-[10px]">
        <thead>
          <tr className="[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-extrabold [&>*]:py-[12px] [&>*]:px-[20px] [&>*]:whitespace-nowrap">
            <td className="bg-primary rounded-tl-[10px]">Day</td>
            {Object.entries(filterType).map((item, i) => {
              if ((analyticData.events as any)[item[0]]) {
                return (
                  <td key={i} className="bg-primary">
                    {item[1]}
                  </td>
                );
              }
            })}
          </tr>
        </thead>
        <tbody className="last-of:rounded-b-[10px]">
          {Object.values(analyticData.analyticReport).map((item, i) => {
            return (
              <tr
                key={i}
                className={`[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px] ${
                  !(i & 1) && 'bg-tableStrips/[0.5]'
                }`}
              >
                <td>
                  <span className="opacity-50 text-xs">{moment(item.date).format('dddd')}</span>
                  <br />
                  {item.date}
                </td>
                {analyticData.events.PageView ? (
                  <td>{item.total_count_page_view.toLocaleString('en-US')}</td>
                ) : null}
                {analyticData.events.AddToCart ? (
                  <td>{item.total_count_add_to_cart.toLocaleString('en-US')}</td>
                ) : null}
                {analyticData.events.InitiateCheckout ? (
                  <td>{item.total_count_intitate_checkout.toLocaleString('en-US')}</td>
                ) : null}
                {analyticData.events.AddPaymentInfo ? (
                  <td>{item.total_count_add_payment_info.toLocaleString('en-US')}</td>
                ) : null}
                {analyticData.events.Purchase ? (
                  <td>{item.total_count_purchase.toLocaleString('en-US')}</td>
                ) : null}
              </tr>
            );
          })}
        </tbody>
      </table>
    );
  } else {
    return <div>Idle</div>;
  }
};

export default AnalyticsTable;
