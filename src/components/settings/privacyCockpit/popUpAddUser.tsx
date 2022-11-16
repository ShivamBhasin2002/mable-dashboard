import { Button, Checkbox, Input, Spinner } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';
import { useShowToast } from 'utility/customHooks';
import colors from 'utility/colors';
import { Dispatch, SetStateAction } from 'react';
import { postDeletedCustomer } from 'redux/reducers/settings/privacyCockpit/privacyCockpitSlice';
import { useDispatch, useSelector } from 'redux/store';
import { STATUS_TYPE } from 'utility/constants/enums';
import * as yup from 'yup';

interface PopUpProps {
  open: string;
  setDisplay: Dispatch<SetStateAction<string>>;
  email: string;
  setEmail: Dispatch<SetStateAction<string>>;
  futureTrack: boolean;
  setFutureTrack: Dispatch<SetStateAction<boolean>>;
}

const PopupExample = (props: PopUpProps) => {
  const toast = useShowToast();
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.privacyCockpit.deleteUserData);

  const emailSchema = yup.object().shape({
    email: yup.string().email()
  });

  const handleSave = async () => {
    const isValid = await emailSchema.isValid({ email: props.email });
    if (isValid) {
      dispatch(postDeletedCustomer({ futureTrack: props.futureTrack, email: props.email }));
    } else {
      toast({
        title: `Enter valid mail Id`,
        status: STATUS_TYPE.ERROR
      });
    }
  };

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
        <form className="flex flex-col gap-6">
          <div className="text-light text-lg flex items-center gap-8">
            Email Address
            <Input
              width="20rem"
              value={props.email}
              variant="filled"
              placeholder="Enter Email"
              backgroundColor="blue.800"
              textColor="white"
              onChange={(e) => props.setEmail(e.target.value)}
            />
          </div>

          <div className="flex items-center gap-8">
            <div className="text-light text-lg">Block for future tracking</div>
            <Checkbox
              isChecked={props.futureTrack}
              className=" text-light"
              size="lg"
              colorScheme="blue"
              _hover={{ background: colors.bgContainerFrom }}
              _active={{ background: colors.bgContainerFrom }}
              _focus={{ background: colors.bgContainerFrom }}
              onChange={() => props.setFutureTrack(!props.futureTrack)}
            ></Checkbox>
          </div>

          <Button
            className="w-[8rem] ml-auto bg-primary"
            variant="outline"
            onClick={() => handleSave()}
          >
            {status === STATUS_TYPE.FETCHING && <Spinner />}
            Coinfirm
          </Button>
        </form>
      </ComponentWrapper>
    </div>
  );
};

export default PopupExample;
