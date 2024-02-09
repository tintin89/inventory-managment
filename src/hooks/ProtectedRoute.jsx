import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function ProtectedRoute({ user, redirectTo, children }) {
  if (user == null) return <Navigate replace to={redirectTo} />;
  return children ? children : <Outlet />;
}

export default ProtectedRoute;
