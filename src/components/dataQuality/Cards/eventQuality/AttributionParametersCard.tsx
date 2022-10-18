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
        <table className="flex flex-col flex-grow gap-[15px]">
          <ParameterStat name={'User IP'} value={AttributionParameters?.total_count_user_id ?? 0} />
          <ParameterStat
            name={'User Agent'}
            value={AttributionParameters?.total_count_user_agent ?? 0}
          />
          <ParameterStat
            name={'Email'}
            value={AttributionParameters?.total_count_customer_data_email ?? 0}
          />
          <ParameterStat
            name={'First Name'}
            value={AttributionParameters?.total_count_customer_data_first_name ?? 0}
          />
          <ParameterStat
            name={'Last Name'}
            value={AttributionParameters?.total_count_customer_data_last_name ?? 0}
          />
          <ParameterStat
            name={'Phone Number'}
            value={AttributionParameters?.total_count_customer_data_phone ?? 0}
          />
          <ParameterStat
            name={'Date Of Birth'}
            value={AttributionParameters?.total_count_customer_data_date_of_birth ?? 0}
          />
        </table>
        <table className="flex flex-col flex-grow gap-[15px]">
          <ParameterStat
            name={'State'}
            value={AttributionParameters?.total_count_location_state ?? 0}
          />
          <ParameterStat
            name={'Country'}
            value={AttributionParameters?.total_count_location_country_name ?? 0}
          />
          <ParameterStat
            name={'City'}
            value={AttributionParameters?.total_count_location_city ?? 0}
          />
          <ParameterStat
            name={'Zip Code'}
            value={AttributionParameters?.total_count_location_zip_code ?? 0}
          />
          <ParameterStat
            name={'CLID'}
            value={AttributionParameters?.total_count_clid_fbclid ?? 0}
          />
          <ParameterStat
            name={'External IDs'}
            value={AttributionParameters?.total_count_external_ids ?? 0}
          />
        </table>
      </div>
    </ComponentWrapper>
  );
};

export default AttributionParametersCard;
