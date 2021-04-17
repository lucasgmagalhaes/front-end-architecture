import React from "react";
import logo from "../me.png";
import "./Header.css";

const HeaderItem: React.FC = (props) => {
  return <span className="header-item">{props.children}</span>;
};

export function Header() {
  return (
    <header className="App-header">
      <div className="header-top">
        <HeaderItem>Blog</HeaderItem>
        <HeaderItem>Sobre</HeaderItem>
        <HeaderItem>Descrição</HeaderItem>
      </div>
      <div className="header-content">
        <div className="header-content-img">
          <img src={logo} alt="" />
        </div>
        <div className="header-content-text">
          <h1>Lucas Gomes</h1>
          <p>
            Desenvolvedor Backend com foco em .NET Core, com bons conhecimentos
            em frameworks Front-end com foco em Angular. Conhecimentos em
            Typescript e testes unitários com Jest.
          </p>
        </div>
      </div>
    </header>
  );
}
