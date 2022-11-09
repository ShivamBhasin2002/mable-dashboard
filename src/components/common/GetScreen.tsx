import { GETSCREEN } from '@utility/constants/enums';
import Analytics from 'pages/analytics/reports';
import Dashboard from 'pages/data_quality/dashboard';
import EventQuality from 'pages/data_quality/event_quality';
import OrderAnalysis from 'pages/data_quality/order_analysis';
import Settings from 'pages/settings/account_settings';
import PrivacyCockpit from 'pages/settings/privacy_cockpit';

const GetScreen = (props: { screen: string | string[] | undefined }) => {
  switch (props.screen) {
    case GETSCREEN.dashboard:
      return (
          <Dashboard />
      );
    case GETSCREEN.eventQuality:
      return (
          <EventQuality />
      );
    case GETSCREEN.orderAnalysis:
      return (
          <OrderAnalysis />
      );
    case GETSCREEN.analytics:
      return (
          <Analytics />
      );
    case GETSCREEN.settings:
      return (
          <Settings />
      );
    case GETSCREEN.privacyCockpit:
      return (
          <PrivacyCockpit />
      );
    default:
      return null;
  }
};

export default GetScreen;
