import EmailChange from 'components/settings/accountSettings/email';
import NameChange from 'components/settings/accountSettings/name_photo';
import PasswordChange from 'components/settings/accountSettings/password';

const Settings = () => (
  <div className="flex flex-row flex-wrap gap-5">
    <NameChange />
    <PasswordChange />
    <EmailChange />
  </div>
);

export default Settings;
