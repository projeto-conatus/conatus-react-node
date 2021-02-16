import React from "react";
import Header from '../../components/Header'

import '../../style/estilologin.css'
import arteLogin from '../../images/arte_login.svg'

const Login = () => {
  return (
    <>
      <Header />

      <main>
        <h4 className='tituloLogin'>Login</h4>
        <div className="formulario">
          <form>
            <label htmlFor="email">E-mail:</label>
            <input
              required
              type="text "
              id="email"
              placeholder="Digite seu e-mail"
              name="email"
              title="Digite seu e-mail"
            />
            <label htmlFor="senha">Senha:</label>
            <input
              required
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              name="senha"
              title="Digite sua senha"
            />
            <button
              className="botaoEntrar2"
              name="logar"
              title="Clique após ter preenchido seus dados"
            >
              <a href="feed">Entrar</a>
            </button>
            <a
              className="esqueceuSenha"
              href="/"
              title="Clique aqui caso tenha esquecido sua senha"
              onClick={(e) => e.preventDefault()}
            >
              Esqueceu sua senha?
            </a>
          </form>
          <img
            src={arteLogin}
            alt="Logo do menino"
            title="Arte ilustrativa com dois jovens"
          />
        </div>
      </main>
    </>
  );
};

export default Login;
