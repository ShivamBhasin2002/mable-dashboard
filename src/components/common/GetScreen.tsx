import { screenType } from '@utility/constants/enums';
import Analytics from 'pages/analytics/reports';
import Dashboard from 'pages/data_quality/dashboard';
import EventQuality from 'pages/data_quality/event_quality';
import OrderAnalysis from 'pages/data_quality/order_analysis';
import Settings from 'pages/settings/account_settings';
import PrivacyCockpit from 'pages/settings/privacy_cockpit';

const GetScreen = ({ screen }: { screen: screenType }) => {
  switch (screen) {
    case screenType.dashboard:
      return <Dashboard />;
    case screenType.eventQuality:
      return <EventQuality />;
    case screenType.orderAnalysis:
      return <OrderAnalysis />;
    case screenType.analytics:
      return <Analytics />;
    case screenType.settings:
      return <Settings />;
    case screenType.privacyCockpit:
      return <PrivacyCockpit />;
    default:
      return null;
  }
};

export default GetScreen;
