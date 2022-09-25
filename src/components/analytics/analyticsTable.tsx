import { useSelector } from 'redux/store';

const AnalyticsTable = () => {
  const { PageView, AddToCart, AddPaymentInfo, Purchase, InitiateCheckout } = useSelector(
    (state) => state.analytics
  );

  console.log(PageView,AddToCart, AddPaymentInfo, Purchase, InitiateCheckout);
  
  return (
    <table className="w-full table-auto my-[10px]">
      <thead>
        <tr className="[&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-extrabold [&>*]:py-[12px] [&>*]:px-[20px] [&>*]:whitespace-nowrap">
          <td className="bg-primary rounded-tl-[10px]">Day</td>
          {PageView ? <td className="bg-primary">Page View</td> : null}
          {AddToCart ? <td className="bg-primary">Add to Cart</td> : null}
          {InitiateCheckout ? <td className="bg-primary">Initiate Checkout</td> : null}
          {AddPaymentInfo ? <td className="bg-primary">Payment Info</td> : null}
          {Purchase ? <td className="bg-primary">Purchase</td> : null}
        </tr>
      </thead>
      <tbody className="last-of:rounded-b-[10px]">
        <tr
          className={`bg-tableStrips/[0.5] [&>*]:font-montserrat [&>*]:text-[14px] [&>*]:font-normal [&>*]:py-[12px] [&>*]:px-[20px]`}
        >
          <td>Day</td>
          {PageView ? <td>Page View</td> : null}
          {AddToCart ? <td>Add to Cart</td> : null}
          {InitiateCheckout ? <td>Initiate Checkout</td> : null}
          {AddPaymentInfo ? <td>Payment Info</td> : null}
          {Purchase ? <td>Purchase</td> : null}
        </tr>
        
      </tbody>
    </table>
  );
};

export default AnalyticsTable;
