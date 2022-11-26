type ParameterStatProps = {
  name: string;
  value?: number;
};

const ParameterStat = ({ name, value }: ParameterStatProps) => (
  <tr className="py-2  flex items-center justify-between bg-gradient-to-r from-[#1C2B43] to-bgContainerFrom rounded-[.3125rem] border-[.0625rem] border-light/10 text-light px-2 font-medium gap-[.3125rem] w-100 lg:w-[25rem] h-[2.5rem]">
    <td className="text-[.9rem] w-30">{name}</td>
    <td className="flex  text-[1rem]] items-center justify-between flex-grow w-70 gap-2">
      <div className="h-[1.5625rem] w-80  border-[.0625rem]  border-[#667183] bg-secondary/[0.3] rounded-[.3125rem] overflow-hidden">
        <div
          className={`h-full w-full bg-success transition-[width] ease-in-out duration-1000`}
          style={{ width: `${(value ?? 0) * 100}%` }}
        ></div>
      </div>
      <div className="w-20 ">
        <span className="font-semibold">{Math.floor((value ?? 0) * 100)}</span>
        <span className="text-[1rem]">%</span>
      </div>
    </td>
  </tr>
);

export default ParameterStat;
