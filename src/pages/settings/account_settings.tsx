import { Layout } from '@components/common';
import EmailChange from '@components/settings/accountSettings/email';
import EventUsage from '@components/settings/accountSettings/eventUsage';
import NameChange from '@components/settings/accountSettings/name_photo';
import PasswordChange from '@components/settings/accountSettings/password';

const Settings = () => (
  <>
    <div className="flex flex-row flex-wrap gap-5">
      <NameChange />
      <PasswordChange />
      <EmailChange />
    </div>
    <EventUsage />
  </>
);

export default Settings;
