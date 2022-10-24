import moment from 'moment';
import { Loading } from 'components/common';
import { useSelector, useDispatch } from 'redux/store';
import { useEffect, useState } from 'react';
import { analyticsAsync } from 'redux/reducers/analytics/reportsSlice';
import { filterType } from 'utility/constants/enums';
import { SelectedEventsType } from 'utility/typeDefinitions/reduxTypes';
import Icon from 'assets/icons';
import { defaultLocale } from 'utility/constants/strings';

const AnalyticsTable = () => {
  const dispatch = useDispatch();

  const analyticData = useSelector((state) => state.analytics);
  const { dateRange, datePreset } = useSelector((state) => state.dates);
  const totalEvents = analyticData.analyticReport.total_events;
  const byDate = analyticData.analyticReport.by_date;
  const selectedEvents = analyticData.selected_events;
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (analyticData.status !== 'fetching') {
      dispatch(analyticsAsync());
    }
  }, [datePreset, dateRange, dispatch]);

  if (analyticData.status === 'fetching') {
    return <Loading message="Fetching Analytic Report" />;
  } else if (analyticData.status === 'error') {
    return (
      <div className="mt-[20px] text-error text-4xl">
        oops ! some error occurred
        <div className="mt-[20px] text-error text-xl p-4 rounded-md bg-background">
          {analyticData.error}
        </div>
      </div>
    );
  } else if (analyticData.status === 'success') {
    return (
      <>
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
                <td>{totalEvents.page_view.toLocaleString(defaultLocale)}</td>
              ) : null}
              {selectedEvents.AddToCart ? (
                <td>{totalEvents.add_to_cart.toLocaleString(defaultLocale)}</td>
              ) : null}
              {selectedEvents.InitiateCheckout ? (
                <td>{totalEvents.intitate_checkout.toLocaleString(defaultLocale)}</td>
              ) : null}
              {selectedEvents.AddPaymentInfo ? (
                <td>{totalEvents.add_payment_info.toLocaleString(defaultLocale)}</td>
              ) : null}
              {selectedEvents.Purchase ? (
                <td>{totalEvents.purchase.toLocaleString(defaultLocale)}</td>
              ) : null}
            </tr>
            {Object.values(byDate)
              .slice((page - 1) * 10, page * 10)
              .map((item, i) => {
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
                      <td>{item.page_view.toLocaleString(defaultLocale)}</td>
                    ) : null}
                    {analyticData.selected_events.AddToCart ? (
                      <td>{item.add_to_cart.toLocaleString(defaultLocale)}</td>
                    ) : null}
                    {analyticData.selected_events.InitiateCheckout ? (
                      <td>{item.intitate_checkout.toLocaleString(defaultLocale)}</td>
                    ) : null}
                    {analyticData.selected_events.AddPaymentInfo ? (
                      <td>{item.add_payment_info.toLocaleString(defaultLocale)}</td>
                    ) : null}
                    {analyticData.selected_events.Purchase ? (
                      <td>{item.purchase.toLocaleString(defaultLocale)}</td>
                    ) : null}
                  </tr>
                );
              })}
          </tbody>
        </table>
        {byDate.length > 10 && (
          <div className="flex justify-center items-center gap-4">
            <button
              className="w-[35px] h-[35px] rounded-[8px] bg-primary text-light disabled:text-dark flex items-center justify-center"
              disabled={page === 1}
              onClick={() => {
                setPage((currPage) => currPage - 1);
              }}
            >
              <Icon icon="left" />
            </button>
            <div>
              Page {page}/{Math.ceil(byDate.length / 10)}
            </div>
            <button
              className="w-[35px] h-[35px] rounded-[8px] bg-primary text-light disabled:text-dark flex items-center justify-center"
              disabled={page === Math.ceil(byDate.length / 10)}
              onClick={() => {
                setPage((currPage) => currPage + 1);
              }}
            >
              <Icon icon="right" />
            </button>
          </div>
        )}
      </>
    );
  } else {
    return <div>Idle</div>;
  }
};

export default AnalyticsTable;
