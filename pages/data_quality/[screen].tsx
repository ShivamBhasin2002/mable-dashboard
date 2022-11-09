import { Layout } from '@components/common';
import { useRouter } from 'next/router';
import Dashboard from 'pages/data_quality/dashboard';
import EventQuality from 'pages/data_quality/event_quality';
import OrderAnalysis from 'pages/data_quality/order_analysis';

const Screen = () => {
  const router = useRouter();
  const { screen } = router.query;

  switch (screen) {
    case 'dashboard':
      return (
        <Layout>
          <Dashboard />
        </Layout>
      );
    case 'event_quality':
      return (
        <Layout>
          <EventQuality />
        </Layout>
      );
    case 'order_analysis':
      return (
        <Layout>
          <OrderAnalysis />
        </Layout>
      );
    default:
      return null;
  }
};

export default Screen;
