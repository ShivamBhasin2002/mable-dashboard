import { StatisticPropTypes } from 'utility/typeDefinitions/componentPropTypes';

const Statistics = ({ value, message }: StatisticPropTypes) => (
  <div className="p-[1.25rem] w-[6.875rem] h-[6.875rem] flex-grow[1] flex flex-col items-center justify-center bg-gradient-to-r to-[#1D2E4B] from-[#1D2940] rounded-[1rem] drop-shadow-[0_0_18px_#05091029] font-lato">
    <div className="text-[1.3rem] font-lato text-center text-light flex-grow">{value}</div>
    <div className="text-primary text-center text-[.7rem]">{message}</div>
  </div>
);

export default Statistics;
