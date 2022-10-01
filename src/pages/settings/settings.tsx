import EmailChange from 'components/settings/email';
import NameChange from 'components/settings/name_photo';
import PasswordChange from 'components/settings/password';

const Settings = () => {
  return (
    <>
      <div className="flex flex-row justify-start gap-[15px]">
        <NameChange />
        <PasswordChange />
      </div>
      <EmailChange />
    </>
  );
};

export default Settings;
