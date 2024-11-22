import React from "react";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import MyStack from "./components/MyStack";

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
