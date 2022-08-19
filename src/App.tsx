import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Login from 'pages/Login';
import Register from 'pages/Register';
import Dashboard from 'pages/Dashboard';
import OrderAnalysis from 'pages/OrderAnalysis';
import EventQuality from 'pages/EventQuality';
import Layout from 'components/Layout';

import { useSelector } from 'redux/store';

const App = () => {
  const { screen } = useSelector((state) => state.general);
  return (
    <ChakraProvider>
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
