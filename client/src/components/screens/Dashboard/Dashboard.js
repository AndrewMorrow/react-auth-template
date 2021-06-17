import React from "react";
import { logoutUser } from "../../../store/auth/authActions";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const onLogout = () => {
    dispatch(logoutUser(props.history));
  };
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
      <Link to="/">Home</Link>
    </div>
  );
};

export default Dashboard;
