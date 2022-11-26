import { useState } from 'react';
import {
  FormControl,
  FormLabel,
  InputGroup,
  InputLeftElement,
  Input,
  InputRightElement,
  FormErrorMessage
} from '@chakra-ui/react';
import Icon from 'assets/icons';
import { Field, useField } from 'formik';

import { TextFieldProps } from 'utility/typeDefinitions/componentPropTypes';

const TextField = ({ label, icon, type, ...props }: TextFieldProps) => {
  const [field, meta] = useField({ type, ...props });
  const [show, setShow] = useState(false);
  const handleClick = () => setShow((prevState) => !prevState);
  const getType = (givenType: string, showOrHide: boolean) => {
    if (givenType === 'password') return showOrHide ? 'text' : 'password';
    return givenType;
  };
  return (
    <FormControl isInvalid={!!(meta.error && meta.touched)}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        {icon && (
          <InputLeftElement className="!py-[1.4375rem] !ml-[.3125rem]" pointerEvents="none">
            <Icon icon={icon} size="2rem" />
          </InputLeftElement>
        )}
        <Field
          as={Input}
          pl={icon ? '3rem' : '20px'}
          pr={type === 'password' ? '4.5rem' : '20px'}
          size="lg"
          type={getType(type, show)}
          autoComplete="off"
          {...field}
          {...props}
        />
        {type === 'password' && (
          <InputRightElement width="4.5rem">
            <button
              type="button"
              className="h-full flex justify-center items-center mt-[.5rem] hover:text-primary"
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
