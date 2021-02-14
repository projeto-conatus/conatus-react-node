const db = require("../config/connection");

class Artigo {
  constructor() {
    this.titulo;
    this.subtitulo;
    this.autor;
    this.texto;
    this.imagem;
  }
  //OBS: descobrir o porquê não é interessante passar req,res aqui
  selectAll(req, res) {
    db.query("SELECT * FROM artigo", (error, result) => {
      error ? res.send(error) : res.json(result);
    });
  }

  insertArtigo(req, res) {

    db.query(
      `INSERT INTO artigo (titulo, subtitulo, autor, texto, imagem) VALUES ('${this.titulo}', '${this.subtitulo}', '${this.autor}', '${this.texto}', '${this.imagem}')`,
      (error, result) => {
        error ? res.send(error) : res.status(201).send("Artigo cadastrada")
      }
    );
  }
}

module.exports = new Artigo();
