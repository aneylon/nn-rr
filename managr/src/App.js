import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

import Create from "./pages/create/Create";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
import Project from "./pages/project/Project";
import Dashboard from "./pages/dashboard/Dashboard";

import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Sidebar from "./components/sidebar/Sidebar";
import { useAuthContext } from "./hooks/useAuthContext";

function App() {
  const { authIsReady, user } = useAuthContext();
  return (
    <div className="App">
      {authIsReady && (
        <BrowserRouter>
          {user && <Sidebar />}
          <div className="container">
            <Navbar />
            <Switch>
              {/* <Route exact path="/" component={Dashboard} /> */}
              <Route exact path="/">
                {!user && <Redirect to="/login" />}
                {user && <Dashboard />}
              </Route>
              {/* <Route path="/project/:id" component={Project} /> */}
              <Route path="/project/:id">
                {!user && <Redirect to="/login" />}
                {user && <Project />}
              </Route>
              {/* <Route path="/create" component={Create} /> */}
              <Route path="/create">
                {!user && <Redirect to="/login" />}
                {user && <Create />}
              </Route>
              {/* <Route path="/signup" component={Signup} /> */}
              <Route path="/signup">
                {user && <Redirect to="/" />}
                {!user && <Signup />}
              </Route>
              {/* <Route path="/login" component={Login} /> */}
              <Route path="/login">
                {user && <Redirect to="/" />}
                {!user && <Login />}
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      )}
    </div>
  );
}

export default App;
