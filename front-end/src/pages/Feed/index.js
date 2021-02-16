import React from "react";
import Menu from "../../components/Menu";

import "../../style/feedInicio.css";

import instagram from "../../images/publi/instagram.png";
import recode from "../../images/publi/recode.png";
import TituloFeed from "../../components/TituloFeed";

const Feed = () => {
  return (
    <>
      <Menu />

      <TituloFeed titulo="Início" />

      <main className="conteudoPrincipal">
        <section className="artigos">
          <img className="capa" src={instagram} alt=""/>
          <h1>Título do artigo</h1>
          <p className='autorArtigo'>Escrito por: $nome</p>
          <hr/>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fuga doloremque necessitatibus, commodi laboriosam tempora corporis blanditiis expedita ipsum explicabo incidunt magnam est at illo! Omnis error perferendis facere deserunt?
          Tenetur adipisci ullam rem a reiciendis neque illo dignissimos sint non temporibus tempore quas aliquam consectetur quis illum vitae, maiores dolor deserunt impedit fugit blanditiis. Natus recusandae perferendis magnam voluptates?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fuga doloremque necessitatibus, commodi laboriosam tempora corporis blanditiis expedita ipsum explicabo incidunt magnam est at illo! Omnis error perferendis facere deserunt?
          Tenetur adipisci ullam rem a reiciendis neque illo dignissimos sint non temporibus tempore quas aliquam consectetur quis illum vitae, maiores dolor deserunt impedit fugit blanditiis. Natus recusandae perferendis magnam voluptates?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fuga doloremque necessitatibus, commodi laboriosam tempora corporis blanditiis expedita ipsum explicabo incidunt magnam est at illo! Omnis error perferendis facere deserunt?
          Tenetur adipisci ullam rem a reiciendis neque illo dignissimos sint non temporibus tempore quas aliquam consectetur quis illum vitae, maiores dolor deserunt impedit fugit blanditiis. Natus recusandae perferendis magnam voluptates?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fuga doloremque necessitatibus, commodi laboriosam tempora corporis blanditiis expedita ipsum explicabo incidunt magnam est at illo! Omnis error perferendis facere deserunt?
          Tenetur adipisci ullam rem a reiciendis neque illo dignissimos sint non temporibus tempore quas aliquam consectetur quis illum vitae, maiores dolor deserunt impedit fugit blanditiis. Natus recusandae perferendis magnam voluptates?</p>

          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente fuga doloremque necessitatibus, commodi laboriosam tempora corporis blanditiis expedita ipsum explicabo incidunt magnam est at illo! Omnis error perferendis facere deserunt?
          Tenetur adipisci ullam rem a reiciendis neque illo dignissimos sint non temporibus tempore quas aliquam consectetur quis illum vitae, maiores dolor deserunt impedit fugit blanditiis. Natus recusandae perferendis magnam voluptates?</p>
        </section>
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
