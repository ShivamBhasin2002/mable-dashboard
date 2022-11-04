type ParameterStatProps = {
  name: string;
  value?: number;
};

const ParameterStat = ({ name, value }: ParameterStatProps) => (
  <tr className="max-h-[60px] h-[60px] flex-grow flex-shrink-0 flex items-center justify-between bg-gradient-to-r from-[#1C2B43] to-bgContainerFrom rounded-[10px] border-[1px] border-light/10 text-light px-8 font-medium gap-[20px]">
    <td className="min-w-[108px]">{name}</td>
    <td className="flex gap-[20px] text-[20px] items-center justify-between flex-grow max-w-[230px]">
      <div className="h-[25px] w-[150px] border-[1px] border-[#667183] bg-secondary/[0.3] rounded-[5px]">
        <div
          className={`h-full bg-success transition-[width] ease-in-out duration-1000`}
          style={{ width: `${(value ?? 0) * 100}%` }}
        ></div>
      </div>
      <div>
        <span className="font-semibold">{Math.floor((value ?? 0) * 100)}</span>
        <span className="text-[16px]">%</span>
      </div>
    </td>
  </tr>
);

export default ParameterStat;
