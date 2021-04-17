import React from "react";
import "./BlogItem.css";

interface BlogItemProps {
  titulo: string;
  resumo: string;
  link: string;
}

export const BlogItem: React.FC<BlogItemProps> = (props) => {
  return (
    <div className="blog-item">
      <a href={props.link} className="titulo">
        <span>{props.titulo}</span>
      </a>
      <span className="resumo">{props.resumo}</span>
    </div>
  );
};
