import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Spinner, useToast } from '@chakra-ui/react';
import Icon from '@assets/icons';
import { TextField, CheckBox } from '@components/form';
import type { NextPage } from 'next';
import { useDispatch, useSelector } from '@redux/store';
import { loginAsync, clearState } from '@redux/reducers/authSlice';
import { routes, STATUS_TYPE } from '@utility/constants/enums';
import Head from 'next/head';

const Login: NextPage = () =>
{
  const disable = true;
  const toast = useToast();
  const router = useRouter();
  const dispatch = useDispatch();
  const { status, errorMsg, email } = useSelector((state) => state.user);
  useEffect(() =>
  {
    dispatch(clearState());
  }, []);
  useEffect(() =>
  {
    console.log("status,-> spinner ",status);
    if (status === STATUS_TYPE.ERROR)
    {
      toast({
        title: errorMsg,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
      dispatch(clearState());
    }
    if (status === STATUS_TYPE.SUCCESS)
    {
      dispatch(clearState());
      router.push(routes.dashboard, undefined, { shallow: false });
    }
    dispatch(clearState());
  }, [status]);
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r to-bgContainerTo from-bgContainerFrom justify-evenly items-center">
      <Head>
        <title>Login | Mable Ai</title>
        <meta name="description" content="Mable is a new kind of tracking tool that, with the help of a unique & innovative architecture, allows you to reliably track 100% of the conversions in your store again." />
        <link rel="icon" href="/mable.svg" />
      </Head>
      <main className="flex flex-col justify-center items-center text-light gap-[50px]">
        <header>
          <div className="text-center font-montserrat font-bold text-[60px]">Login</div>
          <div className="text-center font-lato text-2xl">
            Bring your analytics to the next level!
          </div>
        </header>
        <Formik
          initialValues={{
            email: email || '',
            password: '',
            rememberMe: false
          }}
          validationSchema={Yup.object({
            email: Yup.string().required('Please enter email'),
            password: Yup.string()
              .required('Please enter password')
              .min(8, 'Password should be at least 8 characters'),
            confirmPassword: Yup.string(),
            rememberMe: Yup.boolean()
          })}
          onSubmit={(values) =>
          {
            dispatch(loginAsync(values));
          }}
        >
          {(formik) => (
            <form
              className="w-[400px] md:w-[600px] flex flex-col gap-6"
              onSubmit={formik.handleSubmit}
            >
              <TextField
                label="Email"
                icon="email"
                type="email"
                name="email"
                placeholder="Enter email"
              />
              <TextField
                label="Password"
                icon="password"
                type="password"
                name="password"
                placeholder="Enter password"
              />
              <div className="px-3 flex justify-between">
                <CheckBox
                  size="lg"
                  colorScheme="blue"
                  className="rounded-[10ox] text-secondary"
                  name="rememberMe"
                  message="Remember me"
                />
                <Link className="font-lato text-primary" href="/">
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="p-3 font-montserrat font-bold text-xl rounded-xl shadow-lg shadow-secondary/40 bg-primary hover:bg-primary/50 flex gap-4 justify-center items-center"
              >
                {status === STATUS_TYPE.FETCHING && <Spinner />}
                Login
              </button>
            </form>
          )}
        </Formik>
        <div className="flex justify-between text-secondary w-[400px] md:w-[600px] items-center">
          <div className="flex gap-1">
            Don&apos;t have an account?
            {disable ? (
              <div className=" text-zinc-400">Register Now!</div>
            ) : (
              <Link className="text-light" href={routes.register}>
                Register Now!
              </Link>
            )}
          </div>
          <div className="flex items-center">
            <Icon icon="copyright" size="0.8rem" />
            2022 MableAi All Rights Reserved
          </div>
        </div>
      </main>
      <Icon icon="mableLogo" />
    </div>
  );
};

export default Login;
