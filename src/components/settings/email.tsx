import { Spinner } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';
import { useSelector } from 'redux/store';
import { Formik } from 'formik';
import * as Yup from 'yup';
import { STATUS_TYPE } from 'utility/constants/general';
import { TextField } from 'components/form';

const EmailChange = () => {
  const { email, status } = useSelector((state) => state.user);

  return (
    <ComponentWrapper className="w-full mt-[20px] text-light h-fit">
      <h1 className=" text-lg font-semibold">Contact Info</h1>
      {/* <p className=" font-light opacity-60">
        Access your Mable workspaces with any email address, or
      </p> */}
      <Formik
        initialValues={{
          email: email || ''
        }}
        validationSchema={Yup.object({
          email: Yup.string()
        })}
        onSubmit={(values) => {
          // dispatch(loginAsync(values));
          console.log(values);
        }}
      >
        {(formik) => (
          <form className="" onSubmit={formik.handleSubmit}>
            <TextField
              label="Email"
              icon="email"
              type="email"
              name="email"
              placeholder={`${email}`}
            />
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
