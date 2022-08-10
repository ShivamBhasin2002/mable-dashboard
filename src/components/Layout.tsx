import React, { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';

import SideBar from 'components/SideBar';

import { useSelector, useDispatch } from 'redux/store';
import { isAuthenticatedAsync, clearState } from 'redux/reducers/userSlice';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const { isError, isFetching } = useSelector((state) => state.user);
  useEffect(() => {
    dispatch(isAuthenticatedAsync(localStorage.getItem('token')));
  }, []);
  useEffect(() => {
    if (isError) {
      dispatch(clearState());
      toast.error('Login Required');
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
