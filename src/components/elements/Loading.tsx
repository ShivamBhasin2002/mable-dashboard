import { Spinner } from '@chakra-ui/react';
import colors from 'utility/colors';

import { LoadingProps } from 'utility/typeDefinitions/componentTypes';

const Loading = ({ message = 'Loading' }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-background h-screen">
      <div>
        <Spinner color={colors.light} size="xl" />
      </div>
      <div className="text-3xl font-heading font-bold text-light">{message}</div>
    </div>
  );
};

export default Loading;
