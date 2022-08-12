import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import SideBar from 'components/SideBar';
import DashboardHeader from 'components/dashboard/Header';

import { useSelector, useDispatch } from 'redux/store';
import { isAuthenticatedAsync, clearState } from 'redux/reducers/userSlice';
import { fetchShopAsync, setShop } from 'redux/reducers/dashboardSlice';
import Loading from 'components/Loading';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { isError, isFetching, isSuccess, token } = useSelector((state) => state.user);
  const { shops } = useSelector((state) => state.dashboard);
  useEffect(() => {
    dispatch(isAuthenticatedAsync(localStorage.getItem('token')));
  }, []);
  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      toast({ title: 'Login Required', status: 'error', isClosable: true, position: 'top-right' });
      navigator('/login');
    }
    if (isSuccess) {
      dispatch(fetchShopAsync(token));
      dispatch(setShop(shops ? shops[0] : undefined));
    }
  }, [isError, isSuccess]);
  return isFetching ? (
    <Loading />
  ) : (
    <div className="flex flex-row h-min-screen bg-background">
      <SideBar />
      <div className="w-full h-min-screen bg-background flex flex-col px-[30px] py-[30px]">
        <DashboardHeader />
        {children}
      </div>
    </div>
  );
};
export default Layout;
