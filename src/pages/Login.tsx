import { Link, useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

import Icon from 'utility/icons';
import TextField from 'components/form/TextField';
import CheckBox from 'components/form/CheckBox';
import { login } from 'utility/auth';

const Login = () => {
  const navigator = useNavigate();
  return (
    <div className="flex flex-row min-h-screen bg-gradient-to-r to-bgContainer-to from-bgContainer-from">
      <main className="flex flex-col w-[50%] ml-auto justify-center items-center text-light gap-[50px]">
        <header>
          <div className="text-center font-heading font-bold text-[60px]">Login</div>
          <div className="text-center font-text text-2xl">
            Bring your analytics to the next level!
          </div>
        </header>
        <Formik
          initialValues={{
            email: '',
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
          onSubmit={async (values, actions) => {
            const res = await login(values);
            if (res) navigator('/dashboard');
            actions.resetForm();
          }}
        >
          {(formik) => (
            <form className="w-[600px] flex flex-col gap-6" onSubmit={formik.handleSubmit}>
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
                <Link className="font-text text-primary" to="/">
                  Forgot Password?
                </Link>
              </div>
              <button
                type="submit"
                className="p-3 font-heading font-bold text-xl rounded-xl shadow-lg shadow-secondary/40 text-center bg-primary hover:bg-primary/50"
              >
                Login
              </button>
            </form>
          )}
        </Formik>
        <div className="flex justify-between text-secondary w-[600px] items-center">
          <div>
            Don&apos;t have an account?{' '}
            <Link className="text-light" to="/register">
              Register Now!
            </Link>
          </div>
          <div className="flex items-center">
            <Icon icon="copyright" size="0.8rem" />
            2022 MableAi All Rights Reserved
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;