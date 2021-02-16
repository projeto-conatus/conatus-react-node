import React from 'react'

import Menu from '../../components/Menu'
import TituloFeed from '../../components/TituloFeed'

import instagram from "../../images/publi/instagram.png";
import recode from "../../images/publi/recode.png";

import "../../style/feedInicio.css";

const Mentoria = () => {
  const [mentores, setMentores] = React.useState([])

  React.useEffect(() => {
    async function buscarMentores() {
      const req = await fetch('http://localhost:3011/selectmentores')
      const res = await req.json()
      setMentores(res)
    }
    buscarMentores()
  }, [])

  return (
    < >
      <Menu />
      <TituloFeed titulo="Mentoria"/>

      <main className="conteudoPrincipal">
        <section className="mentoria">
          {mentores &&
            mentores.map(({idMentor, nome, cargoAtual, formacao, linkedin, descricao, foto}) => (
              <div key={idMentor} className="mentores">
                <img src={foto} alt="foto"/>
                <h3>{nome}</h3>
                <p>{cargoAtual}</p>
                <p>{formacao}</p>
                <p>{descricao}</p>
                <a href={linkedin} target="_blank" rel="noreferrer">Saiba mais</a>
              </div>
            ))

          }

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

export default Mentoria
