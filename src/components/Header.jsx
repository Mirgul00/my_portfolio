import React from "react";
import "../componentsStyle/Header.css";

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <a href="#home">Главная</a>
        <a href="#about">Обо мне</a>
        <a href="#projects">Мои проекты</a>
        <a href="#contact">Контакты</a>
      </nav>
    </header>
  );
}

export default Header;
