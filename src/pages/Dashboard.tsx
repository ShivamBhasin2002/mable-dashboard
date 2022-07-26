import DashboardHeader from "../components/Dashboard/Header";
import DataQuality from "../components/Dashboard/DataQuality";
import Statistics from "../components/Dashboard/Statistics";
import WarningCenter from "../components/Dashboard/WarningCenter";
import List from "../components/Dashboard/LIst";

import data from "../data/data.json";
import FundamentalAnalysis from "../components/Dashboard/FundamentalAnalysis";
const { dashboard } = data;
const { usersOnline, dataQuality, marketing, investment, sales, profit, list, warningCenter, barChart } = dashboard;

const Dashboard = () => {
  return (
    <div className="w-full h-min-screen bg-background flex flex-col">
      <DashboardHeader usersOnline={usersOnline} />
      <main className="flex flex-row p-[40px] gap-[40px] flex-grow flex-wrap">
        <div className="flex flex-col w-[920px] gap-[40px]">
          <DataQuality data={dataQuality} />
          <div className="flex flex-row">
            <div className="flex flex-row flex-wrap gap-[40px] w-[680px]">
              <Statistics
                data={marketing}
                title="Marketing"
                icon="speakerphone"
              />
              <Statistics
                data={investment}
                title="Investment"
                icon="report-money"
              />
              <Statistics
                data={sales}
                title="Product Sales"
                icon="bar-chart-line"
              />
              <Statistics data={profit} title="Target Profit" icon="target" />
            </div>
            <List data={list} />
          </div>
        </div>
        <div className="flex flex-col flex-grow gap-[40px]">
          <WarningCenter data={warningCenter} />
          <FundamentalAnalysis data={barChart} />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
