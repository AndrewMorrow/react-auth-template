import React, { useEffect } from "react";

import { setErrors } from "../../../store/error/errorActions";
import { useDispatch, useSelector } from "react-redux";
// import { Link } from "react-router-dom";

const Dashboard = (props) => {
  // const dispatch = useDispatch();
  const state = useSelector((state) => state);
  console.log(state);
  const dispatch = useDispatch();

  // console.log(state);
  // console.log(props);

  useEffect(() => {
    return () =>
      dispatch(
        setErrors({
          response: {
            data: {},
          },
        })
      );
  }, [dispatch]);

  return (
    <main className="min-h-screen">
      <h1>Welcome to the Dashboard</h1>
    </main>
  );
};

export default Dashboard;
