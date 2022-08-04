import { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Checkbox,
} from "@chakra-ui/react";
import Icon from "utility/icons";
import { Link } from "react-router-dom";

const Login = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <div className="flex flex-row min-h-screen bg-gradient-to-r to-bgContainer-to from-bgContainer-from">
      <main className="flex flex-col w-[50%] ml-auto justify-center items-center text-light gap-[50px]">
        <header>
          <div className="text-center font-heading font-bold text-[60px]">
            Register
          </div>
          <div className="text-center font-text text-2xl">
            Bring your analytics to the next level!
          </div>
        </header>
        <form className="w-[600px] flex flex-col gap-6">
          <div className="flex gap-[20px]">
            <Input type="text" placeholder="First Name" size="lg" />
            <Input type="text" placeholder="Last Name" size="lg" />
          </div>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                className="!py-[23px]"
                pointerEvents="none"
                children={<Icon icon="email" size="2rem" />}
              />
              <Input type="email" placeholder="Email Address" size="lg" />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                className="!py-[23px]"
                pointerEvents="none"
                children={<Icon icon="password" size="2rem" />}
              />
              <Input
                pr="4.5rem"
                size="lg"
                type={show ? "text" : "password"}
                placeholder="Password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="full"
                  color="black"
                  mt="8px"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement
                className="!py-[23px]"
                pointerEvents="none"
                children={<Icon icon="password" size="2rem" />}
              />
              <Input
                pr="4.5rem"
                size="lg"
                type={show ? "text" : "password"}
                placeholder="Confirm Password"
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="full"
                  color="black"
                  mt="8px"
                  size="sm"
                  onClick={handleClick}
                >
                  {show ? "Hide" : "Show"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </FormControl>
          <div className="flex flex-row justify-between px-3">
            <Checkbox
              size="lg"
              colorScheme="blue"
              defaultChecked
              className="rounded-[10ox] text-secondary"
            >
              I agree with MableAI Terms & Conditions
            </Checkbox>
          </div>
          <div className="p-3 font-heading font-bold text-xl rounded-xl shadow-lg shadow-secondary/20 text-center bg-primary">
            Register
          </div>
        </form>
        <div className="flex justify-between text-secondary w-[600px] items-center">
          <div>
            Already have an account?{" "}
            <Link className="text-light" to="/login">
              Login Now!
            </Link>
          </div>
          <div className="flex items-center">
            <Icon icon="copyright" size="0.8rem" />
            2022 MableAi All Rights Reserved
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
