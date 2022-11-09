import { Layout } from '@components/common';
import { useRouter } from 'next/router';
import Settings from 'pages/settings/account_settings';
import PrivacyCockpit from 'pages/settings/privacy_cockpit';

const Screen = () => {
  const router = useRouter();
  const { screen } = router.query;

  switch (screen) {
    case 'account_settings':
      return (
        <Layout>
          <Settings />
        </Layout>
      );
    case 'privacy_cockpit':
      return (
        <Layout>
          <PrivacyCockpit />
        </Layout>
      );
    default:
      return null;
  }
};

export default Screen;
