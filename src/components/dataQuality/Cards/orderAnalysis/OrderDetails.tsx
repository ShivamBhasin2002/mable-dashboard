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
      className={`[&>*]:font-montserrat  text-center flex py-[.8rem] [&>*]:flex-1 [&>*]:text-[.87rem] [&>*]:whitespace-nowrap [&>*]:font-normal [&>*]:truncate ${
        !(idx & 1) && 'bg-tableStrips/[0.5]'
      }`}
    >
      <td className="flex items-center justify-center">{data.order_id ?? '-'}</td>
      <td className="flex items-center justify-center">
        {data.created_at ? moment(data.created_at).format('HH:mm - DD.MM.YY') : '-'}
      </td>
      <td className="text-left flex items-center">{data.customer_name ?? '-'}</td>
      <td className="w-auto flex items-center justify-center">
        {data.total_conversion_value ? <>{data.total_conversion_value.toFixed(2)} &euro;</> : '-'}
      </td>
      <td className="flex items-center justify-center">
        {data.destination_conversion_value ? (
          <>{data.destination_conversion_value.toFixed(2)} &euro;</>
        ) : (
          '-'
        )}
      </td>
      <td className="flex items-center justify-center">
        <b>{data.event_params_present ?? 0}</b>/{totalEvents}
      </td>
      <td className="flex items-center justify-center">
        <b>{data.attribution_params_present ?? 0}</b>/{totalAttributions}
      </td>
      <td className="flex items-center justify-center">
        {data.delivery_time_difference
          ? `${deliveryTimeDifference.value} ${deliveryTimeDifference.unit}`
          : '-'}
      </td>
      <td className="flex items-center justify-center">
        {data.status ? (
          <div className={`p-[.25rem]  ${statusTypeColors(data.status)} rounded-[6.25rem] w-fit`}>
            <Icon icon={getOrderAnalysisTableIcon(data.status)} />
            {/* {data.status} */}
          </div>
        ) : (
          '-'
        )}
      </td>
    </tr>
  );
};

export default OrderDetails;
