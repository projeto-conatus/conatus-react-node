import React from 'react'
import Menu from '../../components/Menu'
import TituloFeed from '../../components/TituloFeed'

import instagram from "../../images/publi/instagram.png";
import recode from "../../images/publi/recode.png";

import "../../style/feedInicio.css";

const Vagas = () => {
  return (
    < >
      <Menu />
      <TituloFeed titulo="Vagas"/>

      <main className="conteudoPrincipal">
        <section className="vagas">
         <div className="vaga">
            <h3>Vaga de emprego para trabalhar</h3>
            <p>Empresa</p>
            <p>Localização</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="vaga">
            <h3>Vaga de emprego para trabalhar</h3>
            <p>Empresa</p>
            <p>Localização</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="vaga">
            <h3>Vaga de emprego para trabalhar</h3>
            <p>Empresa</p>
            <p>Localização</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="vaga">
            <h3>Vaga de emprego para trabalhar</h3>
            <p>Empresa</p>
            <p>Localização</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="vaga">
            <h3>Vaga de emprego para trabalhar</h3>
            <p>Empresa</p>
            <p>Localização</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="vaga">
            <h3>Vaga de emprego para trabalhar</h3>
            <p>Empresa</p>
            <p>Localização</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="vaga">
            <h3>Vaga de emprego para trabalhar</h3>
            <p>Empresa</p>
            <p>Localização</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="vaga">
            <h3>Vaga de emprego para trabalhar</h3>
            <p>Empresa</p>
            <p>Localização</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="vaga">
            <h3>Vaga de emprego para trabalhar</h3>
            <p>Empresa</p>
            <p>Localização</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

        </section>
      </main>

        <div className="lateral">
          <section className="listaArtigos">
            <h3>Parceiros</h3>
            <ul>
              <li>
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
  )
}

export default Vagas
