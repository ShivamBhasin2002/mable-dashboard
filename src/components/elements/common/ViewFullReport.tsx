import Icon from 'assets/icons';

import { useSelector, useDispatch } from 'redux/store';
import { setScreen } from 'redux/reducers/generalSlice';

import { ViewFullReportProps } from 'utility/typeDefinitions/componentTypes';

const ViewFullReport = ({ screen }: ViewFullReportProps) => {
  const dispatch = useDispatch();
  const currScreen = useSelector((state) => state.general.screen);
  return (
    <div
      className="text-[13px] flex items-center gap-[10px] cursor-pointer text-lines"
      onClick={() => {
        if (currScreen !== screen) dispatch(setScreen(screen));
      }}
    >
      View Full Report <Icon icon="next" size="1.2rem" />
    </div>
  );
};

export default ViewFullReport;
