import React, { useState, useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./css/style.css";



import Home from "./pages/Home";




function App() {

  return (
    
        <Routes>
          {/* ---------------------- Main Website Routes ---------------- */}
           <Route path="/" element={<Home />} />
          {/* <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Unique" element={<Unique />} />
          <Route path="/Support" element={<Support />} /> */}
         
        </Routes>
      
  );
}

export default App;
