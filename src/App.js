import React from "react";
import { Route } from "react-router-dom";
import Nav from "./Nav/Nav";
import Home from "./Home/Home";
import Project from "./Project/Project";
import Contact from "./Contact/Contact";
import Stack from "./Skills/Stack";
import "./index.css";

function App() {
  return (
    <>
      <Nav />
      <Route exact path="/" component={Home} />
      <Route path="/skills" component={Stack} />
      <Route path="/projects" component={Project} />
      <Route path="/contact" component={Contact} />
    </>
  );
}

export default App;
