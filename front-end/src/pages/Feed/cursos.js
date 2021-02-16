import React from "react";

import "../../style/feedTrilha.css";

import informatica from "../../images/cursos/primeiros-passos-info.png";
import ingles from "../../images/cursos/primeiros-passos-ingles.png";
import curriculo from "../../images/cursos/curriculo1.png";

import Menu from "../../components/Menu";
import TituloFeed from "../../components/TituloFeed";

const Cursos = () => {
  return (
    <>
      <Menu />

      <TituloFeed titulo="Cursos" />

      <main className="conteudoPrincipal2">
        <a className="cursos" href="curso">
          <img
            src={informatica}
            alt="Primeiros passos em informática"
            title="Primeiros passos em informática"
          />
        </a>
        <a className="cursos" href="##">
          <img
            src={ingles}
            alt="Primeiros passos em inglês"
            title="Primeiros passos em inglês"
          />
        </a>
        <a className="cursos" href="##">
          <img
            src={curriculo}
            alt="Como criar um bom currículo"
            title="Como criar um bom currículo"
          />
        </a>
      </main>
    </>
  );
};

export default Cursos;
