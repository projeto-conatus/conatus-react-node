import React from "react";
import Header from "../../components/Header";
import "bootstrap/dist/css/bootstrap.css";
import "../../style/cadastro.css";
import Modal from "../../components/Modal";

const Cadastro = () => {
  // const [form, setForm] = React.useState({
  //   nome: '',
  //   sobrenome: '',
  //   cpf: '',
  //   dataNascimento: '',
  //   escolaridade: '',
  //   tipoEscola: '',
  //   email: '',
  //   senha: '',
  // });

  return (
    <>
      <Header />
      <h3 className="tituloCadastro">Cadastre-se</h3>

      <div className="container">
        <div className="col-md-6 offset-md-3">
          <form className="needs-validation">
            <div className="form-row">
              <div className="form-group col-md-6">
                <label htmlFor="validationCustom01">Nome</label>
                <input
                  type="text"
                  className="form-control"
                  id="validationCustom01"
                  name="nome"
                  placeholder="Digite seu nome"
                  required
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
                  id="validationCustom02"
                  name="sobrenome"
                  placeholder="Digite seu sobrenome"
                  required
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
                  id="validationCustom03"
                  name="cpf"
                  placeholder="Digite seu CPF"
                  required
                  min="1111111111"
                  maxLength="11"
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
                  id="validationCustom04"
                  name="dataNascimento"
                  title="Digite sua data de nascimento"
                  required
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
                  id="validationCustom12"
                  name="escolaridade"
                  required
                >
                  <option disabled selected>Selecione</option>
                  <option value="Ensino Fundamental">Ensino Fundamental</option>
                  <option value="Ensino Médio">Ensino Médio</option>
                  <option value="Ensino Superior">Ensino Superior</option>
                </select>
                <div className="invalid-feedback">
                  <p>Favor preencher este campo</p>
                </div>
              </div>

              <div className="form-group col-md-6">
                <label htmlFor="validationCustom13">Tipo de Escola</label>
                <select
                  className="form-control"
                  id="validationCustom13"
                  name="tipoEscola"
                >
                  <option disabled selected>Selecione</option>
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
                  id="validationCustom18"
                  name="email"
                  placeholder="email@exemplo.com"
                  required
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
                  id="validationCustom19"
                  name="senha"
                  placeholder="Senha"
                  required
                  minLength="6"
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
        </div>
      </div>
      <Modal />
    </>
  );
};

export default Cadastro;
