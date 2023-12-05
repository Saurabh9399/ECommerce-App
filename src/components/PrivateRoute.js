// src/components/PrivateRoute.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Navigate } from "react-router-dom";
import { getUser } from "../redux/authSlice";

const PrivateRoute = ({ element }) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, []);
  const user = useSelector((state) => state.auth.user);

  return user ? element : <Navigate to="/auth" />;
};

export default PrivateRoute;
