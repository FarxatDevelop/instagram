import React from "react";
import About from "./components/About/About";
import Home from "./components/home/home";
import Navbar from "./components/navbar/Navbar";
import WhatWeDo from "./components/WhatWeDo/WhatWeDo";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <WhatWeDo />
      <About />
    </>
  );
}

export default App;
