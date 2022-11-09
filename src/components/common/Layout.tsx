import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

import SideBar from '@components/sidebar/SideBar';
import { Loading, Header, Error } from '@components/common/';

import { useSelector, useDispatch } from '@redux/store';
import { isAuthenticatedAsync, clearState, setToken } from '@redux/reducers/authSlice';
import { shopAsync } from '@redux/reducers/shopSlice';

import { LayoutProps } from '@utility/typeDefinitions/componentPropTypes';
import { routes, STATUS_TYPE } from '@utility/constants/enums';
import { shopNotFoundErrorMessage } from '@utility/constants/strings';

const Layout = ({ children }: LayoutProps) => {
  const toast = useToast();
  const dispatch = useDispatch();
  const router = useRouter();

  // destructuring the parameters of user state required from the global state
  const { status, token } = useSelector((state) => state.user);

  // dispatching authenticate me with the token stored in local storage
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) dispatch(setToken(storedToken));
    dispatch(isAuthenticatedAsync(storedToken ?? token));
  }, []);

  useEffect(() => {
    if (status === STATUS_TYPE.ERROR) {
      dispatch(clearState());
      router.push(routes.login);
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

  if (
    status === STATUS_TYPE.FETCHING ||
    status === STATUS_TYPE.IDLE ||
    shopStatus === STATUS_TYPE.IDLE ||
    shopStatus === STATUS_TYPE.FETCHING
  )
    return <Loading className="h-screen w-screen" />;

  return (
    <div className="bg-background flex max-w-screen min-h-screen hd:h-screen">
      {shopStatus === STATUS_TYPE.ERROR && <Error header={shopNotFoundErrorMessage} />}
      <SideBar />
      <div className="flex-grow p-[30px] flex flex-col">
        <Header />
        {status === STATUS_TYPE.SUCCESS ? (
          <main className="flex-grow h-max">{children}</main>
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
