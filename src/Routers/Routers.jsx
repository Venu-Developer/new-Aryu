import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from '../Components/Home'
import About from '../Components/About'
import ScrollToTop from "../Components/ScrollToTop";
import Navbar from "../Components/Navbar";

function Router() {
  return (
    <div>
        <Navbar/>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        {/* <Route path="/Te" element={< />} /> */}
       
      </Routes>
    </div>
  );
}

export default Router;
