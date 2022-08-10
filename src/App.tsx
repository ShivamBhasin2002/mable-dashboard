import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, Outlet } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';

import Dashboard from 'pages/Dashboard';
import Login from 'pages/Login';
import Register from 'pages/Register';
import Layout from 'components/Layout';

import { isAuthenticated } from 'utility/auth';

import { RootState } from './redux/store';

//eslint-disable-next-line
const ProtectedRoute = ({ user }: any) => {
  console.log(user);
  if (!user.isLoggedIn) {
    return <Navigate to="/login" replace />;
  }
  return <Outlet />;
};

const App = () => {
  const [loading, setLoading] = useState(true);
  const user = useSelector<RootState>((state) => state.user);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   isAuthenticated().then((res) => {
  //     dispatch(loginUser(res));
  //     setLoading(false);
  //   });
  // }, []);
  // if (!loading)
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<ProtectedRoute user={user} />}>
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
