import EmailChange from 'components/settings/email';
import NameChange from 'components/settings/name_photo';
import PasswordChange from 'components/settings/password';

const Settings = () => {
  return (
    <div className="flex flex-row flex-wrap gap-[20px]">
      <NameChange />
      <EmailChange />
      <PasswordChange />
    </div>
  );
};

export default Settings;
