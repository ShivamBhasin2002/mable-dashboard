import { useRouter } from 'next/router';
import { useToast } from '@chakra-ui/react';

import { GetScreen, Error, Loading, Header } from '@components/common';
import { routes, screenType, STATUS_TYPE } from '@utility/constants/enums';
import { URLtoScreen } from '@utility/functions/mappingFunctions';
import { useDispatch, useSelector } from '@redux/store';
import { clearState, isAuthenticatedAsync, setToken } from '@redux/reducers/authSlice';
import { setScreen } from '@redux/reducers/screenSlice';
import { useEffect, useMemo } from 'react';
import { shopAsync } from '@redux/reducers/shopSlice';
import SideBar from '@components/sidebar/SideBar';
import { shopNotFoundErrorMessage } from '@utility/constants/strings';
import Head from 'next/head';

const Screen = () => {
  const router = useRouter();
  const toast = useToast();
  const dispatch = useDispatch();

  // destructuring the parameters of user state required from the global state
  const { status, token } = useSelector((state) => state.user);

  // dispatching authenticate me with the token stored in local storage
  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    if (storedToken) dispatch(setToken(storedToken));
    dispatch(isAuthenticatedAsync(storedToken ?? token));
  }, []);

  useMemo(() => {
    if (status === STATUS_TYPE.ERROR) {
      dispatch(clearState());
      router.push('/auth/login', undefined, { shallow: true });
    }
    if (status === STATUS_TYPE.SUCCESS) {
      dispatch(shopAsync());
    }
  }, [status]);

  // Shop fetching and checking for errors
  const { status: shopStatus, errorMsg } = useSelector((state) => state.shop);
  useMemo(() => {
    if (shopStatus === STATUS_TYPE.ERROR) {
      toast({
        title: errorMsg,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
    }
  }, [shopStatus, status]);

  // Setting screen according to route
  const screen = URLtoScreen(router.asPath) ?? screenType.dashboard;
  useMemo(() => dispatch(setScreen(screen)), [screen]);

  return (
    <div className="bg-background flex max-w-screen h-screen">
       <Head>
        <title>{`${screen} | Mable Ai`}</title>
        <meta name="description" content="Mable is a new kind of tracking tool that, with the help of a unique & innovative architecture, allows you to reliably track 100% of the conversions in your store again." />
        <link rel="icon" href="/mable.svg" />
      </Head>

      {shopStatus === STATUS_TYPE.ERROR && <Error header={shopNotFoundErrorMessage} />}
      <SideBar />
      {status === STATUS_TYPE.FETCHING ||
      status === STATUS_TYPE.IDLE ||
      shopStatus === STATUS_TYPE.IDLE ||
      shopStatus === STATUS_TYPE.FETCHING ? (
        <Loading />
      ) : (
        <div className="flex-grow p-[30px] flex flex-col">
          <Header />
          {status === STATUS_TYPE.SUCCESS ? (
            <main className="flex-grow overflow-y-scroll">
              <GetScreen screen={screen} />
            </main>
          ) : (
            <div className="w-full min-h-screen">
              <Loading message="Fetching Shops" className="h-screen" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Screen;
