import React from "react";
import { logoutUser } from "../../../store/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const onLogout = () => {
    dispatch(logoutUser(props.history));
  };
  return (
    <main className="min-h-screen">
      <h1>Welcome to the Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </main>
  );
};

export default Dashboard;
