import { Button } from '@chakra-ui/react';
// import Icon from 'assets/icons';
import { ComponentWrapper } from 'components/common';
import { useDispatch, useSelector } from 'redux/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { Spinner } from '@chakra-ui/react';
import { TextField } from 'components/form';
import { STATUS_TYPE } from 'utility/constants/general';
import { updateUserEmailState, updateUsername } from 'redux/reducers/updateAccountInfoSlice';
import { useEffect, useState } from 'react';
import { useToast } from '@chakra-ui/react';

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
      dispatch(updateUserEmailState({ nameFirst, nameLast }));
    }
  }, [status]);

  const { firstName, lastName, userId } = useSelector((state) => state.user);
  return (
    <ComponentWrapper className="w-full mt-[20px] text-light h-fit">
      <h1 className=" text-lg font-semibold">Name</h1>
      <p className=" font-light opacity-60">
        Changing your name below will update your name on your profile
      </p>
      {/* <div className="mt-[40px] flex flex-row justify-start">
        <div className="h-[100px] w-[100px] rounded-full border-2 border-lightBlue"></div>
        <div className="ml-[30px] h-[100px] w-[100px] rounded-full border-2 border-lightBlue flex flex-row justify-center items-center">
          <Icon icon="dashboard" width={24} height={24} />
        </div>
      </div> */}

      <Formik
        initialValues={{
          userId: userId,
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
              <Button colorScheme="linkedin" variant="outline" className="ml-6">
                Cancel
              </Button>
            </div>
          </form>
        )}
      </Formik>
    </ComponentWrapper>
  );
};

export default NameChange;
