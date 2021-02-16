import React from "react";

const Cadastrar = () => {
  return (
    <>
      <div className="container">
        <div className="col-md-6 offset-md-3">
          <form >
            <div className="form-row">
              <div className="form-group col-md-12">
                <label htmlFor="titulo-artigo">Título</label>
                <input
                  className="form-control"
                  type="text"
                  name="titulo"
                  id="titulo-artigo"
                />

                <label htmlFor="subtitulo-artigo">Subtítulo</label>
                <input
                  className="form-control"
                  type="text"
                  name="subtitulo"
                  id="subtitulo-artigo"
                />

                <label htmlFor="id-autor">ID do autor</label>
                <input
                  className="form-control"
                  type="text"
                  name="autor"
                  id="id-autor"
                />

                <label htmlFor="exampleFormControlTextarea1">Texto</label>
                <textarea
                  className="form-control"
                  name="texto"
                  id="texto-artigo"
                ></textarea>

                <label htmlFor="imagem">Nome da imagem</label>
                <input
                  className="form-control"
                  type="text"
                  name="imagem"
                  id="imagem"
                  placeholder="Exemplo: foto.jpg"
                />

                <button
                  type="submit"
                  name="btn_cadastrar"
                  className="btn btn-primary"
                >
                  Cadastrar
                </button>
                <hr/>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
export default Cadastrar;
