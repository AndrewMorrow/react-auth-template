import React from "react";
import { useSelector } from "react-redux";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const state = useSelector((state) => state);

  return (
    <Route
      {...rest}
      render={(props) =>
        state.auth.isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
};

export default PrivateRoute;
