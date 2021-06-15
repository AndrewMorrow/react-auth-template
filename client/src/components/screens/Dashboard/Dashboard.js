import React from "react";
import { logoutUser } from "../../../store/auth/authActions";
import { useDispatch } from "react-redux";

const Dashboard = (props) => {
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutUser(props.history));
  };
  return (
    <div>
      <h1>Welcome to the Dashboard</h1>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
