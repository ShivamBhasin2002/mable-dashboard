import { Button, Checkbox } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';
import { Formik } from 'formik';
import { Spinner } from '@chakra-ui/react';
import { useState } from 'react';
import * as Yup from 'yup';
import colors from 'utility/colors';
import { Input } from '@chakra-ui/react';
import { Dispatch, SetStateAction } from 'react';
import { postDeletedCustomer } from 'redux/reducers/settings/privacyCockpit/privacyCockpitSlice';
import { useDispatch, useSelector } from 'redux/store';
import { STATUS_TYPE } from 'utility/constants/enums';

interface PopUpProps {
  open: string;
  setDisplay: Dispatch<SetStateAction<string>>;
}

const PopupExample = (props: PopUpProps) => {
  const [email, setEmail] = useState('');
  const [futureTrack, setFutureTrack] = useState<boolean>(false);

  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.privacyCockpit.deleteUserData);

  return (
    <div
      className={`${props.open} fixed left-0 top-0 w-full h-full overflow-auto bg-[rgba(0,0,0,0.7)] justify-center items-center`}
    >
      <ComponentWrapper
        title="New User"
        underlined={true}
        className="w-1/2"
        nextComponent={<button onClick={() => props.setDisplay('hidden')}>Close</button>}
      >
        <Formik
          initialValues={{
            futureTrack: futureTrack,
            email: email || ''
          }}
          validationSchema={Yup.object({
            email: Yup.string().required('Please enter email')
          })}
          onSubmit={(values) => {
            dispatch(postDeletedCustomer(values));
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
                <Checkbox
                  isChecked={futureTrack}
                  className=" text-light"
                  size="lg"
                  colorScheme="blue"
                  _hover={{ background: colors.bgContainerFrom }}
                  _active={{ background: colors.bgContainerFrom }}
                  _focus={{ background: colors.bgContainerFrom }}
                  onChange={() => setFutureTrack(!futureTrack)}
                ></Checkbox>
              </div>
              <Button
                type="submit"
                className="w-[8rem] ml-auto"
                colorScheme="blue"
                onClick={() =>
                  dispatch(postDeletedCustomer({ futureTrack: futureTrack, email: email }))
                }
              >
                {status === STATUS_TYPE.FETCHING && <Spinner />}
                Coinfirm
              </Button>
            </form>
          )}
        </Formik>
      </ComponentWrapper>
    </div>
  );
};

export default PopupExample;
