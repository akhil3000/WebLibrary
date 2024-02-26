import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/CommonComponents/Navbar/Navbar";
import Home from "./components/CoreComponents/Home/Home.jsx";
import Footer from "./components/CommonComponents/Footer/Footer";
import "./App.css";
import CSFundamentals from "./components/CoreComponents/CSFundamentals/CSFundamentals.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cs-fundamentals" element={<CSFundamentals />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
