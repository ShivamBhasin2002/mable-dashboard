import { ComponentWrapper } from 'components/elements';

import { useSelector } from 'redux/store';

const PageSpeed = () => {
  const { T_M_AVG, T_SH_AVG, PS_M } = useSelector((state) => state.pageSpeed);
  return (
    <ComponentWrapper title="Page Speed" width={560}>
      <div className="flex flex-row justify-center">
        <div className="border-r-2 border-lines/[0.15] min-w-[160px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {T_M_AVG}
          </div>
          <div className="text-primary text-center text-[14px]">Avg Loading Time</div>
        </div>
        <div className="border-r-2 border-lines/[0.15] min-w-[160px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {T_SH_AVG}
          </div>
          <div className="text-primary text-center text-[14px]">Avg Loading Time</div>
        </div>
        <div className="min-w-[160px]">
          <div className=" text-[35px] h-[42px] font-text text-center text-light mb-[8px]">
            {PS_M}
          </div>
          <div className="text-primary text-center text-[14px]">Page Speed Share</div>
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default PageSpeed;
