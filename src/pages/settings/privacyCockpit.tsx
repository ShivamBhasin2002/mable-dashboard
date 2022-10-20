import ParameterSettings from 'components/settings/privacyCockpit/parameterSettings';
import PrivacySettings from 'components/settings/privacyCockpit/privacySettings';
import DeleteUserData from 'components/settings/privacyCockpit/deleteUserData';
import { useEffect } from 'react';
import { getPrivacySettings, updateSettings } from 'redux/reducers/privacyCockpitSlice';
import { useDispatch, useSelector } from 'redux/store';

function privacyCockpit() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrivacySettings());
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
