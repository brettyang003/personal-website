import React from "react";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skills/Skills";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects id="projects" />
      <Skill />
    </div>
  );
}

export default App;
