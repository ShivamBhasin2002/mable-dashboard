import { ComponentWrapper } from 'components/elements';
import {
  BarChart,
  DoughnutChart,
  Metrics,
  ParameterComposition,
  SelectorMenu
} from 'components/elements/event';
import { ParameterStat } from 'components/orderAnalysis';

import { useSelector } from 'redux/store';

const EventQuality = () => {
  const { AttributionParameters } = useSelector((state) => state.dataPerEvent);
  return (
    <div className="flex flex-col flex-grow mt-[40px] gap-[40px]">
      <ComponentWrapper nextComponent={<SelectorMenu />} height={400} className="flex-grow-0">
        <div className="flex items-center justify-between mr-8">
          <Metrics />
          <div>
            <BarChart width={470} height={150} />
          </div>
          <div className="flex gap-8">
            <div className="w-[250px] ">
              <DoughnutChart />
            </div>
            <ParameterComposition />
          </div>
        </div>
      </ComponentWrapper>
      <div className="flex flex-grow gap-[40px]">
        <ComponentWrapper title="Attribution Parameters" className="flex-grow-[2] h-min">
          <div className="flex flex-wrap justify-evenly gap-[10px]">
            <div className="flex flex-col flex-wrap gap-[15px]">
              <ParameterStat name={'User IP'} value={AttributionParameters['User IP']} />
              <ParameterStat name={'User Agent'} value={AttributionParameters['User Agent']} />
              <ParameterStat name={'Email'} value={AttributionParameters['Email']} />
              <ParameterStat name={'Phone'} value={AttributionParameters['Phone']} />
              <ParameterStat name={'First Name'} value={AttributionParameters['First Name']} />
              <ParameterStat name={'Last Name'} value={AttributionParameters['Last Name']} />
              <ParameterStat
                name={'Date Of Birth'}
                value={AttributionParameters['Date Of Birth']}
              />
            </div>
            <div className="flex flex-col flex-wrap gap-[15px]">
              <ParameterStat name={'State'} value={AttributionParameters['State']} />
              <ParameterStat name={'Country'} value={AttributionParameters['Country']} />
              <ParameterStat name={'City'} value={AttributionParameters['City']} />
              <ParameterStat name={'Zip Code'} value={AttributionParameters['Zip Code']} />
              <ParameterStat name={'Currency'} value={AttributionParameters['Currency']} />
              <ParameterStat name={'Total Price'} value={AttributionParameters['Total Price']} />
              <ParameterStat name={'Order Id'} value={AttributionParameters['Order Id']} />
            </div>
          </div>
        </ComponentWrapper>
        <ComponentWrapper title="Event Parameters" className="flex-grow-[1]">
          <div className="flex flex-col flex-wrap gap-[15px]">
            <ParameterStat name={'State'} value={AttributionParameters['State']} />
            <ParameterStat name={'Country'} value={AttributionParameters['Country']} />
            <ParameterStat name={'City'} value={AttributionParameters['City']} />
            <ParameterStat name={'Zip Code'} value={AttributionParameters['Zip Code']} />
            <ParameterStat name={'Currency'} value={AttributionParameters['Currency']} />
            <ParameterStat name={'Total Price'} value={AttributionParameters['Total Price']} />
            <ParameterStat name={'Order Id'} value={AttributionParameters['Order Id']} />
          </div>
        </ComponentWrapper>
      </div>
    </div>
  );
};

export default EventQuality;
