import React from "react";

import logo from "../../images/logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footerContainer">
        <a href="#homePage">
          <img src={logo} alt="logomarca da Conatus" className="logoFooter" />
        </a>

        <p className="tituloFooter">
          Projeto Conatus &reg; <span id="dataAno"></span>
        </p>

        <p className="email" style={{ fontWeight: "bold" }}>
          projeto.conatus@gmail.com
        </p>

        <p className="subtituloFooter">
          Um projeto criado em: <br />
          Queimados, Rio de Janeiro e São Gonçalo, RJ
        </p>

        <h4 className="redes">Redes sociais</h4>

        <div className="linksContato">
          <div className="icones">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/projeto-conatus"
            >
              <i className="fab fa-github">
                <span>Github</span>
              </i>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.instagram.com/conatusprojeto"
            >
              <i className="fab fa-instagram">
                <span>Instagram</span>
              </i>
            </a>

            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/projeto-conatus"
            >
              <i className="fab fa-linkedin">
                <span>LinkedIn</span>
              </i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
