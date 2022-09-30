import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import SideBar from 'components/common/SideBar';
import DashboardHeader from 'components/common/Header';
import Loading from 'components/common/Loading';

import { useSelector, useDispatch } from 'redux/store';
import { isAuthenticatedAsync, clearState } from 'redux/reducers/authSlice';
import { shopAsync } from 'redux/reducers/shopSlice';

import { LayoutProps } from 'utility/typeDefinitions/componentPropTypes';
import { STATUS_TYPE } from 'utility/constants/general';

const Layout = ({ children }: LayoutProps) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  // dispatching authenticate me with the token stored in local storage
  useEffect(() => {
    dispatch(isAuthenticatedAsync(localStorage.getItem('token')));
  }, []);

  // destructuring the parameters of user state required from the global state
  const { status } = useSelector((state) => state.user);
  useEffect(() => {
    if (status === STATUS_TYPE.ERROR) {
      dispatch(clearState());
      toast({ title: 'Login Required', status: 'error', isClosable: true, position: 'top-right' });
      navigator('/login');
    }
    if (status === STATUS_TYPE.SUCCESS) {
      dispatch(shopAsync());
    }
  }, [status]);

  //
  const { status: shopStatus, errorMsg } = useSelector((state) => state.shop);
  useEffect(() => {
    if (status === 'error') {
      toast({
        title: errorMsg,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [shopStatus, status]);

  return shopStatus === STATUS_TYPE.FETCHING || shopStatus === STATUS_TYPE.IDLE ? (
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
