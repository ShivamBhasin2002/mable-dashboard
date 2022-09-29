import Icon from 'assets/icons';

import { useSelector, useDispatch } from 'redux/store';
import { setScreen } from 'redux/reducers/screenSlice';

import { ViewFullReportProps } from 'utility/typeDefinitions/componentTypes';

const ViewFullReport = ({ screen }: ViewFullReportProps) => {
  const dispatch = useDispatch();
  const { activeScreen } = useSelector((state) => state.screen);
  return (
    <div
      className="text-[13px] flex items-center gap-[10px] cursor-pointer text-lines whitespace-nowrap"
      onClick={() => {
        if (activeScreen !== screen) dispatch(setScreen(screen));
      }}
    >
      View Full Report <Icon icon="next" size="1.2rem" />
    </div>
  );
};

export default ViewFullReport;