//Query para selecionar, inserir, deletar e update

const db = require("../config/connection");

class Artigo {
  constructor() {
    this.titulo;
    this.subtitulo;
    this.autor;
    this.texto;
    this.imagem;
  }

  selectAll(req, res) {
    db.query("SELECT a.titulo, a.subtitulo, a.texto, a.imagem, c.nome, a.imagem FROM autores AS c INNER JOIN artigo AS a ON c.idAutor = a.autor", (error, result) => {
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
