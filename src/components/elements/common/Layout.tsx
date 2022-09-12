import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import SideBar from 'components/elements/common/SideBar';
import DashboardHeader from 'components/dashboard/Header';

import { useSelector, useDispatch } from 'redux/store';
import { isAuthenticatedAsync, clearState } from 'redux/reducers/authSlice';
import { fetchShopAsync, clearStatus } from 'redux/reducers/dashboardSlice';
import Loading from 'components/elements/common/Loading';

import { LayoutProps } from 'utility/typeDefinitions/componentTypes';

const Layout = ({ children }: LayoutProps) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  // dispatching authenticate me with the token stored in local storage
  useEffect(() => {
    dispatch(isAuthenticatedAsync(localStorage.getItem('token')));
  }, []);

  // destructuring the parameters of user state required from the global state
  const { isError, isFetching, isSuccess, token } = useSelector((state) => state.user);
  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      toast({ title: 'Login Required', status: 'error', isClosable: true, position: 'top-right' });
      navigator('/login');
    }
    if (isSuccess) {
      dispatch(fetchShopAsync(token));
    }
  }, [isError, isSuccess]);

  //
  const { status, errorMsg } = useSelector((state) => state.dashboard);
  useEffect(() => {
    if (status === 'error') {
      toast({
        title: errorMsg,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
      clearStatus();
    }
  }, [status]);

  return isFetching ? (
    <Loading />
  ) : (
    <div className="bg-background flex justify-around">
      <div className="">
        <SideBar />
      </div>
      <div className="flex-grow p-[30px]">
        <DashboardHeader />
        {status === 'success' ? (
          children
        ) : (
          <div className="w-full h-min-screen">
            <Loading message="Fetching Shops" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Layout;
