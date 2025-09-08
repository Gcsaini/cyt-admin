import React from "react";
import { getDecodedToken } from "../helpers/auth";
import NotAuthorizedPage from "./not-authorized";

const ProtectedRoute = ({ children }) => {
  const data = getDecodedToken();
  if (data && data.role === 2) {
    return children;
  }
  return <NotAuthorizedPage />;
};

export default ProtectedRoute;
