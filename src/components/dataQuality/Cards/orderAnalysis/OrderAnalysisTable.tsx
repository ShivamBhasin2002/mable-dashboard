import { useEffect, useState } from 'react';
import Icon from 'assets/icons';

import { ComponentWrapper } from 'components/common';
import StatusSelectorMenu from 'components/dataQuality/General/StatusSelecterMenu';

import { SORT_ORDER, statusSelector, STATUS_TYPE } from 'utility/constants/enums';
import { noOrdersMessage } from 'utility/constants/strings';

import { useSelector, useDispatch } from 'redux/store';
import { orderAnalysisAsync } from 'redux/reducers/dataQuality/orderAnalysisSlice';
import { order } from 'utility/typeDefinitions/reduxTypes';
import moment from 'moment';
import Pagination from 'components/dataQuality/General/Pagination';
import OrderDetails from './OrderDetails';

const OrderAnalysisTable = () => {
  const { tableData, status, statusSelected } = useSelector((state) => state.orderAnalysis);
  const [page, setPage] = useState(1);
  const [ordersPerPage, setOrdersPerPage] = useState(0);
  const [orders, setOrders] = useState<order[]>([]);
  const [sortOrder, setSortOrder] = useState<SORT_ORDER>(SORT_ORDER.INCREASING);
  const refresh = useSelector((state) => state.dates.refresh);

  const dispatch = useDispatch();

  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(orderAnalysisAsync());
  }, [refresh]);

  useEffect(() => {
    const height = document.getElementById('orderAnalysisTable')?.clientHeight;
    if (height) setOrdersPerPage(Math.floor((height - 230) / 35));
  }, [tableData]);

  useEffect(() => {
    setPage(1);
  }, [statusSelected]);

  useEffect(() => {
    setOrders(
      tableData
        .filter(({ status }) => statusSelected === statusSelector.all || status === statusSelected)
        .sort((order1, order2) =>
          sortOrder === SORT_ORDER.INCREASING
            ? moment(order1.created_at).diff(moment(order2.created_at))
            : -1 * moment(order1.created_at).diff(moment(order2.created_at))
        )
    );
  }, [status, sortOrder, tableData]);

  const changeSortOrder = () => {
    switch (sortOrder) {
      case SORT_ORDER.INCREASING:
        setSortOrder(SORT_ORDER.DECREASING);
        break;
      case SORT_ORDER.DECREASING:
        setSortOrder(SORT_ORDER.INCREASING);
        break;
      default:
        setSortOrder(SORT_ORDER.DECREASING);
    }
  };

  return (
    <ComponentWrapper
      id="orderAnalysisTable"
      className="text-light min-h-[21.875rem] !overflow-scroll hide_scrollbar flex-grow w-[100] flex flex-col justify-between"
      // eslint-disable-next-line no-nested-ternary
      status={status}
    >
      <table className="table-auto  w-full">
        <thead>
          <tr className="[&>*]:py-1 flex [&>*]:flex-1 [&>*]:font-montserrat [&>*]:font-bold [&>*]:text-[1.25rem]">
            <td>Shopify</td>
            <td></td>
            <td></td>
            <td></td>
            <td>Tracking</td>
            <td></td>
            <td></td>
            <td>Facebook</td>
            <td></td>
          </tr>
          <tr className="[&>*]:font-montserrat [&>*]:text-[.8rem] text-center [&>*]:font-extrabold [&>*]:py-[.75rem]  [&>*]2xl:whitespace-nowrap flex [&>*]:flex-1">
            <td className="bg-primary rounded-tl-[.625rem]">Order</td>
            <td
              className="bg-primary flex gap-6 items-center justify-center"
              onClick={changeSortOrder}
            >
              Date <Icon icon={sortOrder} className="cursor-pointer" />
            </td>
            <td className="bg-primary">Customer</td>
            <td className="bg-primary">Total</td>
            <td className="bg-primary/[0.8]">CV</td>
            <td className="bg-primary/[0.8]">Event P.</td>
            <td className="bg-primary/[0.8]">Attribution P.</td>
            <td className="bg-primary/[0.65]">Delivery Time</td>
            <td className="bg-primary/[0.65] rounded-tr-[.625rem]">Status</td>
          </tr>
        </thead>
        <tbody className="last-of:rounded-b-[.625rem]">
          {orders && orders.length !== 0 ? (
            orders
              .slice((page - 1) * ordersPerPage, page * ordersPerPage)
              .map((data, idx) => <OrderDetails key={idx} idx={idx} data={data} />)
          ) : (
            <tr>
              <td colSpan={9}>
                <div className="h-[9.375rem] rounded-b-[.625rem] bg-tableStrips/50 flex items-center justify-center gap-6">
                  <Icon icon="noOrders" className="text-6xl text-dark/25 inline-block" />
                  <span className="font-montserrat font-bold text-4xl text-dark/25 text-center">
                    {noOrdersMessage(statusSelected)}
                  </span>
                </div>
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <StatusSelectorMenu />
      <Pagination page={page} setPage={setPage} array={orders} itemsPerPage={ordersPerPage} />
    </ComponentWrapper>
  );
};

export default OrderAnalysisTable;
