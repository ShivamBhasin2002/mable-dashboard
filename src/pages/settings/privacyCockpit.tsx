import {
  ParameterSettings,
  PrivacySettings,
  DeleteUserData
} from 'components/settings/privacyCockpit';
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
      <>
        <ParameterSettings />
        <PrivacySettings />
        <DeleteUserData />
      </>
    );
  } else if (status === 'fetching') {
    return <div>Loading...</div>;
  } else {
    return (
      <>
        <ParameterSettings />
        <PrivacySettings />
        <DeleteUserData />
      </>
    );
  }
}

export default privacyCockpit;
