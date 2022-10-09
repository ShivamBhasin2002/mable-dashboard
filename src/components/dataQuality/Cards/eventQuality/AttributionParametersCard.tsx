import { ComponentWrapper } from 'components/common';

import { ParameterStat } from 'components/dataQuality/General';

import { useSelector } from 'redux/store';

const AttributionParametersCard = () => {
  const { AttributionParameters, status } = useSelector((state) => state.dataPerEvent);
  return (
    <ComponentWrapper
      title="Attribution Parameters"
      className="flex-grow-[2] h-min"
      status={status}
    >
      <div className="flex flex-wrap justify-evenly gap-[10px]">
        <div className="flex flex-col flex-grow gap-[15px]">
          {AttributionParameters.total_count_user_id && (
            <ParameterStat name={'User IP'} value={AttributionParameters.total_count_user_id} />
          )}
          {AttributionParameters.total_count_user_agent && (
            <ParameterStat
              name={'User Agent'}
              value={AttributionParameters.total_count_user_agent}
            />
          )}
          {AttributionParameters.total_count_customer_data_email && (
            <ParameterStat
              name={'Email'}
              value={AttributionParameters.total_count_customer_data_email}
            />
          )}
          {AttributionParameters.total_count_customer_data_first_name && (
            <ParameterStat
              name={'First Name'}
              value={AttributionParameters.total_count_customer_data_first_name}
            />
          )}
          {AttributionParameters.total_count_customer_data_last_name && (
            <ParameterStat
              name={'Last Name'}
              value={AttributionParameters.total_count_customer_data_last_name}
            />
          )}
          {AttributionParameters.total_count_customer_data_phone && (
            <ParameterStat
              name={'Phone Number'}
              value={AttributionParameters.total_count_customer_data_phone}
            />
          )}
          {AttributionParameters.total_count_customer_data_date_of_birth && (
            <ParameterStat
              name={'Date Of Birth'}
              value={AttributionParameters.total_count_customer_data_date_of_birth}
            />
          )}
        </div>
        <div className="flex flex-col flex-grow gap-[15px]">
          {AttributionParameters.total_count_location_state && (
            <ParameterStat
              name={'State'}
              value={AttributionParameters.total_count_location_state}
            />
          )}
          {AttributionParameters.total_count_location_country_name && (
            <ParameterStat
              name={'Country'}
              value={AttributionParameters.total_count_location_country_name}
            />
          )}
          {AttributionParameters.total_count_location_city && (
            <ParameterStat name={'City'} value={AttributionParameters.total_count_location_city} />
          )}
          {AttributionParameters.total_count_location_zip_code && (
            <ParameterStat
              name={'Zip Code'}
              value={AttributionParameters.total_count_location_zip_code}
            />
          )}
          {AttributionParameters.total_count_clid_fbclid && (
            <ParameterStat name={'CLID'} value={AttributionParameters.total_count_clid_fbclid} />
          )}
          {AttributionParameters.total_count_external_ids && (
            <ParameterStat
              name={'External IDs'}
              value={AttributionParameters.total_count_external_ids}
            />
          )}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default AttributionParametersCard;
