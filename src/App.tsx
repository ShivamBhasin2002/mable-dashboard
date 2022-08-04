import { ChakraProvider } from '@chakra-ui/react'

import SideBar from "./components/SideBar";
import Dashboard from "./pages/Dashboard";

import data from "./utility/data.json";

const App = () => {
  return (
    <ChakraProvider>
      <div id="App" className="flex flex-row h-min-screen bg-background">
        <SideBar user={data.user} />
        <Dashboard />
      </div>
    </ChakraProvider>
  );
}

export default App;
