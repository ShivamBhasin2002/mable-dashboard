import Icon from 'assets/icons';
import moment from 'moment';

import { useSelector } from 'redux/store';
import { statusSelector, totalEvents, totatlAttributions } from 'utility/constants/general';
import { statusTypeColors } from 'utility/functions';

const OrderAnalysisTable = () => {
  const { tableData } = useSelector((state) => state.orderAnalysis);
  return (
    <table className="w-full table-auto my-[10px]">
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
        {tableData.map((data, idx) => (
          <tr
            key={data.id}
            className={`[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px] ${
              !(idx & 1) && 'bg-tableStrips/[0.5]'
            }`}
          >
            <td>{data.id}</td>
            <td>{moment(data.date).format('hh.mm - DD.MM.YY')}</td>
            <td>{data.customer}</td>
            <td>{data.total}</td>
            <td>{data.cv}</td>
            <td>
              {data.eventParametersPresent}/{totalEvents}
            </td>
            <td>
              {data.attributionParametersPresent}/{totatlAttributions}
            </td>
            <td>{data.deliveryTime}s</td>
            <td>
              <span
                className={`px-[20px] py-[5px] ${statusTypeColors(
                  data.status
                )} rounded-[100px] flex gap-[10px] items-center justify-evenly font-montserrat`}
              >
                {data.status === statusSelector.pending && <Icon icon="pending" />}
                {data.status === statusSelector.success && <Icon icon="tick" />}
                {data.status === statusSelector.failed && <Icon icon="cross" />}
                {data.status === statusSelector.delayed && <Icon icon="delayed" />} {data.status}
              </span>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default OrderAnalysisTable;
