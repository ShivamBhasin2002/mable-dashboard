import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@chakra-ui/react';

import Icon from 'utility/icons';
import TextField from 'components/form/TextField';
import CheckBox from 'components/form/CheckBox';

import { register } from 'utility/auth';

const Login = () => {
  return (
    <div className="flex flex-row min-h-screen bg-gradient-to-r to-bgContainer-to from-bgContainer-from">
      <main className="flex flex-col w-[50%] ml-auto justify-center items-center text-light gap-[50px]">
        <header>
          <div className="text-center font-heading font-bold text-[60px]">Register</div>
          <div className="text-center font-text text-2xl">
            Bring your analytics to the next level!
          </div>
        </header>
        <Formik
          initialValues={{
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            acceptTermsAndConditions: false
          }}
          validationSchema={Yup.object({
            firstName: Yup.string().required('Please enter first name'),
            lastName: Yup.string().required('Please enter last name'),
            email: Yup.string().required('Please enter email'),
            password: Yup.string()
              .required('Please enter password')
              .min(8, 'Password should be at least 8 characters'),
            confirmPassword: Yup.string()
              .required('Please re-enter password')
              .oneOf([Yup.ref('password')], 'Your passwords do not match'),
            acceptTermsAndConditions: Yup.boolean().oneOf(
              [true],
              'Accept Terms and conditions is required'
            )
          })}
          onSubmit={(values, actions) => {
            register(values);
          }}
        >
          {(formik) => (
            <form className="w-[600px] flex flex-col gap-6" onSubmit={formik.handleSubmit}>
              <div className="flex gap-[20px]">
                <TextField label="First Name" type="text" name="firstName" />
                <TextField label="Last Name" type="text" name="lastName" />
              </div>
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
              <TextField
                icon="password"
                type="password"
                name="confirmPassword"
                placeholder="Confirm password"
              />
              <div className="px-3">
                <CheckBox
                  size="lg"
                  colorScheme="blue"
                  className="rounded-[10ox] text-secondary"
                  name="acceptTermsAndConditions"
                  message="I agree with MableAI Terms & Conditions"
                />
              </div>
              <Button
                type="submit"
                className="p-3 font-heading font-bold text-xl rounded-xl shadow-lg shadow-secondary/40 text-center bg-primary hover:bg-primary/50"
              >
                Register
              </Button>
            </form>
          )}
        </Formik>
        <div className="flex justify-between text-secondary w-[600px] items-center">
          <div>
            Already have an account?{' '}
            <Link className="text-light" to="/login">
              Login Now!
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
