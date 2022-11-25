import moment from 'moment';

import { totalEvents, totalAttributions } from 'utility/constants/numbers';
import { statusTypeColors } from 'utility/functions/colorSelector';
import { getOrderAnalysisTableIcon } from 'utility/functions/mappingFunctions';
import { dateTimeReducer } from 'utility/functions/formattingFunctions';
import { order } from 'utility/typeDefinitions/reduxTypes';
import Icon from 'assets/icons';

const OrderDetails = ({ data, idx }: { idx: number; data: order }) => {
  const deliveryTimeDifference = dateTimeReducer(
    data.delivery_time_difference ? data.delivery_time_difference : ''
  );
  return (
    <tr
      className={`[&>*]:font-montserrat  text-center flex py-[10px] [&>*]:flex-1 [&>*]:text-[12px] [&>*]:whitespace-nowrap [&>*]:font-normal [&>*]:truncate ${
        !(idx & 1) && 'bg-tableStrips/[0.5]'
      }`}
    >
      <td>{data.order_id ?? '-'}</td>
      <td>{data.created_at ? moment(data.created_at).format('HH:mm - DD.MM.YY') : '-'}</td>
      <td className="text-left">{data.customer_name ?? '-'}</td>
      <td className="w-auto ">
        {data.total_conversion_value ? <>{data.total_conversion_value.toFixed(2)} &euro;</> : '-'}
      </td>
      <td>
        {data.destination_conversion_value ? (
          <>{data.destination_conversion_value.toFixed(2)} &euro;</>
        ) : (
          '-'
        )}
      </td>
      <td>
        <b>{data.event_params_present ?? 0}</b>/{totalEvents}
      </td>
      <td>
        <b>{data.attribution_params_present ?? 0}</b>/{totalAttributions}
      </td>
      <td>
        {data.delivery_time_difference
          ? `${deliveryTimeDifference.value}${deliveryTimeDifference.unit}`
          : '-'}
      </td>
      <td>
        {data.status ? (
          <span
            className={`px-[20px]  ${statusTypeColors(
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
  );
};

export default OrderDetails;
