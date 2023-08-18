import React from "react";
// import "../App.css";
import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

export default function PrivateRouter2() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  console.log(loggedIn);
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn == false ? <Outlet /> : <Navigate to="/admin/profile"></Navigate>;
}
