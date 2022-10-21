import ParameterSettings from 'components/settings/privacyCockpit/parameterSettings';
import PrivacySettings from 'components/settings/privacyCockpit/privacySettings';
import DeleteUserData from 'components/settings/privacyCockpit/deleteUserData';

function privacyCockpit() {
  return (
    <>
      <div className="flex   w-full">
        <div className="w-60 h-auto">
          <ParameterSettings />
        </div>
        <div className="w-40 h-100 px-5">
          <div className="h-50 w-full">
            <PrivacySettings />
          </div>
          <div className="h-50 w-full">
            <DeleteUserData />
          </div>
        </div>
      </div>
    </>
  );
}

export default privacyCockpit;
