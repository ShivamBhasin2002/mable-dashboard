import { FC } from 'react';

interface ParameterStatProps {
  name: string;
  value: number;
}

const ParameterStat: FC<ParameterStatProps> = ({ name, value }) => {
  return (
    <div className="h-[60px] flex-grow flex-shrink-0 flex items-center justify-between bg-gradient-to-r from-[#1C2B43] to-bgContainerFrom rounded-[10px] border-[1px] border-light/10 text-light px-8 font-medium gap-[20px]">
      {name}
      <span className="flex gap-[20px] text-[20px] items-center flex-grow max-w-[230px]">
        <div className="h-[25px] flex-grow border-[1px] border-[#667183] bg-secondary/[0.3] rounded-[5px] min-w-[120px]">
          <div className={`h-full w-[${value * 100}%] bg-success`} />
        </div>
        <div>
          <span className="font-semibold">{value * 100}</span>
          <span className="text-[16px]">%</span>
        </div>
      </span>
    </div>
  );
};

export default ParameterStat;
