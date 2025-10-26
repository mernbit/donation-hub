import React from "react";
import { useAuthContext } from "../contexts/Auth/AuthContext";
import { Navigate } from "react-router-dom";

const ProtectedDashboard = ({ Component }) => {
  const { isAuth } = useAuthContext();
  if (!isAuth) return <Navigate to="/auth/login" replace />;
  return <Component />;
};

export default ProtectedDashboard;
