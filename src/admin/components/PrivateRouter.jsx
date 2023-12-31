import React from "react";
// import "../App.css";
import { Outlet, Navigate } from "react-router";
import { useAuthStatus } from "../hooks/useAuthStatus";
import Spinner from "./Spinner";

export default function PrivateRouter() {
  const { loggedIn, checkingStatus } = useAuthStatus();
  console.log(loggedIn);
  if (checkingStatus) {
    return <Spinner />;
  }
  return loggedIn ? <Outlet /> : <Navigate to="/admin/sign-in"></Navigate>;
}
