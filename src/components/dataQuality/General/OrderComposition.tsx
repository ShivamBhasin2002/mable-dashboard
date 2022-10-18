import { useSelector } from 'redux/store';
import { numberReducer } from 'utility/functions/formattingFunctions';

const OrderComposition = () => {
  const { FACEBOOK_SUCCESS_DELIVERED_ORDERS, TOTAL_SHOPIFY_ORDERS } = useSelector(
    (state) => state.dataQuality
  );
  return (
    <div className="h-[105px] w-[230px] flex justify-between items-center bg-gradient-to-tr from-[#1D2E4B] to-bgContainerFrom p-2 rounded-[16px] drop-shadow-xl">
      <span>
        <div className=" text-[28px] leading-[34px] font-lato text-center text-light">
          {numberReducer(FACEBOOK_SUCCESS_DELIVERED_ORDERS)}
        </div>
        <div className="text-primary text-center text-[13px]">Received by FB</div>
      </span>
      <span className="w-[2px] h-[45%] bg-lines rotate-12" />
      <span>
        <div className=" text-[28px] leading-[34px] font-lato text-center text-light">
          {numberReducer(TOTAL_SHOPIFY_ORDERS)}
        </div>
        <div className="text-primary text-center text-[13px]">Shopify Orders</div>
      </span>
    </div>
  );
};

export default OrderComposition;
