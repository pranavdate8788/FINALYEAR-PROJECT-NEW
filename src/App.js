import "./App.css";
import Backrop from "./Components/Backrop";
import Header from "./Components/Header";
import HomeSection from "./Components/HomeSection";
import Sidebar from "./Components/Sidebar";
import { useState } from "react";

function App() {
  const [sidebar, setSidebar] = useState(false);
  const toggleSidebar = () => {
    setSidebar((prevState) => !prevState);
  };
  return (
    <>
      <Header openSidebar={toggleSidebar} />
      <HomeSection />
      <Sidebar sidebar={sidebar} />
      <Backrop sidebar={sidebar} closeSidebar={toggleSidebar} />
    </>
  );
}

export default App;
