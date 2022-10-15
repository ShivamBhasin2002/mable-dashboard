import EmailChange from 'components/settings/accountSettings/email';
import NameChange from 'components/settings/accountSettings/name_photo';
import PasswordChange from 'components/settings/accountSettings/password';

const Settings = () => {
  return (
    <div className="flex flex-row">
      <div className="flex flex-col mr-[20px]">
        <NameChange />
        <EmailChange />
      </div>
      <PasswordChange />
    </div>
  );
};

export default Settings;
