import React from "react";
import "../componentsStyle/Home.css";
import my_photo from "../assets/portfolio.jpg";

function Home() {
  return (
    <section id="home" className="home">
      {/* Текстовая часть */}
      <div className="text-container">
        <h1>Привет! Я Миргуль</h1>
        <p>Frontend-разработчик | UI/UX-дизайнер</p>
      </div>

      {/* Фото */}
      <div className="myphoto">
        <img src={my_photo} alt="Миргуль" />
      </div>
    </section>
  );
}

export default Home;

