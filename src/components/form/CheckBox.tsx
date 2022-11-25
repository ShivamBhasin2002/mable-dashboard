import { FormControl, Checkbox, FormErrorMessage } from '@chakra-ui/react';
import { useField } from 'formik';

import { CheckBoxProps } from '@utility/typeDefinitions/componentPropTypes';

const CheckBox = ({ message, ...props }: CheckBoxProps) => {
  const [field, meta] = useField({ ...props });
  return (
    <FormControl className="!w-max" isInvalid={!!(meta.error && meta.touched)}>
      <Checkbox {...props} {...field}>
        {message}
      </Checkbox>
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default CheckBox;
