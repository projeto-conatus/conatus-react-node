import React from "react";
import Header from "../../components/Header";

import "bootstrap/dist/css/bootstrap.css";
import Cadastrar from "./cadastrar";

const style = {
    textAlign: 'center',
    padding: '20px 0px',
    margin: '20 0px',
    textTransform: 'uppercase',
    fontSize: '1.5em',
    fontWeight: 'bold',
    letterSpacing: '.1em',
  
}



const AreaAdm = () => {
  const [cadastro, setCadastro] = React.useState(false)

  function handleClick(e) {
    e.preventDefault()
    setCadastro((cadastro) => cadastro = !cadastro)
  }

  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="table-responsive">
          <h2>Área de Administração</h2>
          <h3 className="tituloArtigos" style={style}>Artigos cadastrados no banco de dados</h3>
          <table className="table table-striped table-hover">
            <thead>
              <tr>
                <th scope="col">Título do Artigo</th>
                <th scope="col">Subtítulo</th>
                <th scope="col">Id Autor</th>
                <th scope="col">Data de criação</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>1</td>
                <td>2</td>
                <td>3</td>
                <td>4</td>
                <td>
                  <button className="btn btn-warning">
                    <a name="btn_editar" href="/">Editar</a>
                  </button>
                </td>
                <td>
                  <form>
                    <input type="hidden" name="id" />
                    <button
                      type="submit"
                      name="btn_deletar"
                      className="btn btn-danger"
                    >
                      <a name="btn_deletar" href="/">Apagar</a>
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
          <br />

          {cadastro && <Cadastrar />}
          <div className="text-center">
            <a href="/" className={!cadastro ? 'btn btn-primary' : 'btn btn-danger'} role="button"
            onClick={handleClick}
            >
              {!cadastro ? 'Cadastrar novos artigos' : 'Ocultar '}
            </a>
          </div>

        </div>
      </div>

      
    </>
  );
};

export default AreaAdm;
