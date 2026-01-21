// App.jsx
import React from "react";
import "./App.css";

function App() {
  const projects = [
    {
      title: "Restaurant Website",
      description: "Figma dizayn → responsiv sayt",
      link: "#",
    },
    {
      title: "E-commerce Platform",
      description: "React + API integratsiya",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "Shaxsiy loyihalar va kontaktlar bilan",
      link: "#",
    },
    {
      title: "Landing Page",
      description: "Tezkor va sodda, mobilga mos",
      link: "#",
    },
  ];

  return (
    <div className="app">
      <header className="header">
        <h1>💻 Full Stack Web Developer | React, JavaScript, HTML/CSS</h1>
        <p>
          Salom! Men web developer sifatida <b>mobil va desktopga mos saytlar</b> yarataman.
          Figma dizaynlarini tez va sifatli <b>HTML/CSS va React</b> yordamida kodga aylantiraman.
        </p>
        <p>
          🚀 Men qiladigan ishlar:
          <ul>
            <li>To‘liq responsiv web saytlar (telefon, planshet, kompyuter)</li>
            <li>Frontend va backend integratsiyasi</li>
            <li>UX/UI-ga mos dizaynlarni kodga aylantirish</li>
            <li>Tez va sifatli ish bajarish</li>
          </ul>
        </p>
      </header>

      <section className="projects">
        <h2>Mening ishlarim</h2>
        <div className="project-list">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link}>Ko‘rish</a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
