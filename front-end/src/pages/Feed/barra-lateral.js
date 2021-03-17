import React from 'react'

import instagram from "../../images/publi/instagram.png";
import recode from "../../images/publi/recode.png";

const Sidebar = () => {
  return (
      <div className="lateral"> 
        <section className="listaArtigos">
          <h3>Parceiros</h3>
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
  )
}

export default Sidebar
