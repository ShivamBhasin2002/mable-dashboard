import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";

import data from "./data/data.json";

const App = () => {
  return (
    <div id="App" className="flex flex-row">
      <SideBar user={data.user}/>
      <Dashboard/>
    </div>
  );
}

export default App;
