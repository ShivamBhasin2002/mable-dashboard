type ParameterStatProps = {
  name: string;
  value?: number;
};

const ParameterStat = ({ name, value }: ParameterStatProps) => (
  <tr className="py-2 flex-grow flex-shrink-0 flex items-center justify-between bg-gradient-to-r from-[#1C2B43] to-bgContainerFrom rounded-[5px] border-[1px] border-light/10 text-light px-2 font-medium gap-[5px]">
    <td className="text-[.9rem] w-40">{name}</td>
    <td className="flex  text-[1rem]] items-center justify-start flex-grow w-60 gap-3">
      <div className="h-[25px] w-[120px]  border-[1px] border-[#667183] bg-secondary/[0.3] rounded-[5px] overflow-hidden">
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
