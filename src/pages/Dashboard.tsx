// importing the Dashboard components
import DataQuality from 'components/dashboard/DataQuality';
import WarningCenter from 'components/dashboard/WarningCenter';
import FunnelAnalysis from 'components/dashboard/FunnelAnalysis';
import PageSpeed from 'components/dashboard/PageSpeed';
import Events from 'components/dashboard/Events';
import EventsPerDay from 'components/dashboard/EventsPerDay';
import DataContainedPerEvent from 'components/dashboard/DataContainedPerEvent';

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
    <main className="flex-grow">
      <section className="flex flex-row justify-evenly gap-[30px] flex-wrap mt-[40px]">
        <div className="flex flex-col w-[920px] gap-[40px] ">
          <div>
            <DataQuality />
          </div>
          <div className="flex flex-row gap-[30px] flex-wrap">
            <PageSpeed />
            <Events />
          </div>
          <DataContainedPerEvent />
        </div>
        <div className="flex flex-col gap-[30px]">
          <WarningCenter />
          <FunnelAnalysis />
          <EventsPerDay />
        </div>
      </section>
    </main>
  ) : (
    <div className="w-full h-min-screen">
      <Loading message="Fetching Shops" />
    </div>
  );
};

export default Dashboard;
