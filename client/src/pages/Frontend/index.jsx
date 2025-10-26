import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Header from "../../components/Header";

const Frontend = () => {
  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      
    </main>
  );
};

export default Frontend;
