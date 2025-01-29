import React from "react";
import { Outlet, Navigate } from "react-router-dom";
import { useAuth } from "../context/auth";

interface RouteGuardProps {
  children: React.ReactNode;
}
export const PrivateRoute: React.FC<RouteGuardProps> = () => {
  const { isAuthenticated } = useAuth();
  // '<Outlet />'  render the Child of element if exists
  return isAuthenticated ? <Outlet /> : <Navigate to="/home" />;
};
