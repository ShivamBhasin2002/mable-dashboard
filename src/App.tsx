import { Routes, Route, Navigate } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Register from 'pages/Register';
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
              {screen === 'Order Analysis' && <Dashboard />}
              {screen === 'Event Quality' && null}
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
