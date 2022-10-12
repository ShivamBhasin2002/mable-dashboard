import { ComponentWrapper } from 'components/common';

import { ParameterStat } from 'components/dataQuality/General';

import { useSelector } from 'redux/store';

const EventParametersCard = () => {
  const { EventParameters, status } = useSelector((state) => state.dataPerEvent);
  return (
    <ComponentWrapper title="Event Parameters" className="flex-grow-[1]" status={status}>
      <div className="flex flex-col flex-wrap gap-[15px]">
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
      </div>
    </ComponentWrapper>
  );
};

export default EventParametersCard;
