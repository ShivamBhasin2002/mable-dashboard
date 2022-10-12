import { Button, useToast } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';
import { useDispatch, useSelector } from 'redux/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '@chakra-ui/react';
import { TextField } from 'components/form';
import { STATUS_TYPE } from 'utility/constants/general';
import { updatePassword } from 'redux/reducers/updateAccountInfoSlice';
import { useEffect } from 'react';

const PasswordChange = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { status, errorMsg } = useSelector((state) => state.accountSetting);
  useEffect(() => {
    if (status === STATUS_TYPE.ERROR) {
      toast({ title: `${errorMsg}`, status: 'error', isClosable: true, position: 'top-right' });
    }
    if (status === STATUS_TYPE.SUCCESS) {
      toast({ title: `${errorMsg}`, status: 'success', isClosable: true, position: 'top-right' });
    }
  }, [status]);
  return (
    <ComponentWrapper className="w-1/2 mt-[20px] text-light">
      <h1 className=" text-lg font-semibold">Password</h1>
      {/* <p className=" font-light opacity-60">
        Note that if you signed in with a connected account,you are using that account login
        information and we cannot change or reset those passwords here.
      </p> */}
      <Formik
        initialValues={{
          password: '',
          newPassword: ''
        }}
        validationSchema={Yup.object({
          password: Yup.string().min(8, 'Password should be at least 8 characters'),
          newPassword: Yup.string().min(8, 'Password should be at least 8 characters')
        })}
        onSubmit={(values) => {
          dispatch(updatePassword(values));
        }}
      >
        {(formik) => (
          <form className=" mt-5 flex flex-col gap-6" onSubmit={formik.handleSubmit}>
            <TextField label="Current Password" type="password" name="password" />
            <TextField label="New Password" type="password" name="newPassword" />
            <div className="mt-[30px]">
              <Button type="submit" colorScheme="linkedin" variant="solid">
                {status === STATUS_TYPE.FETCHING && <Spinner />}
                Save
              </Button>
              <Button colorScheme="linkedin" variant="outline" className="ml-6">
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Formik>

      <div className="mt-[35px]">
        <h1 className="font-semibold">Reset Password</h1>
        <p className=" opacity-50">
          If you just forgot your password, don&apos;t worry we got you.
        </p>
        {/* <p className="mt-3 flex flex-row opacity-50">
          <Icon className="mr-3" icon="dashboard" width={24} height={24} /> Reset Password
        </p> */}
        <div className="mt-[30px]">
          <Button disabled colorScheme="linkedin" variant="solid">
            Save
          </Button>
          <Button disabled colorScheme="linkedin" variant="outline" className="ml-6">
            Cancel
          </Button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PasswordChange;
