import DeleteUserData from 'components/settings/privacyCockpit/deleteUserData';
import ParameterSettings from 'components/settings/privacyCockpit/parameterSettings';
import PrivacySettings from 'components/settings/privacyCockpit/privacySettings';
import { useEffect } from 'react';
import {
  getDeletedCustomer,
  getPrivacySettings,
  updateSettings
} from 'redux/reducers/privacyCockpitSlice';
import { useDispatch, useSelector } from 'redux/store';

function privacyCockpit() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrivacySettings());
    dispatch(getDeletedCustomer());
  }, []);

  const { status } = useSelector((state) => state.privacyCockpit.privacySettings);
  if (status === 'success') {
    dispatch(updateSettings());
    return (
      <div className="flex gap-4 mt-[20px]">
        <ParameterSettings />
        <div className="flex flex-col gap-4">
          <PrivacySettings />
          <DeleteUserData />
        </div>
      </div>
    );
  } else if (status === 'fetching') {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="flex gap-4 mt-[20px]">
        <ParameterSettings />
        <div className="flex flex-col gap-4">
          <PrivacySettings />
          <DeleteUserData />
        </div>
      </div>
    );
  }
}

export default privacyCockpit;
