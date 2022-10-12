import { useEffect } from 'react';
import Icon from 'assets/icons';
import moment from 'moment';

import { ComponentWrapper } from 'components/common';
import StatusSelectorMenu from 'components/dataQuality/General/StatusSelecterMenu';

import {
  statusSelector,
  totalEvents,
  totalAttributions,
  STATUS_TYPE
} from 'utility/constants/general';
import { statusTypeColors } from 'utility/functions/colorSelector';

import { useSelector, useDispatch } from 'redux/store';
import { orderAnalysisAsync } from 'redux/reducers/orderAnalysisSlice';
import { getOrderAnalysisTableIcon } from 'utility/functions/mappingFunctions';

const OrderAnalysisTable = () => {
  const dispatch = useDispatch();
  const { tableData, status, statusSelected } = useSelector((state) => state.orderAnalysis);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(orderAnalysisAsync());
  }, [refresh]);
  return (
    <ComponentWrapper className="text-light flex-grow-0 min-h-[40px]" status={status}>
      <StatusSelectorMenu />
      <div className="overflow-hidden">
        <table className="w-full table-auto my-[10px] overflow-scroll">
          <thead>
            <tr className="[&>*]:py-[20px] [&>*]:font-montserrat [&>*]:font-bold [&>*]:text-[20px]">
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
            <tr className="[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-extrabold [&>*]:py-[12px] [&>*]:px-[20px] [&>*]:whitespace-nowrap">
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
            {tableData &&
              tableData
                .filter(
                  ({ status }) => statusSelected === statusSelector.all || status === statusSelected
                )
                .map((data, idx) => (
                  <tr
                    key={data.order_id}
                    className={`[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px] ${
                      !(idx & 1) && 'bg-tableStrips/[0.5]'
                    }`}
                  >
                    <td>{data.order_id ?? '-'}</td>
                    <td>{data.date ? moment(data.date).format('hh.mm - DD.MM.YY') : '-'}</td>
                    <td>{data.customer ?? '-'}</td>
                    <td>{data.total_value ?? '-'}</td>
                    <td>{data.conversion_value ?? '-'}</td>
                    <td>
                      {data.evt_params_present ?? 0}/{totalEvents}
                    </td>
                    <td>
                      {data.attr_params_present ?? 0}/{totalAttributions}
                    </td>
                    <td>{data.delivery_time ? `${data.delivery_time}s` : '-'}</td>
                    <td>
                      {data.status ? (
                        <span
                          className={`px-[20px] py-[5px] w-max ${statusTypeColors(
                            data.status
                          )} rounded-[100px] flex gap-[10px] items-center justify-evenly font-montserrat`}
                        >
                          <Icon icon={getOrderAnalysisTableIcon(data.status)} />
                          {data.status}
                        </span>
                      ) : (
                        '-'
                      )}
                    </td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </ComponentWrapper>
  );
};

export default OrderAnalysisTable;
