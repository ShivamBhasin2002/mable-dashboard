import { FC } from "react";
import ComponentWrapper from "./ComponentWrapper";

interface FundamentalAnalysisProps {
  data: {
    "Page View": number;
    "Add to Cart": number;
    "Initiate Checkout ": number;
    "Add Payment Info": number;
    Purchase: number;
  };
}

const FundamentalAnalysis: FC<FundamentalAnalysisProps> = ({data}) => {
  return <ComponentWrapper width={600} title="Funnel Analysis">
    <div className="flex flex-row gap-2">
        {Object.keys(data).map((item,i)=>(
            <span className="flex flex-col" key={i}>
                <div className={``}></div>
            </span>
        ))}
        </div>
  </ComponentWrapper>;
};

export default FundamentalAnalysis;
