import React from "react";
import Advertise from "./components/Advertise";
import Earn from "./components/Earn";
import Footer from "./components/Footer";
import GetStarted from "./components/GetStarted";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import PreOrder from "./components/PreOrder";
import PresaleCTA from "./components/PresaleCTA";


function App() {
  return (
    <div className="select-none p-0 m-0">
      <Navbar />
      <Hero />
      <Earn />
      <GetStarted />
      <Advertise />
      <PreOrder />
      <PresaleCTA />
      <Footer />
    </div>
  );
}

export default App;
