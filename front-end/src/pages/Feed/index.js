import React from "react";
import Menu from "../../components/Menu";

import "../../style/feedInicio.css";

import instagram from "../../images/publi/instagram.png";
import recode from "../../images/publi/recode.png";
import TituloFeed from "../../components/TituloFeed";

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
                <p>{texto}</p>
              </section>
          ))
        }
      </main>

        <div className="lateral">
          <section className="listaArtigos">
            <h3>Lista de Artigos</h3>
            <ul>
              <li>
                <a href="##"> | 20/01/21 </a>
              </li>
            </ul>
          </section>

          <section className="publi">
            <h3>Publicidade</h3>
            <img
              src={instagram}
              alt="Nos siga no Instagram"
              title="Nos siga no Instagram"
            />
            <img src={recode} alt="Conheça a Recode" title="Conheça a Recode" />
          </section>

          <section className="novidades">
            <h3>Novidades</h3>
            <p></p>
          </section>
        </div>
       

    </>
  );
};

export default Feed;
