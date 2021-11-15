import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//* pages import
import Home from "./pages/home";
import About from "./pages/about";
import Contact from "./pages/contact";
import Error from "./pages/error";
//* import components
import Navbar from "./components/Navbar";

//* main return
function App() {
  return(
  <Router>
    <Navbar />

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

      <Route path="*">
        <Error/>
      </Route>
    </Switch>

  </Router>
  );
}

export default App;
