import { useEffect, useState } from 'react';
import Icon from 'assets/icons';

import { ComponentWrapper } from 'components/common';
import StatusSelectorMenu from 'components/dataQuality/General/StatusSelecterMenu';

import { statusSelector, STATUS_TYPE } from 'utility/constants/enums';
import { noOrdersMessage } from 'utility/constants/strings';

import { useSelector, useDispatch } from 'redux/store';
import { orderAnalysisAsync } from 'redux/reducers/dataQuality/orderAnalysisSlice';
import { useWindowSize } from 'utility/customHooks';
import OrderDetails from './OrderDetails';
import { order } from 'utility/typeDefinitions/reduxTypes';

const OrderAnalysisTable = () => {
  const dispatch = useDispatch();
  const { tableData, status, statusSelected } = useSelector((state) => state.orderAnalysis);
  const [page, setPage] = useState(1);
  const [orders, setOrders] = useState<order[]>([]);
  const refresh = useSelector((state) => state.dates.refresh);
  const { width: screenWidth } = useWindowSize();
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(orderAnalysisAsync());
  }, [refresh]);
  useEffect(() => {
    setPage(1);
  }, [statusSelected]);
  useEffect(() => {
    setOrders(
      tableData.filter(
        ({ status }) => statusSelected === statusSelector.all || status === statusSelected
      )
    );
  });

  return (
    <ComponentWrapper
      className="text-light min-h-[40px] !overflow-overlay hide_scrollbar"
      width={screenWidth ? (screenWidth >= 1022 ? screenWidth - 340 : screenWidth - 360) : 340}
      status={status}
    >
      <StatusSelectorMenu />
      <div className="flex-grow">
        <table className="table-auto my-[10px] w-full">
          <thead>
            <tr className="[&>*]:py-[20px] flex [&>*]:flex-1 [&>*]:font-montserrat [&>*]:font-bold [&>*]:text-[20px]">
              <td>Shopify</td>
              <td></td>
              <td></td>
              <td></td>
              <td>Tracking</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
            <tr className="[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-extrabold [&>*]:py-[12px] [&>*]:px-[20px] [&>*]2xl:whitespace-nowrap flex [&>*]:flex-1">
              <td className="bg-primary rounded-tl-[10px]">Order</td>
              <td className="bg-primary">Date</td>
              <td className="bg-primary">Customer</td>
              <td className="bg-primary">Total</td>
              <td className="bg-primary/[0.8]">CV</td>
              <td className="bg-primary/[0.8]">Event P.</td>
              <td className="bg-primary/[0.8]">Attribution P.</td>
              <td className="bg-primary/[0.65]">Delivery Time</td>
              <td className="bg-primary/[0.65] rounded-tr-[10px]">Status</td>
            </tr>
          </thead>
          <tbody className="last-of:rounded-b-[10px]">
            {orders && orders.length !== 0 ? (
              orders
                .slice((page - 1) * 10, page * 10)
                .map((data, idx) => <OrderDetails key={idx} idx={idx} data={data} />)
            ) : (
              <tr>
                <td colSpan={9}>
                  <div className="h-[150px] rounded-b-[10px] bg-tableStrips/50 flex items-center justify-center gap-6">
                    <Icon icon="noOrders" className="text-6xl text-dark/25 inline-block" />
                    <span className="font-montserrat font-bold text-4xl text-dark/25">
                      {noOrdersMessage(statusSelected)}
                    </span>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {orders && orders.length > 10 && (
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
            Page {page}/{Math.ceil(orders.length / 10)}
          </div>
          <button
            className="w-[35px] h-[35px] rounded-[8px] bg-primary text-light disabled:text-dark flex items-center justify-center"
            disabled={page === Math.ceil(orders.length / 10)}
            onClick={() => {
              setPage((currPage) => currPage + 1);
            }}
          >
            <Icon icon="right" />
          </button>
        </div>
      )}
    </ComponentWrapper>
  );
};

export default OrderAnalysisTable;
