import React from "react";
import Header from "../../components/Header";

import arteLogin from "../../images/arte_loginAdm.svg";

const LoginAdm = () => {
  return (
    <>
      <Header />

      <main>
        <h4 class="tituloLogin">Login</h4>

        <div class="formulario">
          <form>
            <label for="nome">Nome do usuário:</label>
            <input
              required
              type="text"
              id="nome"
              name="nome"
              placeholder="Digite o nome de usuário"
              title="Digite o nome de usuário"
            />
            <label for="senha">Senha:</label>
            <input
              required
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              name="senha"
              title="Digite sua senha"
            />
            <button
              class="botaoEntrar2"
              name="logar"
              type="submit"
              title="Clique após ter preenchido seus dados"
            >
              <a href="area-adm">Entrar</a>
            </button>
            <a
              class="esqueceuSenha"
              href="/"
              title="Clique aqui caso tenha esquecido sua senha"
            >
              Esqueceu sua senha?
            </a>
          </form>
          <img
            src={arteLogin}
            alt="logo administrador"
            title="Arte de pessoas construindo um site"
          />
        </div>
      </main>
    </>
  );
};

export default LoginAdm;
