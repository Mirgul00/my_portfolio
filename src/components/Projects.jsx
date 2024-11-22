import React from "react";
import "../componentsStyle/Projects.css";
import profile from "../assets/profile.png";
import tasks from "../assets/tasks.jpg";
import lulu from "../assets/lulu — копия.png";

const projects = [
  {
    title: "Портфолио",
    description: "Сайт-портфолио, сделанный на React.",
    image: profile,
    link: "https://www.figma.com/proto/aLuA7JgOnbaJIpiceDNmNU/lesson-4?page-id=0%3A1&node-id=1-4&t=HlK04hedRI4mUAxa-1", // Ссылка на проект
  },
  {
    title: "Онлайн курсы",
    description: "Таск-менеджер с базовым функционалом.",
    image: tasks,
    link: "https://www.figma.com/design/ERMXEqdfBqhIuC1mHAqHhY/OnStudy?node-id=0-1&t=TAOyHytrV5MUpntZ-1", // Ссылка на проект
  },
  {
    title: "Интернет-магазин",
    description: "Таск-менеджер с базовым функционалом.",
    image: lulu,
    link: "https://www.figma.com/design/paATF165uI4MPqNkfwLByi/4?node-id=0-1&t=ZHmdsAVkpp1Dn1bi-1", // Ссылка на проект
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">
      <h2>Мои проекты</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card"
            key={index}
          >
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Projects;
