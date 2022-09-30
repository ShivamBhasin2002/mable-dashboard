import moment from 'moment';
import { Loading } from 'components/common';
import { useSelector, useDispatch } from 'redux/store';
import { useEffect } from 'react';
import { analyticsAsync } from 'redux/reducers/analyticsSlice';
import { filterType } from 'utility/constants/general';
import { SelectedEventsType } from 'utility/typeDefinitions/reduxTypes';

const AnalyticsTable = () => {
  const dispatch = useDispatch();

  const analyticData = useSelector((state) => state.analytics);
  const { dateRange, datePreset } = useSelector((state) => state.dates);

  const totalEvents = analyticData.analyticReport.total_events;
  const byDate = analyticData.analyticReport.by_date;
  const selectedEvents = analyticData.selected_events;

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
              if (selectedEvents[item[0] as keyof SelectedEventsType]) {
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
          <tr
            className={`[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px]
                }`}
          >
            <td>
              {dateRange[0].format('YYYY-MM-DD')} to {dateRange[1].format('YYYY-MM-DD')}
            </td>
            {selectedEvents.PageView ? (
              <td>{totalEvents.page_view.toLocaleString('en-US')}</td>
            ) : null}
            {selectedEvents.AddToCart ? (
              <td>{totalEvents.add_to_cart.toLocaleString('en-US')}</td>
            ) : null}
            {selectedEvents.InitiateCheckout ? (
              <td>{totalEvents.intitate_checkout.toLocaleString('en-US')}</td>
            ) : null}
            {selectedEvents.AddPaymentInfo ? (
              <td>{totalEvents.add_payment_info.toLocaleString('en-US')}</td>
            ) : null}
            {selectedEvents.Purchase ? (
              <td>{totalEvents.purchase.toLocaleString('en-US')}</td>
            ) : null}
          </tr>
          {Object.values(byDate).map((item, i) => {
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
                {analyticData.selected_events.PageView ? (
                  <td>{item.page_view.toLocaleString('en-US')}</td>
                ) : null}
                {analyticData.selected_events.AddToCart ? (
                  <td>{item.add_to_cart.toLocaleString('en-US')}</td>
                ) : null}
                {analyticData.selected_events.InitiateCheckout ? (
                  <td>{item.intitate_checkout.toLocaleString('en-US')}</td>
                ) : null}
                {analyticData.selected_events.AddPaymentInfo ? (
                  <td>{item.add_payment_info.toLocaleString('en-US')}</td>
                ) : null}
                {analyticData.selected_events.Purchase ? (
                  <td>{item.purchase.toLocaleString('en-US')}</td>
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
