import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
// Components
import Register from "./components/screens/Register/Register";
import Login from "./components/screens/Login/Login";
import Landing from "./components/screens/Landing/Landing";

function App() {
  return (
    <Router>
      <Route exact path="/" component={Landing} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/login" component={Login} />
    </Router>
  );
}

export default App;
