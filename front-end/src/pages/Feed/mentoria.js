import React from 'react'

import Menu from '../../components/Menu'
import TituloFeed from '../../components/TituloFeed'

import "../../style/feedInicio.css";
import Sidebar from './barra-lateral';

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

          <Sidebar />
    </>
  )
}

export default Mentoria
