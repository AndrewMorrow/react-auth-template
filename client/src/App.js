import "./App.css";
import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import { useDispatch } from "react-redux";
// Components
import Register from "./components/screens/Register/Register";
import Login from "./components/screens/Login/Login";
import Landing from "./components/screens/Landing/Landing";
import Dashboard from "./components/screens/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import Navbar from "./components/partials/Navbar/Navbar";
import { logoutUser } from "./store/auth/authActions";
import setAuthToken from "./utils/setAuthToken";
import { setCurrentUser } from "./store/auth/authActions";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    if (localStorage.jwtToken) {
      const token = localStorage.jwtToken;
      const decoded = jwt_decode(token);
      const currentTime = Date.now() / 1000;

      setAuthToken(token);

      setCurrentUser(decoded);

      if (decoded.exp < currentTime) {
        logoutUser();
        window.location.href = "./login";
      }
    }
  }, [dispatch]);

  return (
    <Router >
      <Navbar />
      <div className="container max-w-5xl xl:max-w-7xl ">
        <Route exact path="/" component={Landing} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />

        <Switch>
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
