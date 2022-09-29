import { ComponentWrapper } from 'components/common';

import { ParameterStat } from 'components/dataQuality/General';

import { useSelector } from 'redux/store';

const EventParametersCard = () => {
  const { EventParameters } = useSelector((state) => state.dataPerEvent);
  return (
    <ComponentWrapper title="Event Parameters" className="flex-grow-[1]">
      <div className="flex flex-col flex-wrap gap-[15px]">
        {EventParameters.shopping_data_total_amount && (
          <ParameterStat name={'Total Amount'} value={EventParameters.shopping_data_total_amount} />
        )}
        {EventParameters.shopping_data_currency && (
          <ParameterStat name={'Currency'} value={EventParameters.shopping_data_currency} />
        )}
        {EventParameters.custom_data_order_id && (
          <ParameterStat name={'Order ID'} value={EventParameters.custom_data_order_id} />
        )}
      </div>
    </ComponentWrapper>
  );
};

export default EventParametersCard;
