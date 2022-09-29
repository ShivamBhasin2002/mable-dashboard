import { ComponentWrapper } from 'components/common';

import { ParameterStat } from 'components/dataQuality/General';

import { useSelector } from 'redux/store';

const AttributionParametersCard = () => {
  const { AttributionParameters } = useSelector((state) => state.dataPerEvent);
  return (
    <ComponentWrapper title="Attribution Parameters" className="flex-grow-[2] h-min">
      <div className="flex flex-wrap justify-evenly gap-[10px]">
        <div className="flex flex-col flex-grow gap-[15px]">
          {AttributionParameters.user_id && (
            <ParameterStat name={'User IP'} value={AttributionParameters.user_id} />
          )}
          {AttributionParameters.user_agent && (
            <ParameterStat name={'User Agent'} value={AttributionParameters.user_agent} />
          )}
          {AttributionParameters.customer_data_email && (
            <ParameterStat name={'Email'} value={AttributionParameters.customer_data_email} />
          )}
          {AttributionParameters.customer_data_first_name && (
            <ParameterStat
              name={'First Name'}
              value={AttributionParameters.customer_data_first_name}
            />
          )}
          {AttributionParameters.customer_data_last_name && (
            <ParameterStat
              name={'Last Name'}
              value={AttributionParameters.customer_data_last_name}
            />
          )}
          {AttributionParameters.customer_data_phone && (
            <ParameterStat
              name={'Phone Number'}
              value={AttributionParameters.customer_data_phone}
            />
          )}
          {AttributionParameters.customer_data_date_of_birth && (
            <ParameterStat
              name={'Date Of Birth'}
              value={AttributionParameters.customer_data_date_of_birth}
            />
          )}
        </div>
        <div className="flex flex-col flex-grow gap-[15px]">
          {AttributionParameters.location_state && (
            <ParameterStat name={'State'} value={AttributionParameters.location_state} />
          )}
          {AttributionParameters.location_country_name && (
            <ParameterStat name={'Country'} value={AttributionParameters.location_country_name} />
          )}
          {AttributionParameters.location_city && (
            <ParameterStat name={'City'} value={AttributionParameters.location_city} />
          )}
          {AttributionParameters.location_zip_code && (
            <ParameterStat name={'Zip Code'} value={AttributionParameters.location_zip_code} />
          )}
          {AttributionParameters.clid_fbclid && (
            <ParameterStat name={'CLID'} value={AttributionParameters.clid_fbclid} />
          )}
          {AttributionParameters.external_ids && (
            <ParameterStat name={'External IDs'} value={AttributionParameters.external_ids} />
          )}
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default AttributionParametersCard;
