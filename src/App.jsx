import React from "react";

import { Route, Router, Routes } from "react-router";
// import Home from "./components/HomePage";
import Footer from "./components/HomePageALL/Footer"
import Header from "./components/HomePageALL/Header"
import LearnSphere from "./components/Learnsphre";

import SecondPage from "./components/TutorRegister/SecondPage";
import FirstPage from "./components/TutorRegister/FirstPage";
import ThirdPage from "./components/TutorRegister/ThirdPage";
import FourthPage from "./components/TutorRegister/FourthPage";

import StudentLogin from "./components/StudentPage/StudentLogin";
import StudentSignUp from "./components/StudentPage/StudentSignUp";








function App() {
  return (
    <div className="bg-red-50">


      <Header />
      <Routes>
        {/* <Route path="/" element={<LoginPage/>} /> */}
        <Route path="/" element={<LearnSphere />} />
        <Route path="/first" element={<FirstPage />} />
        <Route path="/second" element={<SecondPage />} />
        <Route path="/third" element={<ThirdPage />} />
        <Route path="/fourth" element={<FourthPage />} />
        <Route path="/login" element={<StudentLogin />} />
        <Route path="/signup" element={<StudentSignUp />} />


      </Routes>

      <Footer />
    </div>
  );
}

export default App;
