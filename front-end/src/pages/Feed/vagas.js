import React from 'react'
import Menu from '../../components/Menu'
import TituloFeed from '../../components/TituloFeed'

import "../../style/feedInicio.css";
import Sidebar from './barra-lateral';

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

      <Sidebar />
    </>
  )
}

export default Vagas
