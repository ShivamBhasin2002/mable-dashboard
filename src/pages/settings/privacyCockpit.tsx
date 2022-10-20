import ParameterSettings from 'components/settings/privacyCockpit/parameterSettings';
import PrivacySettings from 'components/settings/privacyCockpit/privacySettings';
import DeleteUserData from 'components/settings/privacyCockpit/deleteUserData';

function privacyCockpit() {
  return (
    <>
      <div className="flex  h-full w-full">
        <div className="w-60">
          <ParameterSettings />
        </div>
        <div className="w-50 h-90 px-5">
          <div className="h-50 w-full">
            <PrivacySettings />
          </div>
          <div className="h-30 w-full">
            <DeleteUserData />
          </div>
        </div>
      </div>
    </>
  );
}

export default privacyCockpit;
