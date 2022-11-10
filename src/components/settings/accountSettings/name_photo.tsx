import { Button, Spinner, useToast } from '@chakra-ui/react';
// import Icon from 'assets/icons';
import { ComponentWrapper } from 'components/common';
import { useDispatch, useSelector } from 'redux/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { TextField } from 'components/form';
import { STATUS_TYPE } from 'utility/constants/enums';
import { updateUsername } from 'redux/reducers/settings/updateAccountInfoSlice';
import { useEffect, useState } from 'react';
import { updateUserNameState } from 'redux/reducers/authSlice';

const NameChange = () => {
  const dispatch = useDispatch();
  const [nameFirst, setFirstName] = useState<string>();
  const [nameLast, setLastName] = useState<string>();
  const toast = useToast();
  const { status, message } = useSelector((state) => state.accountSetting.updateUserNameReducer);

  useEffect(() => {
    if (status === STATUS_TYPE.ERROR) {
      toast({ title: `${message}`, status: 'error', isClosable: true, position: 'top-right' });
    }
    if (status === STATUS_TYPE.SUCCESS) {
      toast({ title: `${message}`, status: 'success', isClosable: true, position: 'top-right' });
      dispatch(updateUserNameState({ nameFirst, nameLast }));
    }
  }, [status]);

  const { firstName, lastName, userId } = useSelector((state) => state.user);
  const UsernameOringinal = {
    userId,
    firstName,
    lastName
  };
  return (
    <ComponentWrapper
      title="Name"
      className="w-full lg:w-[33rem] flex-grow md:flex-grow-[.5] text-light h-fit mt-[20px]"
    >
      <div className="font-light opacity-60">
        Changing your name below will update your name on your profile
      </div>

      <Formik
        initialValues={{
          userId,
          firstName: '',
          lastName: ''
        }}
        validationSchema={Yup.object({
          firstName: Yup.string(),
          lastName: Yup.string()
        })}
        onSubmit={(values) => {
          setFirstName(values.firstName);
          setLastName(values.lastName);
          dispatch(updateUsername(values));
        }}
      >
        {(formik) => (
          <form className=" mt-5 flex flex-col gap-6" onSubmit={formik.handleSubmit}>
            <TextField
              label="First Name"
              type="text"
              name="firstName"
              placeholder={`${firstName}`}
            />
            <TextField label="Last Name" type="text" name="lastName" placeholder={`${lastName}`} />
            <div className="mt-[10px]">
              <Button type="submit" colorScheme="linkedin" variant="solid">
                {status === STATUS_TYPE.FETCHING && <Spinner />}
                Save
              </Button>
              <Button
                colorScheme="linkedin"
                variant="outline"
                className="ml-6"
                onClick={() => dispatch(updateUsername(UsernameOringinal))}
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

export default NameChange;
