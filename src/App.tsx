import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import Login from 'pages/Login';
import Register from 'pages/Register';
import Dashboard from 'pages/Dashboard';
import OrderAnalysis from 'pages/OrderAnalysis';
import EventQuality from 'pages/EventQuality';
import Layout from 'components/elements/common/Layout';

import { useSelector } from 'redux/store';
import colors from 'utility/colors';

const App = () => {
  const { screen } = useSelector((state) => state.general);
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
              {screen === 'Dashboard' && <Dashboard />}
              {screen === 'Order Analysis' && <OrderAnalysis />}
              {screen === 'Event Quality' && <EventQuality />}
              {screen === 'Settings' && null}
              {screen === 'Tutorial' && null}
            </Layout>
          }
        />
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
