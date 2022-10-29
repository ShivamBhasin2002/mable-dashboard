import { Button, useToast } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';
import { useDispatch, useSelector } from 'redux/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '@chakra-ui/react';
import { TextField } from 'components/form';
import { STATUS_TYPE } from 'utility/constants/enums';
import { updatePassword } from 'redux/reducers/settings/updateAccountInfoSlice';
import { useEffect } from 'react';

const PasswordChange = () => {
  const dispatch = useDispatch();
  const toast = useToast();
  const { status, message } = useSelector((state) => state.accountSetting.updatePasswordReducer);
  useEffect(() => {
    if (status === STATUS_TYPE.ERROR) {
      toast({ title: `${message}`, status: 'error', isClosable: true, position: 'top-right' });
    }
    if (status === STATUS_TYPE.SUCCESS) {
      toast({ title: `${message}`, status: 'success', isClosable: true, position: 'top-right' });
    }
  }, [status]);
  return (
    <ComponentWrapper className="h-fit w-[33rem] text-light xl:mt-[20px]" title="Change Password">
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
            <div className="mt-[30px] flex gap-2">
              <Button type="submit" colorScheme="linkedin" variant="solid">
                {status === STATUS_TYPE.FETCHING && <Spinner />}
                Save
              </Button>
              <Button disabled colorScheme="linkedin" variant="solid">
                {status === STATUS_TYPE.FETCHING && <Spinner />}
                Reset Password
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </ComponentWrapper>
  );
};

export default PasswordChange;
