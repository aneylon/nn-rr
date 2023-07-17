import { BrowserRouter, Route, Switch } from "react-router-dom";

import Create from "./pages/create/Create";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Dashboard from "./pages/dashboard/Dashboard";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
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
