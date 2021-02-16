import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { NavLink } from 'react-router-dom'

import '../style/feedHeader.css'
import logo from '../images/logo.svg'

const Menu = () => {
  const [menu, setMenu] = React.useState(false)

  const isMobile = useMediaQuery({query: '(max-width: 940px)'})
  
  React.useEffect(() => {
    if(isMobile === false)
        setMenu((menu) => menu = true)
    
  }, [isMobile])


  function handleClick() {
      setMenu((menu) => !menu)
  }

  const activeLink = {
      color: '#3AD29F',
      textDecoration: 'underline'
  }

  return (
    <header className="topMenu sidebar">
        <div className="headerBG"></div>
        <div className="headerContainer3">
            <div className="logoContainer3">
                <img src={logo} alt="Logo da Conatus" title="Logo da Conatus" />
            </div>

            <nav className="navBar3">
                <button className="botaoMenuFeed" onClick={handleClick} title="Menu">Menu</button>

                {menu &&
                    <div className="linksMenu">
                        <h4 className='saudacao-usuario'>Olá, $nome</h4>
                        <a href="##"><i className="far fa-bell"></i></a>
                        <a className="botaoPerfil" href="##">Perfil</a>
                        <NavLink activeStyle={activeLink} to="/feed">Início</NavLink>
                        <NavLink activeStyle={activeLink} to="/cursos">Cursos</NavLink>
                        <NavLink activeStyle={activeLink} to="/vagas">Vagas</NavLink>
                        <NavLink activeStyle={activeLink} to="/mentoria">Mentoria</NavLink>
                        <button className="botaoSair"><NavLink to="/">Sair</NavLink></button>
                    </div>
                }
            </nav>
        </div>
    </header>
  )
}

export default Menu
