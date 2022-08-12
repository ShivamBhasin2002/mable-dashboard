// importing the Dashboard components
import DashboardHeader from 'components/dashboard/Header';
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

// importing the data for the Dashboard
import data from 'utility/data.json';
import Loading from 'components/Loading';
const { dashboard } = data;
const { warningCenter, eventsPerDay } = dashboard;
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
    <div className="w-full h-min-screen bg-background flex flex-col px-[30px] py-[30px]">
      <DashboardHeader />
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
            <WarningCenter data={warningCenter} />
            <FunnelAnalysis />
            <EventsPerDay data={eventsPerDay} />
          </div>
        </section>
      </main>
    </div>
  ) : (
    <div className="w-full h-min-screen">
      <Loading message="Fetching Shops" />
    </div>
  );
};

export default Dashboard;
