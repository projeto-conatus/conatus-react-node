import React from 'react'

import {NavLink} from 'react-router-dom'

import '../style/headerOutrasPaginas.css'
import logo from '../images/logo.svg'
import arrow from '../images/arrow-back.svg'

const Header = () => {
  return (
    <header className="header2">
        <div className="headerContainer2">
          <div className="logoContainer2">
            <img
              src={logo}
              alt="Logo da Conatus"
              title="logo da Conatus"
            />
            <span>Conatus</span>
          </div>

          <nav className="navBar">
            <NavLink
              to="/"
              className="botaoInicio"
              title="Clique aqui para voltar a tela inicial"
            >
              Início
            </NavLink>
            <div className="iconeVoltar">
              <NavLink to='/'>
              <img
                  src={arrow}
                  alt="Clique aqui para voltar a tela inicial"
                />
              </NavLink>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default Header