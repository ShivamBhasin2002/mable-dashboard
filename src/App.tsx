import { useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
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
import DataProcessingSettings from 'pages/settings/data_processing_settings';
import { screenToURL } from 'utility/functions/mappingFunctions';

import { useSelector } from 'redux/store';

const App = () => {
  const { activeScreen } = useSelector((state) => state.screen);
  const navigator = useNavigate();
  useEffect(() => {
    const path = screenToURL(activeScreen);
    if (path) navigator(path);
  }, [activeScreen]);
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
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route
          path="/data_quality/dashboard"
          element={
            <Layout>
              <Dashboard />
            </Layout>
          }
        />
        <Route
          path="/data_quality/order_analysis"
          element={
            <Layout>
              <OrderAnalysis />
            </Layout>
          }
        />
        <Route
          path="/data_quality/event_quality"
          element={
            <Layout>
              <EventQuality />
            </Layout>
          }
        />
        <Route
          path="/data_quality/order_analysis"
          element={
            <Layout>
              <OrderAnalysis />
            </Layout>
          }
        />
        <Route
          path="/analytics/reports"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />
        <Route
          path="/settings/account_settings"
          element={
            <Layout>
              <AccountSettings />
            </Layout>
          }
        />
        <Route
          path="/settings/privacy_cockpit"
          element={
            <Layout>
              <PrivacyCockpit />
            </Layout>
          }
        />
        <Route
          path="/settings/data_processing"
          element={
            <Layout>
              <DataProcessingSettings />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
