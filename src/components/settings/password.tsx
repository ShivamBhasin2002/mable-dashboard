import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import { ComponentWrapper } from 'components/common';
import { useState } from 'react';

const PasswordChange = () => {
  const [NewPass, setNewPass] = useState(false);
  const [currentPass, setCurrentPass] = useState(false);
  const [CoinfirmPass, setCoinfirmPass] = useState(false);
  const handleClick = (field: string) => {
    switch (field) {
      case 'CurrentPass':
        setCurrentPass(!currentPass);
        break;
      case 'NewPass':
        setNewPass(!NewPass);
        break;
      case 'CoinfirmPass':
        setCoinfirmPass(!CoinfirmPass);
        break;
    }
  };
  return (
    <ComponentWrapper className="mt-[20px] text-light h-fit">
      <h1 className=" text-lg font-semibold">Password</h1>
      <p className=" font-light opacity-60">
        Note that if you signed in with a connected account,you are using that account login
        <br />
        information and we cannot change or reset those passwords here.
      </p>
      <div className="mt-[30px]">
        <Text mb="8px">Current Password</Text>
        <InputGroup size="md" width="20rem">
          <Input type={currentPass ? 'text' : 'password'} />
          <InputRightElement width="4.5rem">
            <Button
              h="1.75rem"
              size="sm"
              onClick={() => handleClick('CurrentPass')}
              colorScheme="blue"
            >
              {currentPass ? 'Hide' : 'Show'}
            </Button>
          </InputRightElement>
        </InputGroup>
      </div>
      <div className=" flex flex-row gap-2">
        <div className="mt-[30px]">
          <Text mb="8px">New Password</Text>
          <InputGroup size="md" width="20rem">
            <Input pr="4.5rem" type={NewPass ? 'text' : 'password'} />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => handleClick('NewPass')}
                colorScheme="blue"
              >
                {NewPass ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
        <div className="mt-[30px]">
          <Text mb="8px">Coinfirm Password</Text>
          <InputGroup size="md" width="20rem">
            <Input pr="4.5rem" type={CoinfirmPass ? 'text' : 'password'} />
            <InputRightElement width="4.5rem">
              <Button
                h="1.75rem"
                size="sm"
                onClick={() => handleClick('CoinfirmPass')}
                colorScheme="blue"
              >
                {CoinfirmPass ? 'Hide' : 'Show'}
              </Button>
            </InputRightElement>
          </InputGroup>
        </div>
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

export default PasswordChange;
