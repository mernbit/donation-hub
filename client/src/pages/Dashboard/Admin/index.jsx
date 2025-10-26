import React from "react";
import Sider from "./Components/Sider";
import AdminRoutes from "./pages/Routes";
import Header from "./Components/Header";
const Admin = () => {
  return (
    <div>
      <Sider />
      <Header />
      <div>
        <AdminRoutes />
      </div>
    </div>
  );
};

export default Admin;
