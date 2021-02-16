import React from "react";
import { NavLink } from "react-router-dom";

import "../../style/style.css";
import "../../style/headerHomePage.css";

import logo from "../../images/logo.svg";
import homeImage from "../../images/arte_homepage.svg";
import Apresentacao from "./Apresentacao";
import Footer from "./Footer";

const Home = () => {
  const [menu, setMenu] = React.useState(false);

  return (
    <>
      <div className="homePage" id="homePage">
        <header className="header">
          <div className="headerContainer">
            <div className="logoContainer">
              <img src={logo} alt="Logo da Conatus" title="Logo da Conatus" />
              <span>Conatus</span>
            </div>

            <p>
              <i className="fas fa-map-marker-alt"></i> Rio de Janeiro, RJ
            </p>

            <nav className="navBar">
              <button
                className="botaoMenu"
                title="Clique para acessar ou se cadastrar"
                onClick={() => setMenu(!menu)}
              >
                Acessar
              </button>

              {menu && (
                <ul className="itensMenu ">
                  <li>
                    <NavLink
                      to="login"
                      className="botaoAcessar"
                      title="Clique aqui caso ja tenha cadastro"
                    >
                      Entrar
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="cadastrar"
                      className="cadastrar"
                      title="Clique para se cadastrar"
                    >
                      Não tenho conta!
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="login-adm"
                      className="cadastrar"
                      title="Clique caso seja um colaborador"
                    >
                      Sou colaborador
                    </NavLink>
                  </li>
                </ul>
              )}
            </nav>
          </div>
        </header>

        <main className="mainHomePage">
          <h2 className="slogan">
            Desenvolvendo
            <br />
            o potencial
            <br />
            de jovens
            <br />
            através da
            <br />
            tecnologia!
          </h2>

          <img
            className="arteHomePageDesktop"
            src={homeImage}
            alt="ilustração de dois jovens abraçando o planeta terra"
            title="Abrace o mundo você também! =D"
          />

          <a
            href="#apresentacao"
            className="botaoEntrar bt"
            title="Clique aqui e conheça a Conatus!"
          >
            Conheça
          </a>
        </main>
      </div>

      <Apresentacao />
      <Footer />
    </>
  );
};

export default Home;
