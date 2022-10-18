import ParameterSettings from 'components/settings/privacyCockpit/parameterSettings';
import PrivacySettings from 'components/settings/privacyCockpit/privacySettings';
import DeleteUserData from 'components/settings/privacyCockpit/deleteUserData';

function privacyCockpit() {
  return (
    <>
      <ParameterSettings />
      <PrivacySettings />
      <DeleteUserData />
    </>
  );
}

export default privacyCockpit;
