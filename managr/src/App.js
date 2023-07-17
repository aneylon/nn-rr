import { BrowserRouter, Route, Switch } from "react-router-dom";

import Create from "./pages/create/Create";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Dashboard from "./pages/dashboard/Dashboard";

import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <h1>Managr</h1>
        <div className="container">
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={Project} />
            <Route path="/create" component={Create} />
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
