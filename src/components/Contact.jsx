import React from "react";
import "../componentsStyle/Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Контакты</h2>
      <p>Свяжитесь со мной:</p>
      <ul>
        <li>Instagram: <a href="https://instagram.com">instagram.com/ваш_аккаунт</a></li>
        <li>Facebook: <a href="https://facebook.com">facebook.com/ваш_аккаунт</a></li>
        <li>TikTok: <a href="https://tiktok.com">tiktok.com/@ваш_аккаунт</a></li>
      </ul>
      <form>
        <input type="text" placeholder="Ваше имя" required />
        <input type="email" placeholder="Ваш email" required />
        <textarea placeholder="Ваше сообщение"></textarea>
        <button type="submit">Отправить</button>
      </form>
    </section>
  );
}

export default Contact;
