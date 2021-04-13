import React from "react";
import logo from "./me.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="header-top">
          <span>Blog</span>
          <span>Sobre</span>
          <span>Descrição</span>
        </div>
        <div className="header-content">
          <div className="header-content-img">
            <img src={logo} alt="" />
          </div>
          <div className="header-content-text">
            <h1>Lucas Gomes</h1>
            <p>
              Desenvolvedor Backend com foco em .NET Core, com bons
              conhecimentos em frameworks Front-end com foco em Angular.
              Conhecimentos em Typescript e testes unitários com Jest.
            </p>
          </div>
        </div>
      </header>
      <div className="app-body">
        <div className="body-container">
          <span className="blog-title">Últimas do blog</span>
          <div className="blog-item">
            <span className="titulo">
              5 dicas para sua carreira profissional
            </span>
            <span className="resumo">
              Confira algumas dicas que podem ajudar a alavancar sua carreira
              como desenvolvedor front end
            </span>
          </div>

          <div className="blog-item">
            <span className="titulo">
              5 dicas para sua carreira profissional
            </span>
            <span className="resumo">
              Confira algumas dicas que podem ajudar a alavancar sua carreira
              como desenvolvedor front end
            </span>
          </div>

          <span className="ver-tudo">Ver tudo</span>
        </div>
      </div>
    </div>
  );
}

export default App;
