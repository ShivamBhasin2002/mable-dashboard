import { ComponentWrapper } from 'components/elements/common';
import {
  BarChart,
  DoughnutChart,
  Metrics,
  ParameterComposition,
  SelectorMenu
} from 'components/elements/event';
import { ParameterStat } from 'components/orderAnalysis';

import { useSelector, useDispatch } from 'redux/store';
import { setEventSelected } from 'redux/reducers/dataPerEventSlice';

import { eventSelectedType } from 'utility/constants/general';

const EventQuality = () => {
  const dispatch = useDispatch();
  const { AttributionParameters, EventParameters, eventSelected } = useSelector(
    (state) => state.dataPerEvent
  );
  return (
    <div className="flex flex-col flex-grow mt-[40px] gap-[40px]">
      <ComponentWrapper
        nextComponent={
          <SelectorMenu
            active={eventSelected}
            onChange={(item: eventSelectedType) => dispatch(setEventSelected(item))}
          />
        }
        height={400}
        className="flex-grow-0"
      >
        <div className="flex items-center justify-evenly mr-8 mt-5 flex-wrap gap-[40px]">
          <Metrics />
          <div className="flex-grow">
            <BarChart height={150} />
          </div>
          <div className="flex gap-8">
            <div className="w-[250px] ">
              <DoughnutChart />
            </div>
            <ParameterComposition />
          </div>
        </div>
      </ComponentWrapper>
      <div className="flex flex-grow gap-[40px] flex-wrap">
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
                <ParameterStat
                  name={'Country'}
                  value={AttributionParameters.location_country_name}
                />
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
        <ComponentWrapper title="Event Parameters" className="flex-grow-[1]">
          <div className="flex flex-col flex-wrap gap-[15px]">
            {EventParameters.shopping_data_total_amount && (
              <ParameterStat
                name={'Total Amount'}
                value={EventParameters.shopping_data_total_amount}
              />
            )}
            {EventParameters.shopping_data_currency && (
              <ParameterStat name={'Currency'} value={EventParameters.shopping_data_currency} />
            )}
            {EventParameters.custom_data_order_id && (
              <ParameterStat name={'Order ID'} value={EventParameters.custom_data_order_id} />
            )}
          </div>
        </ComponentWrapper>
      </div>
    </div>
  );
};

export default EventQuality;
