import React from "react";

import { Route, Router, Routes } from "react-router";
import Home from "./components/HomePage";
import Footer from "./components/Footer"
import Header from "./components/Header"



function App() {
  return (
    <div  className="bg-red-50">
    

<Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      
      <Footer/>
    </div>
  );
}

export default App;
