import ParameterSettings from 'components/settings/privacyCockpit/parameterSettings';
import PrivacySettings from 'components/settings/privacyCockpit/privacySettings';
import DeleteUserData from 'components/settings/privacyCockpit/deleteUserData';
import { useEffect } from 'react';
import { getPrivacySettings } from 'redux/reducers/privacyCockpitSlice';
import { useDispatch, useSelector } from 'redux/store';

function privacyCockpit() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPrivacySettings());
  }, []);

  const { status } = useSelector(
    (state) => state.privacyCockpit.previousSettingReducer.privacySettings
  );
  if (status === 'success') {
    return (
      <>
        <ParameterSettings />
        <PrivacySettings />
        <DeleteUserData />
      </>
    );
  } else {
    return <div>error</div>;
  }
}

export default privacyCockpit;
