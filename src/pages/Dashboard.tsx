import DashboardHeader from "../components/Dashboard/Header";
import DataQuality from "../components/Dashboard/DataQuality";

import data from "../data/data.json";
const { dashboard } = data;
const { usersOnline } = dashboard;

const Dashboard = () => {
  return (
    <div className="w-full h-min-screen bg-background">
      <DashboardHeader usersOnline={usersOnline} />
      <main className="flex flex-row p-[40px] gap-[40px]">
        <div className="flex flex-col w-[920px] gap-[40px]">
          
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
