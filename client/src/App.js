import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// Components
import Register from "./components/Register/Register";
import Landing from "./components/Landing/Landing";

function App() {
    return (
        <Router>
            <Route exact path="/" component={Landing} />
            <Route exact path="/register" component={Register} />
        </Router>
    );
}

export default App;
