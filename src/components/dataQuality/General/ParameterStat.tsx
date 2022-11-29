type ParameterStatProps = {
  name: string;
  value?: number;
};

const ParameterStat = ({ name, value }: ParameterStatProps) => (
  <div className="py-2  flex items-center justify-between bg-gradient-to-r from-[#1C2B43] to-bgContainerFrom rounded-[.3125rem] border-[.0625rem] border-light/10 text-light px-2  gap-[.3125rem]">
    <div className="text-[.8rem] 2xl:text-[1rem] hd:text-[1.3rem] w-30">{name}</div>
    <div className="flex  text-[1rem]  h-full items-center justify-between flex-grow w-70 gap-2">
      <div className="h-[1.5625rem]  2xl:h-[1.7rem] hd:h-[2.3rem]   w-80  border-[.0625rem]  border-[#667183] bg-secondary/[0.3] rounded-[.3125rem] overflow-hidden">
        <div
          className={`h-full w-full bg-success transition-[width] ease-in-out duration-1000`}
          style={{ width: `${(value ?? 0) * 100}%` }}
        ></div>
      </div>
      <div className="w-20 ">
        <span className="font-semibold 2xl:text-[1.1rem] hd:text-[1.5rem]">
          {Math.floor((value ?? 0) * 100)}
        </span>
        <span className="text-[1rem] hd:text-[1.6rem]">%</span>
      </div>
    </div>
  </div>
);

export default ParameterStat;
