import React from "react";
import Menu from "../../components/Menu";

import "../../style/feedInicio.css";

import TituloFeed from "../../components/TituloFeed";
import { Outlet } from "react-router";
import Sidebar from "./barra-lateral";

const Feed = () => {
  const [artigo, setArtigo] = React.useState([])

  React.useEffect(() => {
    async function buscarArtigos() {
      const req = await fetch('http://localhost:3011/selectartigo')
      const res = await req.json()
      setArtigo(res)
    }
    buscarArtigos()
  }, [])

  return (
    <>
      <Menu />

      <TituloFeed titulo="Início" />

      <main className="conteudoPrincipal">
        {artigo &&
          artigo.map(({id, nome, titulo, subtitulo, texto, imagem }) => (
              <section key={id} className="artigos">
                <img className="capa" src={imagem} alt="capa do artigo"/>
                <h1>{titulo}</h1>
                <h3>{subtitulo}</h3>
                <p className="autorArtigo">Escrito por: {nome}</p>
                <hr/>
                <pre>{texto}</pre>
                <hr />
              </section>
              
          ))
        }
      </main>
        <Outlet />
        <Sidebar />
    </>
  );
};

export default Feed;
