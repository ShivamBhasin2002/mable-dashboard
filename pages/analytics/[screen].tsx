import { Layout } from '@components/common';
import { useRouter } from 'next/router';
import Analytics from 'pages/analytics/reports';

const Screen = () => {
  const router = useRouter();
  const { screen } = router.query;

  switch (screen) {
    case 'report':
      return (
        <Layout>
          <Analytics />
        </Layout>
      );
    default:
      return null;
  }
};

export default Screen;
