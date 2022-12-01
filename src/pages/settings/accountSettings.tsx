import EmailChange from 'components/settings/accountSettings/email';
import EventUsage from 'components/settings/accountSettings/eventUsage';
import PasswordChange from 'components/settings/accountSettings/password';

const Settings = () => (
  <>
    <div className="flex flex-row flex-wrap gap-2">
      <PasswordChange />
      <EmailChange />
    </div>
    <EventUsage />
  </>
);

export default Settings;
