import React from 'react'

import Menu from '../../components/Menu'
import TituloFeed from '../../components/TituloFeed'

import instagram from "../../images/publi/instagram.png";
import recode from "../../images/publi/recode.png";

import "../../style/feedInicio.css";

const Mentoria = () => {
  return (
    < >
      <Menu />
      <TituloFeed titulo="Mentoria"/>

      <main className="conteudoPrincipal">
        <section className="mentoria">
         <div className="mentores">
           <img src="https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt=""/>
            <h3>Mentora da Silva Sauro</h3>
            <p>Cargo</p>
            <p className="descricao">Descrição Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptate sint mollitia omnis earum velit placeat dicta error architecto molestiae labore, tempora explicabo commodi! Debitis ab voluptatibus corporis laboriosam ipsam?</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="mentores">
           <img src="https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt=""/>
            <h3>Mentora da Silva Sauro</h3>
            <p>Cargo</p>
            <p className="descricao">Descrição Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptate sint mollitia omnis earum velit placeat dicta error architecto molestiae labore, tempora explicabo commodi! Debitis ab voluptatibus corporis laboriosam ipsam?</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="mentores">
           <img src="https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt=""/>
            <h3>Mentora da Silva Sauro</h3>
            <p>Cargo</p>
            <p className="descricao">Descrição Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptate sint mollitia omnis earum velit placeat dicta error architecto molestiae labore, tempora explicabo commodi! Debitis ab voluptatibus corporis laboriosam ipsam?</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="mentores">
           <img src="https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt=""/>
            <h3>Mentora da Silva Sauro</h3>
            <p>Cargo</p>
            <p className="descricao">Descrição Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptate sint mollitia omnis earum velit placeat dicta error architecto molestiae labore, tempora explicabo commodi! Debitis ab voluptatibus corporis laboriosam ipsam?</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="mentores">
           <img src="https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt=""/>
            <h3>Mentora da Silva Sauro</h3>
            <p>Cargo</p>
            <p className="descricao">Descrição Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptate sint mollitia omnis earum velit placeat dicta error architecto molestiae labore, tempora explicabo commodi! Debitis ab voluptatibus corporis laboriosam ipsam?</p>
            <a href="##" target="_blank">Saiba Mais</a>
         </div>

         <div className="mentores">
           <img src="https://images.unsplash.com/photo-1526382925646-27b5eb86796e?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80" alt=""/>
            <h3>Mentora da Silva Sauro</h3>
            <p>Cargo</p>
            <p className="descricao">Descrição Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt, voluptate sint mollitia omnis earum velit placeat dicta error architecto molestiae labore, tempora explicabo commodi! Debitis ab voluptatibus corporis laboriosam ipsam?</p>
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

export default Mentoria
