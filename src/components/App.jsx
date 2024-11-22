import React from "react";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Projects from "./Projects";
import Contact from "./Contact";
import MyStack from "./MyStack";


import "./App.css";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <MyStack />
      <Projects />
      <Contact />
      
    </div>
  );
}

export default App;
