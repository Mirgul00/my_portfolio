import jsLogo from "../assets/js-logo.png";
import reactLogo from "../assets/react-logo.png";
import cssLogo from "../assets/css-logo.png";
import htmlLogo from "../assets/html-logo.png";
import nodejs from "../assets/nodejs.png";
import bootstrap from "../assets/bootstrap.jpeg"
import React from "react";
import "../componentsStyle/MyStack.css";

function MyStack() {
  const techStack = [
    { name: "JavaScript", image: jsLogo },
    { name: "React", image: reactLogo },
    { name: "CSS", image: cssLogo },
    { name: "HTML", image: htmlLogo },
    { name: "Node.js", image: nodejs },
    { name: "Bootstrap", image: bootstrap },
  ];

  return (
    <section id="my-stack" className="my-stack">
      <h2>Мой Stack</h2>
      <div className="stack-grid">
        {techStack.map((tech, index) => (
          <div className="tech-card" key={index}>
            <img src={tech.image} alt={tech.name} />
            <h3>{tech.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default MyStack;