import { useSelector } from 'redux/store';

const OrderComposition = () => {
  const { P_MDB, P_SH } = useSelector((state) => state.dataQuality);
  return (
    <div className="h-[105px] flex justify-between items-center bg-gradient-to-r to-bgContainer-from from-bgContainer-to p-2 rounded-[16px] shadow-2xl">
      <span>
        <div className=" text-[28px] leading-[34px] font-text text-center text-light">{P_SH}</div>
        <div className="text-primary text-center text-[13px]">Received by FB</div>
      </span>
      <span className="w-[2px] h-[50%] bg-lines rotate-12 mx-2" />
      <span>
        <div className=" text-[28px] leading-[34px] font-text text-center text-light">{P_MDB}</div>
        <div className="text-primary text-center text-[13px]">Shopify Orders</div>
      </span>
    </div>
  );
};

export default OrderComposition;
