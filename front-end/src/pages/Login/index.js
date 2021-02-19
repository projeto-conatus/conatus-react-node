import React from "react";
import Header from '../../components/Header'

import '../../style/estilologin.css'
import arteLogin from '../../images/arte_login.svg'
import { NavLink } from "react-router-dom";

const Login = () => {
  const [sucesso, setSucesso] = React.useState(null)
  const [form, setForm] = React.useState({
    email: '',
    senha: '',
  })

  function handleChange({ target }) {
    const { id, value } = target
    setForm({...form, [id]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    // fetch('https://localhost:3011/loginusuario', {
    //   method: 'POST',
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(form)
    // }).then((res) => setSucesso(res))
    setForm({...form}, console.log(form))
  }

  return (
    <>
      <Header />

      <main>
        <h4 className='tituloLogin'>Login</h4>
        <div className="formulario">
          <form onSubmit={handleSubmit}>
            <label htmlFor="email">E-mail:</label>
            <input
              required
              type="text "
              id="email"
              placeholder="Digite seu e-mail"
              name="email"
              value={form.email}
              onChange={handleChange}
              title="Digite seu e-mail"
            />
            <label htmlFor="senha">Senha:</label>
            <input
              required
              type="password"
              id="senha"
              placeholder="Digite sua senha"
              name="senha"
              value={form.senha}
              onChange={handleChange}
              title="Digite sua senha"
            />
            <button
              className="botaoEntrar2"
              name="logar"
              title="Clique após ter preenchido seus dados"
              // to="/feed"
            >
              Entrar
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
        {sucesso && sucesso.ok && <p className='bg bg-success'>Tudo certo!</p>}
        {sucesso && sucesso.ok === false && <p className='bg bg-danger'>Tudo Errado!</p>}
      </main>
    </>
  );
};

export default Login;
