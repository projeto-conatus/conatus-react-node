import React from "react";
import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "../../style/cadastro.css";
import Modal from "../../components/Modal";

const Cadastro = () => {
  const [sucesso, setSucesso] = React.useState(null)
  const [form, setForm] = React.useState({
    nome: '',
    sobrenome: '',
    cpf: '',
    dataNascimento: '',
    escolaridade: '',
    tipoEscola: '',
    email: '',
    senha: '',
  });
  
  function handleChange({target}) {
    const {id, value} = target
    setForm({...form, [id]: value})
  }

  function handleSubmit(e) {
    e.preventDefault()
    fetch('http://localhost:3011/insertUsuario', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    }).then((res) => setSucesso(res))
    function handleReset() {
      setForm({...form, 
      nome: '',
      sobrenome: '',
      cpf: '',
      dataNascimento: '',
      escolaridade: '',
      tipoEscola: '',
      email: '',
      senha: '',
      })
    }
    handleReset()
  }

  return (
    <>
      <Header />
      <h3 className="tituloCadastro">Cadastre-se</h3>

      <div className="container">
        <div className="col-md-6 offset-md-3">
          <form className="needs-validation" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="validationCustom01">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="nome"
                  name="nome"
                  placeholder="Digite seu nome"
                  required
                  value={form.nome}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  <p>Favor preencher este campo</p>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="validationCustom02">Sobrenome</label>
                <input
                  type="text"
                  className="form-control"
                  id="sobrenome"
                  name="sobrenome"
                  placeholder="Digite seu sobrenome"
                  required
                  value={form.sobrenome}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  <p>Favor preencher este campo</p>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="validationCustom03">CPF</label>
                <input
                  type="number"
                  className="form-control"
                  id="cpf"
                  name="cpf"
                  placeholder="Digite seu CPF"
                  required
                  value={form.cpf}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  <p className="pCPF">Digite 11 números</p>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="validationCustom04">Data de Nasc.</label>
                <input
                  type="date"
                  className="form-control"
                  id="dataNascimento"
                  name="dataNascimento"
                  title="Digite sua data de nascimento"
                  required
                  value={form.dataNascimento}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  <p>Favor preencher este campo</p>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="validationCustom12">Escolaridade</label>
                <select
                  className="form-control"
                  id="escolaridade"
                  name="escolaridade"
                  required
                  value={form.escolaridade}
                  onChange={handleChange}
                >
                  <option value='' disabled>Selecione</option>
                  <option value="EnsinoFundamental">Ensino Fundamental</option>
                  <option value="EnsinoMedio">Ensino Médio</option>
                  <option value="EnsinoSuperior">Ensino Superior</option>
                </select>
                <div className="invalid-feedback">
                  <p>Favor preencher este campo</p>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="validationCustom13">Tipo de Escola</label>
                <select
                  className="form-control"
                  id="tipoEscola"
                  name="tipoEscola"
                  value={form.tipoEscola}
                  onChange={handleChange}
                  required
                >
                  <option value='' disabled>Selecione</option>
                  <option value='Pública - Municipal'>Pública - Municipal</option>
                  <option value="Pública - Estadual">Pública - Estadual</option>
                  <option value="Pública - Federal">Pública - Federal</option>
                </select>
                <div className="invalid-feedback">
                  <p>Favor preencher este campo</p>
                </div>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="validationCustom18">Email</label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="email@exemplo.com"
                  required
                  value={form.email}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  <p>Digite um e-mail válido</p>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="validationCustom19">Senha</label>
                <input
                  type="password"
                  className="form-control"
                  id="senha"
                  name="senha"
                  placeholder="Senha"
                  required
                  minLength="6"
                  value={form.senha}
                  onChange={handleChange}
                />
                <div className="invalid-feedback">
                  <p>Digite pelo menos 6 digitos</p>
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg btn-block enviar"
              name="cadastrar"
            >
              Cadastrar
            </button>
          </form>
          {sucesso && sucesso.ok === true && <p className="p-3 text-white bg-success">Cadastrado com sucesso!!</p>}
          
          {sucesso && sucesso.ok === false && <p className="p-3 text-white bg-danger">Oops! Alguma coisa está errada.</p>}

        </div>
      </div>
      <Modal />
    </>
  );
};

export default Cadastro;
