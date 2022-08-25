import { FC } from 'react';

import Icon from 'assets/icons';

import { useSelector, useDispatch } from 'redux/store';
import { setScreen } from 'redux/reducers/generalSlice';

interface ViewFullReportProps {
  screen: 'Dashboard' | 'Order Analysis' | 'Event Quality' | 'Settings' | 'Tutorial';
}

const ViewFullReport: FC<ViewFullReportProps> = ({ screen }) => {
  const dispatch = useDispatch();
  const currScreen = useSelector((state) => state.general.screen);
  return (
    <div
      className="text-[13px] flex items-center gap-1 cursor-pointer text-lines"
      onClick={() => {
        if (currScreen !== screen) dispatch(setScreen(screen));
      }}
    >
      View Full Report <Icon icon="next" size="1.2rem" />
    </div>
  );
};

export default ViewFullReport;
