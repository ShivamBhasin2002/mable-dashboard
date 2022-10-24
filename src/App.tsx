import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Login from 'pages/auth/login';
import Register from 'pages/auth/register';
import Dashboard from 'pages/data_quality/dashboard';
import OrderAnalysis from 'pages/data_quality/order_analysis';
import EventQuality from 'pages/data_quality/event_quality';
import Analytics from 'pages/data_quality/analytics_report';
import Layout from 'components/common/Layout';

import colors from 'utility/colors';
import Settings from 'pages/settings/settings';

const App = () => {
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
          path="/analytics/reports"
          element={
            <Layout>
              <Analytics />
            </Layout>
          }
        />
        <Route
          path="/settings"
          element={
            <Layout>
              <Settings />
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/auth/login" />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
