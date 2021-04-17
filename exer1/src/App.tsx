import React from "react";
import "./App.css";
import { BlogItem } from "./BlogItem";
import { Header } from "./Header";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app-body">
        <div className="body-container">
          <span className="blog-title">Últimas do blog</span>

          <BlogItem
            titulo="Top 10 Must-Have Tools for .NET Developers"
            link="https://medium.com/swlh/top-10-must-have-tools-for-net-developers-2432d9d395ff"
            resumo="As a most loved C# runtime, the .NET Framework is used by 75% of 
            all .NET engeneers around the world. This is waht has become the..."
          />

          <BlogItem
            titulo="useCallback Might be what you meant by useRef & useEffect"
            link="https://medium.com/welldone-software/usecallback-might-be-what-you-meant-by-useref-useeffect-773bc0278ae"
            resumo="Sometimes we respond to react element mounts. The first instinct is 
            to useRef & useEffect. But what you need is often useCallback"
          />

          <BlogItem
            titulo="How netflix scales its API with GraphQL Federation"
            link="https://netflixtechblog.com/how-netflix-scales-its-api-with-graphql-federation-part-1-ae3557c187e2?source=home---------2-83--------------------bf5fe35a_fc65_43ae_9afe_e68dd571bc01-------&gi=2b0a0a268cca"
            resumo="Learn how Netflix uses GraphQL federation for its API architecture
            offering a unified, curated API powered by decoupled back-end"
          />

          <span className="ver-tudo">Ver tudo</span>
        </div>
      </div>
    </div>
  );
}

export default App;
