import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//* pages import
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
//* import components
import Topnav from "./components/Topnav";

//!  change nav

//* main return
function App() {
  return (
    <Router>
      <Topnav />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/contact">
          <Contact />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="*">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
