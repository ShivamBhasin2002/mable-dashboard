import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Login from 'pages/auth/login';
import Register from 'pages/auth/register';
import Dashboard from 'pages/data_quality/dashboard';
import OrderAnalysis from 'pages/data_quality/order_analysis';
import EventQuality from 'pages/data_quality/event_quality';
import Analytics from 'pages/data_quality/analytics_report';
import Layout from 'components/common/Layout';

import colors from 'utility/colors';
import AccountSettings from 'pages/settings/accountSettings';
import PrivacyCockpit from 'pages/settings/privacyCockpit';
import { useEffect } from 'react';
import { setScreen } from 'redux/reducers/screenSlice';
import { URLtoScreen } from 'utility/functions/mappingFunctions';
import { useDispatch, useSelector } from 'redux/store';
import { routes } from 'utility/constants/enums';

const App = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.user);
  const theme = extendTheme({
    components: {
      Progress: {
        baseStyle: {
          filledTrack: {
            bg: colors.success
          }
        }
      }
    }
  });
  useEffect(() => {
    if (token) dispatch(setScreen(URLtoScreen(location.pathname)));
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path={routes.login} element={<Login />} />
        <Route path={routes.register} element={<Register />} />
        <Route
          path={routes.dashboard}
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path={routes.orderAnalysis}
          element={
            <Layout>
              <OrderAnalysis />
            </Layout>
          }
        />
        <Route
          path={routes.eventQuality}
          element={
            <Layout>
              <EventQuality />
            </Layout>
          }
        />
        <Route
          path={routes.analytics}
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />
        <Route
          path={routes.settings}
          element={
            <Layout>
              <AccountSettings />
            </Layout>
          }
        />
        <Route
          path={routes.privacyCockpit}
          element={
            <Layout>
              <PrivacyCockpit />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to={routes.dashboard} />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
