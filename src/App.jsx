import React from "react";
import Earn from "./components/Earn";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";


function App() {
  return (
    <div className="select-none p-0 m-0">
      <Navbar />
      <Hero />
      <Earn />
    </div>
  );
}

export default App;
