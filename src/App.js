import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import AboutMe from "./pages/AboutMe";
import Studies from "./pages/Studies";
import ShowOffPage from "./pages/ShowOffPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/Contact" component={Contact} />
          <Route path="/AboutMe" component={AboutMe} />
          <Route path="/Studies" component={Studies} />
          <Route path="/ShowOffPage" component={ShowOffPage} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
