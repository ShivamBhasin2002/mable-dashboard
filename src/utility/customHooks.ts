import { useState, useEffect } from 'react';
import { useToast } from '@chakra-ui/react';

export const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<{ width?: number; height?: number }>({
    width: undefined,
    height: undefined
  });

  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    }
    window.addEventListener('resize', handleResize);
    handleResize();
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
};

export const useShowToast = () => {
  const notify = useToast();
  const [toast, setToast] = useState<{
    title?: string;
    status?: 'error' | 'warning' | 'info' | 'success' | 'loading';
    duration?: number;
  }>({
    title: undefined,
    status: undefined,
    duration: undefined
  });
  useEffect(() => {
    if (toast.title)
      notify({
        title: toast.title,
        status: toast.status,
        isClosable: true,
        duration: toast.duration || 1500,
        position: 'top-right'
      });
  }, [toast]);

  return setToast;
};
