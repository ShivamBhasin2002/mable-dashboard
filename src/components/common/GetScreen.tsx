import { GETSCREEN } from '@utility/constants/enums';
import Dashboard from 'pages/data_quality/dashboard';

const GetScreen = (props: { screen: string | string[] | undefined }) => {
  switch (props.screen) {
    case GETSCREEN.dashboard:
      return (
          <Dashboard />
      );
    case GETSCREEN.eventQuality:
      return (
          <div className="">Event Quality</div>
      );
    case GETSCREEN.orderAnalysis:
      return (
          <div className="">Order Analysis</div>
      );
    case GETSCREEN.analytics:
      return (
          <div className="">Reports</div>
      );
    case GETSCREEN.settings:
      return (
          <div className="">Settings</div>
      );
    case GETSCREEN.privacyCockpit:
      return (
          <div className="">Privacy Cockpit</div>
      );
    default:
      return null;
  }
};

export default GetScreen;
