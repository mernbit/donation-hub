import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./screens/Dashboard";
import CampaignManagement from "./screens/Campain Management";
import Analytics from "./screens/Analytics";
import AddCampaign from "./screens/Campain Management/AddCampaign";
const Index = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="campaign-management" element={<CampaignManagement />} />
      <Route path="campaign-management/add-campaign" element={<AddCampaign />} />
      {/* <Route path="campaign-management/:id" element={<CampaignManagement />} /> */}
      <Route path="analytics-reports" element={<Analytics />} />
    </Routes>
  );
};

export default Index;
