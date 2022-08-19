import { FC } from 'react';
import { FormControl, Checkbox, FormErrorMessage } from '@chakra-ui/react';
import { useField } from 'formik';

interface CheckBoxProps {
  size: string;
  colorScheme: string;
  className: string;
  name: string;
  message?: string;
}

const CheckBox: FC<CheckBoxProps> = ({ message, ...props }) => {
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
