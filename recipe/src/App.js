import "./App.css";
import {
  BrowserRouter,
  // NavLink,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Search from "./pages/search/Search";
import Recipe from "./pages/recipe/Recipe";
import Create from "./pages/create/Create";
import ThemeSelector from "./components/ThemeSelector/ThemeSelector";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <ThemeSelector />
        {/* <nav>
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/search">Search</NavLink>
          <NavLink to="/recipe">Recipe</NavLink>
          <NavLink to="/create">Create</NavLink>
        </nav> */}
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/search" component={Search} />
          <Route path="/recipe/:id" component={Recipe} />
          <Route path="/create" component={Create} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
