import { useEffect } from "react";

import { ComponentWrapper } from "@components/common";
import { ViewFullReport } from "@components/dataQuality/Common";
import {
  QualityCombined,
  OrderComposition,
} from "@components/dataQuality/General";
import { DataQualityLineChart } from "@components/dataQuality/Graphs";
import { screenType, STATUS_TYPE } from "@utility/constants/enums";

import { useSelector, useDispatch } from "@redux/store";
import { dataQualityAsync } from "@redux/reducers/dataQuality/dataQualitySlice";

const DataQualityCard = () => {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.dataQuality);
  const refresh = useSelector((state) => state.dates.refresh);
  useEffect(() => {
    if (status !== STATUS_TYPE.FETCHING) dispatch(dataQualityAsync());
  }, [refresh]);
  return (
    <ComponentWrapper
      title="Data Quality"
      nextComponent={<ViewFullReport screen={screenType.orderAnalysis} />}
      status={status}
    >
      <div className="flex flex-row justify-evenly items-center h-full flex-wrap lg:flex-nowrap gap-8">
        <div className="flex-grow flex flex-row lg:flex-col gap-4 justify-evenly items-center lg:h-full">
          <QualityCombined />
          <OrderComposition />
        </div>
        <div className="flex-grow h-full">
          <DataQualityLineChart />
        </div>
      </div>
    </ComponentWrapper>
  );
};
export default DataQualityCard;
