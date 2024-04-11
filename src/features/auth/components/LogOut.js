import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectLoggedInUser } from "../authSlice";
import { signOutAsync } from "../authSlice";

function LogOut() {
  const dispatch = useDispatch();
  const user = useSelector(selectLoggedInUser);

  useEffect(() => {
    dispatch(signOutAsync());
  }, []);
  return <>{user && <Navigate to="/login" replace={true} />}</>;
}

export default LogOut;
