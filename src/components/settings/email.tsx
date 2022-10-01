import { Input, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';

const EmailChange = () => {
  return (
    <ComponentWrapper className="w-fit mt-[20px] text-light h-fit">
      <h1 className=" text-lg font-semibold">Contact Info</h1>
      <p className=" font-light opacity-60">
        Access your Loom workspaces with any email address, or
      </p>
      <div className="mt-[30px]">
        <Text mb="8px">E-mail</Text>
        <Input placeholder="mableai@email.com" size="md" />
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

export default EmailChange;
