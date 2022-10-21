import Popup from 'reactjs-popup';
import { Button } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';
import { Formik } from 'formik';
import { useState } from 'react';
import * as Yup from 'yup';
import { CheckBox } from 'components/form';
import { Input } from '@chakra-ui/react';

const PopupExample = () => {
  const contentStyle = { width: '40%' };
  const overlayStyle = { background: 'rgba(0,0,0,0.5)' };
  const [email, setEmail] = useState('');
  return (
    <Popup
      trigger={
        <Button className="w-[8rem]" type="submit" colorScheme="blue">
          + Add Entry
        </Button>
      }
      modal
      {...{ overlayStyle, contentStyle }}
    >
      <ComponentWrapper title="New User" underlined={true} className="">
        <Formik
          initialValues={{
            email: email || ''
          }}
          validationSchema={Yup.object({
            email: Yup.string().required('Please enter email')
          })}
          onSubmit={(values) => {
            // dispatch(loginAsync(values));
            console.log(values);
          }}
        >
          {(formik) => (
            <form className="flex flex-col gap-6" onSubmit={formik.handleSubmit}>
              <div className="text-light text-lg flex items-center gap-8">
                Email Address
                <Input
                  width="20rem"
                  value={email}
                  variant="filled"
                  placeholder="Enter Email"
                  backgroundColor="blue.800"
                  textColor="white"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div className="flex items-center gap-8">
                <div className="text-light text-lg">Block for future tracking</div>
                <CheckBox size="lg" colorScheme="blue" className="" name="rememberMe" />
              </div>
              <Button
                className="w-[8rem] ml-auto"
                type="submit"
                colorScheme="blue"
                onClick={() => close()}
              >
                Coinfirm
              </Button>
            </form>
          )}
        </Formik>
      </ComponentWrapper>
    </Popup>
  );
};

export default PopupExample;

{
  /* <Button className="w-[8rem]" type="submit" colorScheme="blue" onClick={()=>console.log("Hello")}>
        + Add Entry
      </Button> */
}
