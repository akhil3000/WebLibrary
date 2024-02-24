import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/CommonComponents/Navbar/Navbar";
import Home from "./components/CoreComponents/Home/Home.jsx";
import Footer from "./components/CommonComponents/Footer/Footer";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
