import { Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
import Icon from 'assets/icons';
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
    <ComponentWrapper className="w-1/2 mt-[20px] text-light">
      <h1 className=" text-lg font-semibold">Password</h1>
      <p className=" font-light opacity-60">
        Note that if you signed in with a connected account,you are using that account login
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
      <div className=" flex flex-col gap-2">
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
      <div className="mt-[35px]">
        <h1 className="font-semibold">Reset Password</h1>
        <p className=" opacity-50">
          If you just forgot your password, don&apos;t worry we got you.
        </p>
        <p className="mt-3 flex flex-row opacity-50">
          <Icon className="mr-3" icon="dashboard" width={24} height={24} /> Reset Password
        </p>
        <div className="mt-[30px]">
          <Button disabled colorScheme="linkedin" variant="solid">
            Save
          </Button>
          <Button disabled colorScheme="linkedin" variant="outline" className="ml-6">
            Cancel
          </Button>
        </div>
      </div>
    </ComponentWrapper>
  );
};

export default PasswordChange;
