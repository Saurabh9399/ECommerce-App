// src/components/PrivateRoute.js
import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
const PrivateRoute = ({ element }) => {
  
  const user = useSelector((state) => state.auth.user);

  return user ? element : <Navigate to="/auth" />;
};

export default PrivateRoute;
