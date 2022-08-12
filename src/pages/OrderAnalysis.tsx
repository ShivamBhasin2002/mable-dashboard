// importing the Dashboard components
import { useEffect } from 'react';
import { useSelector } from 'redux/store';
import { useToast } from '@chakra-ui/react';

import Loading from 'components/Loading';

import { clearStatus } from 'redux/reducers/dashboardSlice';

const Dashboard = () => {
  const toast = useToast();
  const { status, errorMsg } = useSelector((state) => state.dashboard);
  useEffect(() => {
    if (status === 'error') {
      toast({
        title: errorMsg,
        status: 'error',
        isClosable: true,
        position: 'top-right'
      });
      clearStatus();
    }
  }, [status]);
  return status === 'success' ? (
    <div className="w-full h-min-screen bg-background flex flex-col px-[30px] py-[30px]"></div>
  ) : (
    <div className="w-full h-min-screen">
      <Loading message="Fetching Shops" />
    </div>
  );
};

export default Dashboard;
