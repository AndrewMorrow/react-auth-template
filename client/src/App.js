import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
// Components
import Register from "./components/screens/Register/Register";
import Login from "./components/screens/Login/Login";
import Landing from "./components/screens/Landing/Landing";
import MyAccount from "./components/screens/MyAccount/MyAccount";
import Dashboard from "./components/screens/Dashboard/Dashboard";
import PasswordResetReq from "./components/screens/PasswordResetReq/PasswordResetReq";
import PasswordReset from "./components/screens/PasswordReset/PasswordReset";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navbar from "./components/partials/Navbar/Navbar";
import { logoutUser } from "./store/auth/authActions";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./store/auth/authActions";

const App = (props) => {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      // sets token in default axios headers
      setAuthToken(token);

      // sets user in state from token
      setCurrentUser(decoded);

      // logout if token expired
      if (decoded.exp < currentTime) {
        logoutUser();
        window.location.href = "./login";
      }
    }
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <div className="container max-w-5xl xl:max-w-7xl  ">
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/passwordResetReq" component={PasswordResetReq} />
        <Route exact path="/passwordReset" component={PasswordReset} />

        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          <PrivateRoute exact path="/account" component={MyAccount} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
