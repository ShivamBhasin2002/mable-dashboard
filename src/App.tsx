import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Login from 'pages/auth/login';
import Register from 'pages/auth/register';
import Dashboard from 'pages/data_quality/dashboard';
import OrderAnalysis from 'pages/data_quality/order_analysis';
import EventQuality from 'pages/data_quality/event_quality';
import Layout from 'components/common/Layout';

import { useSelector } from 'redux/store';
import colors from 'utility/colors';
import Analytics from 'pages/Analytics';

const App = () => {
  const { activeScreen } = useSelector((state) => state.screen);
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/dashboard"
          element={
            <Layout>
              {activeScreen === 'Dashboard' && <Dashboard />}
              {activeScreen === 'Order Analysis' && <OrderAnalysis />}
              {activeScreen === 'Event Quality' && <EventQuality />}
              {activeScreen === 'Reports' && <Analytics />}
              {/* {screen === 'Settings' && null}
              {screen === 'Tutorial' && null} */}
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
