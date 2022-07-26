import { Spinner, useToast, Button } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';
import { useDispatch, useSelector } from 'redux/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { STATUS_TYPE } from 'utility/constants/enums';
import { TextField } from 'components/form';
import { updateEmail } from 'redux/reducers/settings/updateAccountInfoSlice';
import { useEffect, useState } from 'react';
import { updateUserEmailState } from 'redux/reducers/authSlice';

const EmailChange = () => {
  const { userId, email } = useSelector((state) => state.user);
  const [emailId, setEmailId] = useState<string>('');
  const emailOriginal = { userId, email };
  const dispatch = useDispatch();
  const toast = useToast();
  const { status, message } = useSelector((state) => state.accountSetting.updateEmailReducer);
  useEffect(() => {
    if (status === STATUS_TYPE.ERROR) {
      toast({ title: `${message}`, status: 'error', isClosable: true, position: 'top-right' });
    }
    if (status === STATUS_TYPE.SUCCESS) {
      toast({ title: `${message}`, status: 'success', isClosable: true, position: 'top-right' });
      dispatch(updateUserEmailState(emailId));
    }
  }, [status]);

  return (
    <ComponentWrapper
      className=" flex-grow-[1] text-light h-fit xl:mt-[1.25rem]"
      title="Contact Information"
    >
      <Formik
        initialValues={{
          userId,
          email: ''
        }}
        validationSchema={Yup.object({
          email: Yup.string()
        })}
        onSubmit={(values) => {
          setEmailId(values.email);
          dispatch(updateEmail(values));
        }}
      >
        {(formik) => (
          <form className="" onSubmit={formik.handleSubmit}>
            <div className="my-5 font-bold">
              Current E-mail : <span className="text-primary font-medium">{email}</span>
            </div>
            <TextField
              label="Add new e-mail"
              icon="email"
              type="email"
              name="email"
              placeholder={`${email || `Email`}`}
            />
            <div className="mt-[1.875rem]">
              <Button type="submit" colorScheme="linkedin" variant="solid">
                {status === STATUS_TYPE.FETCHING && <Spinner />}
                Save
              </Button>
              <Button
                colorScheme="linkedin"
                variant="outline"
                className="ml-6"
                onClick={() => dispatch(updateEmail(emailOriginal))}
              >
                Reset
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </ComponentWrapper>
  );
};

export default EmailChange;
