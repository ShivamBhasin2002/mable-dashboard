import { ComponentWrapper } from 'components/common';
import { Button, Checkbox } from '@chakra-ui/react';
import colors from 'utility/colors';
import Icon from 'assets/icons';
import { Spinner, useToast } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';
import { STATUS_TYPE } from 'utility/constants/general';
import { submitLink } from 'utility/functions/helper';

const PrivacySettings = () => {
  return (
    <ComponentWrapper
      title="Privacy Settings"
      underlined={true}
      className="mt-[30px] flex flex-col max-w-4xl"
    >
      <div className="flex gap-4">
        <div className=" text-light text-xl flex items-center gap-2">
          Hash data in your dashboard <Icon icon="info" width={40} />
        </div>
        <Checkbox
          isChecked={true}
          className=" text-light"
          size="lg"
          colorScheme="blue"
          _hover={{ background: colors.bgContainerFrom }}
          _active={{ background: colors.bgContainerFrom }}
          _focus={{ background: colors.bgContainerFrom }}
          onChange={() => {
            console.log('dispatch checkbox');
          }}
        ></Checkbox>
      </div>
      <div className="flex gap-4 items-center mt-[40px]">
        <div className=" text-light text-xl">Please link your cookie consent</div>
        <form className="w-[20rem]">
          <Input
            variant="filled"
            placeholder="Paste your link here"
            backgroundColor="blue.800"
            textColor="white"
          />
        </form>
      </div>
      <Button
        className="w-[8rem] mt-5"
        type="submit"
        colorScheme="blue"
        onClick={() => submitLink()}
      >
        Save
      </Button>
    </ComponentWrapper>
  );
};

export default PrivacySettings;
