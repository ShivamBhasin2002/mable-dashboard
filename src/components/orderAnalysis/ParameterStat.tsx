import { FC } from 'react';
import { Progress } from '@chakra-ui/react';

interface ParameterStatProps {
  name: string;
  value: number;
}

const ParameterStat: FC<ParameterStatProps> = ({ name, value }) => {
  return (
    <div className="w-[450px] h-[60px] flex-grow-0 flex-shrink-0 flex items-center justify-between bg-gradient-to-r from-[#1C2B43] to-bgContainerFrom rounded-[10px] border-[1px] border-light/10 text-light px-8 font-medium">
      {name}
      <span className="flex gap-[20px] text-[20px] items-center ">
        <Progress w={150} value={value * 100} size="lg" rounded="2px" />
        <div>
          <span className="font-semibold">{value * 100}</span>
          <span className="text-[16px]">%</span>
        </div>
      </span>
    </div>
  );
};

export default ParameterStat;
