import React from "react";
import NavBar from "./components/Navbar/Navbar";
import "./App.css";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Skill from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <Projects />
      <Skill />
      <Contact />
    </div>
  );
}

export default App;
