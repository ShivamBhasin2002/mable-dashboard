import { Input, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import Icon from 'assets/icons';
import { ComponentWrapper } from 'components/common';

const NameChange = () => {
  return (
    <ComponentWrapper className="w-full mt-[20px] text-light h-fit">
      <h1 className=" text-lg font-semibold">Name and Photos</h1>
      <p className=" font-light opacity-60">
        Changing your name below will update your name on your profile
      </p>
      <div className="mt-[40px] flex flex-row justify-start">
        <div className="h-[100px] w-[100px] rounded-full border-2 border-lightBlue"></div>
        <div className="ml-[30px] h-[100px] w-[100px] rounded-full border-2 border-lightBlue flex flex-row justify-center items-center">
          <Icon icon="dashboard" width={24} height={24} />
        </div>
      </div>
      <div className="mt-[30px]">
        <Text mb="8px">First Name</Text>
        <Input placeholder="Harshit" size="md" mb="8px" />

        <Text mb="8px">Last Name</Text>
        <Input placeholder="Singh" size="md" />
      </div>
      <div className="mt-[30px]">
        <Button colorScheme="linkedin" variant="solid">
          Save
        </Button>
        <Button colorScheme="linkedin" variant="outline" className="ml-6">
          Cancel
        </Button>
      </div>
    </ComponentWrapper>
  );
};

export default NameChange;
