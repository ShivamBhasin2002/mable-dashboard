import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import SideBar from 'components/SideBar';

import { useSelector, useDispatch } from 'redux/store';
import { isAuthenticatedAsync, clearState } from 'redux/reducers/userSlice';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { isError, isFetching } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(isAuthenticatedAsync(localStorage.getItem('token')));
  }, []);
  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      toast({ title: 'Login Required', status: 'error', isClosable: true, position: 'top-right' });
      navigator('/login');
    }
  }, [isError]);
  return isFetching ? (
    <div className="flex flex-row items-center justify-center h-min-screen bg-background h-screen">
      lOADING
    </div>
  ) : (
    <div className="flex flex-row h-min-screen bg-background">
      <SideBar />
      {children}
    </div>
  );
};
export default Layout;
