import React from "react";
import Header from "../../components/Header";

import "bootstrap/dist/css/bootstrap.css";
import Cadastrar from "./cadastrar";
import Editar from "./editar";

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
  const [editar, setEditar] = React.useState(false);
  const [artigo, setArtigo] = React.useState([]);

  React.useEffect(() => {
    async function buscarArtigos() {
      const req = await fetch("http://localhost:3011/selectartigo");
      const res = await req.json();
      setArtigo(res);
    }
    buscarArtigos();
  }, [setArtigo]);

  function handleDelete(id) {
    fetch(`http://localhost:3011/deleteArtigo/${id}`, {
      method: "DELETE",
      body: JSON.stringify(id)
    })
      .then((res) => setArtigo(artigo.filter(art => art.id !== id)));
  }

  function handleCadastro() {
    setCadastro((cadastro) => (cadastro = !cadastro));
  }

  function handleEditar(id) {
    setEditar((editar) => (editar = !editar)); 
  }

  return (
    <>
      <Header />

      <div className="container mt-5">
        <div className="table-responsive">
          <h4 className="text-center">Área de Administração</h4>
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
                artigo.map(({ id, idAutor, titulo, subtitulo, data }) => (
                  <tr key={id}>
                    <td>{titulo}</td>
                    <td>{subtitulo}</td>
                    <td>{idAutor}</td>
                    <td>{data}</td>
                    <td>
                      <button className="btn btn-warning" onClick={() => handleEditar(id)}>{!editar ? 'Editar' : 'Ocultar'}</button>
                    </td>
                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => handleDelete(id)}
                      >
                        Apagar
                      </button>
                    </td>
                  </tr>
                ))
              }
            </tbody>
          </table>
          {editar && <Editar />}
          {cadastro && <Cadastrar />}

          <div className="text-center">
            <button
              className={
                !cadastro ? "btn btn-primary mb-3" : "btn btn-danger mb-3"
              }
              onClick={handleCadastro}
            >
              {!cadastro ? "Cadastrar novos artigos" : "Ocultar "}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AreaAdm;
