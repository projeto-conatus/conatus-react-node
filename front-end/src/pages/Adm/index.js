import React from "react";
import Header from "../../components/Header";

import "bootstrap/dist/css/bootstrap.css";
import Cadastrar from "./cadastrar";

const style = {
  textAlign: "center",
  padding: "20px 0px",
  margin: "20 0px",
  textTransform: "uppercase",
  fontSize: "1.5em",
  fontWeight: "bold",
  letterSpacing: ".1em",
};

const AreaAdm = () => {
  const [cadastro, setCadastro] = React.useState(false);
  const [artigo, setArtigo] = React.useState([])

  React.useEffect(() => {
    async function buscarArtigos() {
      const req = await fetch('http://localhost:3011/selectartigo')
      console.log(req);
      const res = await req.json()
      setArtigo(res)
    }
    buscarArtigos()
  }, [])


  function handleClick(e) {
    e.preventDefault();
    setCadastro((cadastro) => (cadastro = !cadastro));
  }

  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="table-responsive">
          <h2>Área de Administração</h2>
          <h3 className="tituloArtigos" style={style}>
            Artigos cadastrados no banco de dados
          </h3>
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
              {artigo &&
                artigo.map(({id, idAutor, titulo, subtitulo, data}) => (
              <tr key={id}>
                <td>{titulo}</td>
                <td>{subtitulo}</td>
                <td>{idAutor}</td>
                <td>{data}</td>
                <td>
                  <button className="btn btn-warning">
                    <a name="btn_editar" href="##" style={{textDecoration: 'none', color: 'white'}}>
                      Editar
                    </a>
                  </button>
                </td>
                <td>
                  <form>
                    <input type="hidden" name="id" />
                    <button
                      name="btn_deletar"
                      className="btn btn-danger"
                    >
                      <a name="btn_deletar" href="##" style={{textDecoration: 'none', color: 'white'}}>
                        Apagar
                      </a>
                    </button>
                  </form>
                </td>
              </tr>
              ))
              }
            </tbody>
          </table>
          <br />

          {cadastro && <Cadastrar />}

          <div className="text-center">
            <a
              href="/"
              className={!cadastro ? "btn btn-primary mb-3" : "btn btn-danger mb-3"}
              role="button"
              onClick={handleClick}
            >
              {!cadastro ? "Cadastrar novos artigos" : "Ocultar "}
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AreaAdm;
