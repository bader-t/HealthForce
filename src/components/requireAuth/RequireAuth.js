import { React } from "react";
import { Navigate } from "react-router-dom";
import AuthService from "../../services/auth.service";

export const RequireAuth = ({ children }) => {
  const user = AuthService.getCurrentUser();

  if (!user) {
    return <Navigate to="/login"></Navigate>;
  }
  return children;
};
