import {FC} from 'react';
import ComponentWrapper from "./ComponentWrapper";
import Icon from "../../data/icons";

interface WarningCenterProps {
  data: {
    message: string;
    icon: string;
  }
}


const WarningCenter:FC<WarningCenterProps> = ({data}) => {
  return (
    <ComponentWrapper
      title="Warning Center"
      color="bgPrimary-dark"
      textColor="bgPrimary"
      width={600}
    >
      <hr className="h-[2px] border-none my-[10px] bg-[#7F8C9F]/20" />
      <div className='flex justify-between text-3xl items-center font-bold'>
        {data.message}
        <span className='text-error'><Icon icon='alert'/></span>
      </div>
    </ComponentWrapper>
  );
};
export default WarningCenter;
