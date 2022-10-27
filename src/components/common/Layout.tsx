import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useToast } from '@chakra-ui/react';

import SideBar from 'components/sidebar/SideBar';
import DashboardHeader from 'components/common/Header';
import Loading from 'components/common/Loading';

import { useSelector, useDispatch } from 'redux/store';
import { isAuthenticatedAsync, clearState } from 'redux/reducers/authSlice';
import { shopAsync } from 'redux/reducers/shopSlice';

import { LayoutProps } from 'utility/typeDefinitions/componentPropTypes';
import { routes, STATUS_TYPE } from 'utility/constants/enums';

const Layout = ({ children }: LayoutProps) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const navigator = useNavigate();

  // destructuring the parameters of user state required from the global state
  const { status, token } = useSelector((state) => state.user);

  // dispatching authenticate me with the token stored in local storage
  useEffect(() => {
    dispatch(isAuthenticatedAsync(token));
  }, []);

  useEffect(() => {
    if (status === STATUS_TYPE.ERROR) {
      dispatch(clearState());
      toast({ title: 'Login Required', status: 'error', isClosable: true, position: 'top-right' });
      navigator(routes.login);
    }
    if (status === STATUS_TYPE.SUCCESS) {
      dispatch(shopAsync());
    }
  }, [status]);

  //
  const { status: shopStatus, errorMsg } = useSelector((state) => state.shop);

  useEffect(() => {
    if (shopStatus === STATUS_TYPE.ERROR) {
      toast({
        title: errorMsg,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [shopStatus, status]);

  return shopStatus === STATUS_TYPE.FETCHING || shopStatus === STATUS_TYPE.IDLE ? (
    <Loading className="h-screen w-screen" />
  ) : (
    <div className="bg-background flex max-w-screen min-h-screen">
      <SideBar />
      <div className="flex-grow p-[30px]">
        <DashboardHeader />
        {status === 'success' ? (
          children
        ) : (
          <div className="w-full min-h-screen">
            <Loading message="Fetching Shops" className="h-screen" />
          </div>
        )}
      </div>
    </div>
  );
};
export default Layout;
