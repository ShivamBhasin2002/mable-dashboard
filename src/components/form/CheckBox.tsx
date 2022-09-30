import { FormControl, Checkbox, FormErrorMessage } from '@chakra-ui/react';
import { useField } from 'formik';

import { CheckBoxProps } from 'utility/typeDefinitions/componentTypes';

const CheckBox = ({ message, ...props }: CheckBoxProps) => {
  const [field, meta] = useField({ ...props });
  return (
    <FormControl className="!w-max" isInvalid={meta.error && meta.touched ? true : false}>
      <Checkbox {...props} {...field}>
        {message}
      </Checkbox>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default CheckBox;
