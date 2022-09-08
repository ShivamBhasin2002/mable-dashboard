const Stats = ({ value, message }: { value?: string | number; message?: string }) => {
  return (
    <div className="p-[20px] w-[130px] h-[130px] flex flex-col items-center justify-evenly bg-gradient-to-r to-[#1D2E4B] from-[#1D2940] rounded-[16px] drop-shadow-[0_0_18px_#05091029] font-lato">
      <div className="text-[35px] font-lato text-center text-light flex-grow">{value}</div>
      <div className="text-primary text-center text-[14px]">{message}</div>
    </div>
  );
};

export default Stats;
