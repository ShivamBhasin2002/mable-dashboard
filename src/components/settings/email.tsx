import { Spinner, useToast } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';
import { useDispatch, useSelector } from 'redux/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { STATUS_TYPE } from 'utility/constants/general';
import { TextField } from 'components/form';
import { updateEmail } from 'redux/reducers/settings/updateAccountInfoSlice';
import { useEffect, useState } from 'react';
import { updateUserEmailState } from 'redux/reducers/authSlice';

const EmailChange = () => {
  const { userId, email } = useSelector((state) => state.user);
  const [emailId, setEmailId] = useState<string>('');
  const emailOriginal = { userId: userId, email: email };
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
      console.log('yahhaa');
    }
  }, [status]);

  return (
    <ComponentWrapper className="w-full mt-[20px] text-light h-fit">
      <h1 className=" text-lg font-semibold">Contact Info</h1>
      {/* <p className=" font-light opacity-60">
        Access your Mable workspaces with any email address, or
      </p> */}
      <Formik
        initialValues={{
          userId: userId,
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
            <TextField
              label="Email"
              icon="email"
              type="email"
              name="email"
              placeholder={`${email ? email : `Email`}`}
            />
            <div className="mt-[30px]">
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
      {/* <div className="mt-[30px]">
        <Text mb="8px">E-mail</Text>
        <Input placeholder= size="md" />
      </div> */}
      {/* <div className="mt-[30px]">
        <Button colorScheme="linkedin" variant="solid">
          Save
        </Button>
        <Button colorScheme="linkedin" variant="outline" className="ml-6">
          Cancel
        </Button>
      </div> */}
    </ComponentWrapper>
  );
};

export default EmailChange;
