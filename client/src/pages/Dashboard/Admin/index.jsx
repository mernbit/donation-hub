import React from "react";
import Sider from "./Components/Sider";
import AdminRoutes from "./pages/Routes";
import Header from "./Components/Header";
import { useTabContext } from "../../../contexts/Tab/TabContext";
const Admin = () => {
  const { setIsOpen } = useTabContext();
  return (
    <div>
      <Sider />
      <Header />
      <div className="min-h-screen" onClick={() => setIsOpen(false)}>
        <AdminRoutes />
      </div>
    </div>
  );
};

export default Admin;
