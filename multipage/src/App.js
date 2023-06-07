import "./App.css";
import About from "./pages/About";
import Article from "./pages/Article";
import Contact from "./pages/Contact";
import Home from "./pages/Home";

import { BrowserRouter, NavLink, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <h1>My Articles</h1>
          {/* <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link> */}
          <NavLink exact to="/">
            Home
          </NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/article/:id" component={Article} />
        </Switch>
      </BrowserRouter>
    </div>
  );
  // return (
  //   <div className="App">
  //     <BrowserRouter>
  //       <nav>
  //         <h1>Multi Page</h1>
  //         <NavLink exact to="/">
  //           Home
  //         </NavLink>
  //         <NavLink to="/about">About</NavLink>
  //         <NavLink to="/contact">Contact</NavLink>
  //       </nav>
  //       <Switch>
  //         <Route exact path="/" component={Home} />
  //         <Route path="/about" component={About} />
  //         <Route path="/contact" component={Contact} />
  //       </Switch>
  //     </BrowserRouter>
  //   </div>
  // );
}

export default App;
