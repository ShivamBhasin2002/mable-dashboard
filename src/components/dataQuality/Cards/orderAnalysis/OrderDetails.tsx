import moment from 'moment';

import { totalEvents, totalAttributions } from 'utility/constants/numbers';
import { statusTypeColors } from 'utility/functions/colorSelector';
import { getOrderAnalysisTableIcon } from 'utility/functions/mappingFunctions';
import { dateTimeReducer } from 'utility/functions/formattingFunctions';
import { order } from 'utility/typeDefinitions/reduxTypes';
import Icon from 'assets/icons';

const OrderDetails = ({ data, idx }: { idx: number; data: order }) => {
  {
    const deliveryTimeDifference = dateTimeReducer(
      data.delivery_time_difference ? data.delivery_time_difference * 1000 : ''
    );
    return (
      <tr
        className={`[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px] ${
          !(idx & 1) && 'bg-tableStrips/[0.5]'
        }`}
      >
        <td>{data.order_id ?? '-'}</td>
        <td>{data.created_at ? moment(data.created_at).format('HH:mm - DD.MM.YY') : '-'}</td>
        <td>{data.customer_name ?? '-'}</td>
        <td>{data.total_conversion_value ? <>{data.total_conversion_value} &euro;</> : '-'}</td>
        <td>
          {data.destination_conversion_value ? (
            <>{data.destination_conversion_value} &euro;</>
          ) : (
            '-'
          )}
        </td>
        <td>
          {data.event_params_present ?? 0}/{totalEvents}
        </td>
        <td>
          {data.attribution_params_present ?? 0}/{totalAttributions}
        </td>
        <td>
          {data.delivery_time_difference
            ? `${deliveryTimeDifference.value}${deliveryTimeDifference.unit}`
            : '-'}
        </td>
        <td>
          {data.status ? (
            <span
              className={`px-[20px] py-[5px] ${statusTypeColors(
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
  }
};

export default OrderDetails;
