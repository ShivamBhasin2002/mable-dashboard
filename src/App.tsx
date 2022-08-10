import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Layout from 'components/Layout';

import { useDispatch } from 'redux/store';
import { clearState } from 'redux/reducers/userSlice';

const ProtectedRoute = () => {
  // if (false) {
  //   return <Navigate to="/login" replace />;
  // }
  return <Outlet />;
};

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    return () => {
      dispatch(clearState());
    };
  }, []);

  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute />}>
            <Route
              path="/dashboard"
              element={
                <Layout>
                  <Dashboard />
                </Layout>
              }
            />
          </Route>
        </Routes>
      </Router>
    </ChakraProvider>
  );
  // return <>Page not developed yet</>;
};

export default App;
