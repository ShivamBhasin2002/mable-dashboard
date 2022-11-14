import { useEffect } from 'react';
import { Loading } from 'components/common';
import DeleteUserData from 'components/settings/privacyCockpit/deleteUserData';
import ParameterSettings from 'components/settings/privacyCockpit/parameterSettings';
import PrivacySettings from 'components/settings/privacyCockpit/privacySettings';

import {
  getDeletedCustomer,
  fetchSettings
} from 'redux/reducers/settings/privacyCockpit/privacyCockpitSlice';
import { useDispatch, useSelector } from 'redux/store';
import { STATUS_TYPE } from 'utility/constants/enums';

function privacyCockpit() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSettings());
    dispatch(getDeletedCustomer());
  }, []);

  const { status } = useSelector((state) => state.privacyCockpit.previousSettings);

  if (status === STATUS_TYPE.FETCHING) {
    return <Loading message="Fetching Saved Settings" />;
  }
  if (status === STATUS_TYPE.SUCCESS) {
    return (
      <div className="flex flex-col xl:flex-row  w-full justify-between gap-2 flex-grow-[1] h-full">
        <div className="xl:w-60 h-100">
          <ParameterSettings />
        </div>
        <div className="flex flex-col gap-2 xl:w-40 h-100">
          <PrivacySettings />
          <DeleteUserData />
        </div>
      </div>
    );
  }
  if (status === STATUS_TYPE.IDLE) {
    return <div>Idle</div>;
  }
  return <div>Some error occured !</div>;
}

export default privacyCockpit;
