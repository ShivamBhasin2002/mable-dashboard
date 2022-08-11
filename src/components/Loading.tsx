import { FC } from 'react';

import { Spinner } from '@chakra-ui/react';

interface LoadingProps {
  message?: string;
}

const Loading: FC<LoadingProps> = ({ message = 'Loading' }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-4 bg-background h-screen">
      <div>
        <Spinner color="#ffffff" size="xl" />
      </div>
      <div className="text-3xl font-heading font-bold text-light">{message}</div>
    </div>
  );
};

export default Loading;
