import EmailChange from 'components/settings/email';
import NameChange from 'components/settings/name_photo';
import PasswordChange from 'components/settings/password';
import { useSelector } from 'redux/store';

const Settings = () => {
  const user = useSelector((state) => state.user);
  console.log(user);

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
