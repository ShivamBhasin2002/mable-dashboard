import { ComponentWrapper } from 'components/common';

import { ParameterStat } from 'components/dataQuality/General';

import { useSelector } from 'redux/store';
import { eventSelectedType } from 'utility/constants/enums';

const EventParametersCard = () => {
  const { EventParameters, status, eventSelected } = useSelector((state) => state.dataPerEvent);
  return (
    <ComponentWrapper
      title={`Attribution Parameters  ${
        eventSelected === eventSelectedType.all ? '' : `for ${eventSelected}`
      }`}
      className="flex-grow-[1]"
      status={status}
    >
      <table className="flex">
        <tbody className="flex flex-col flex-grow gap-[15px]">
          <ParameterStat
            name={'Total Amount'}
            value={EventParameters?.total_count_shopping_data_total_amount ?? 0}
          />
          <ParameterStat
            name={'Currency'}
            value={EventParameters?.total_count_shopping_data_currency ?? 0}
          />
          <ParameterStat
            name={'Order ID'}
            value={EventParameters?.total_count_custom_data_order_id ?? 0}
          />
        </tbody>
      </table>
    </ComponentWrapper>
  );
};

export default EventParametersCard;
