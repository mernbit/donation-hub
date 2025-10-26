import React from "react";
import { Route, Routes } from "react-router-dom";
import Frontend from "./Frontend";
import Auth from "./Auth";
import ProtectedAuth from "../components/ProtectedAuth";
import Dashboard from "./Dashboard";
import ProtectedDashboard from "../components/ProtectedDashboard";

const Index = () => {
  return (
    <Routes>
      <Route path="/*" element={<Frontend />} />
      <Route path="/auth/*" element={<ProtectedAuth Component={Auth} />} />
      <Route path="/dashboard/*" element={<ProtectedDashboard Component={Dashboard} />} />
    </Routes>
  );
};

export default Index;
