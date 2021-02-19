import React from 'react'
import Menu from '../../components/Menu'
import TituloFeed from '../../components/TituloFeed'

import instagram from "../../images/publi/instagram.png";
import recode from "../../images/publi/recode.png";

import "../../style/feedInicio.css";

const Vagas = () => {
  const [vaga, setVaga] = React.useState([])

  React.useEffect(() => {
    async function buscarVagas() {
      const req = await fetch('http://localhost:3011/validavagas')
      const res = await req.json()
      setVaga(res)
    }
    buscarVagas()
  }, [])

  return (
    < >
      <Menu />
      <TituloFeed titulo="Vagas"/>

      <main className="conteudoPrincipal">
        <section className="vagas">
          {vaga &&
            vaga.map(({idVaga, cargo, descricao, empresa, contato}) => (
              <div key={idVaga} className="vaga">
                <h3>{cargo}</h3>
                <p>{descricao}</p>
                <p>Empresa: {empresa}</p>
                <p>Rio de Janeiro, RJ</p>
                <a href={contato} target="_blank" rel="noreferrer">Saiba Mais</a>
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

export default Vagas
