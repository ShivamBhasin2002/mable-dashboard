import { FC, useState } from 'react';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  FormErrorMessage
} from '@chakra-ui/react';
import Icon from 'assets/icons/index';
import { Field, useField } from 'formik';

interface TextFieldProps {
  label?: string;
  icon?: string;
  type: string;
  name: string;
  placeholder?: string;
}

const TextField: FC<TextFieldProps> = ({ label, icon, type, ...props }) => {
  const [field, meta] = useField({ type, ...props });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  return (
    <FormControl isInvalid={meta.error && meta.touched ? true : false}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        {icon && (
          <InputLeftElement className="!py-[23px]" pointerEvents="none">
            <Icon icon={icon} size="2rem" />
          </InputLeftElement>
        )}
        <Field
          as={Input}
          pl={icon ? '3rem' : '20px'}
          pr={type === 'password' ? '4.5rem' : '20px'}
          size="lg"
          type={type === 'password' ? (show ? 'text' : 'password') : type}
          {...field}
          {...props}
        />
        {type === 'password' && (
          <InputRightElement width="4.5rem">
            <button
              type="button"
              className="h-full flex justify-center items-center mt-[8px] hover:text-primary"
              onClick={handleClick}
            >
              {show ? (
                <Icon icon="hidePassword" size="1.5rem" />
              ) : (
                <Icon icon="showPassword" size="1.5rem" />
              )}
            </button>
          </InputRightElement>
        )}
      </InputGroup>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default TextField;
