import React from "react";
import Advertise from "./components/Advertise";
import Earn from "./components/Earn";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="select-none p-0 m-0">
      <Navbar />
      <Hero />
      <Earn />
      <GetStarted />
      <Advertise />
    </div>
  );
}

export default App;
