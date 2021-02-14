//Query para selecionar, inserir, deletar e update

const db = require("../config/connection");

class Artigo {
  constructor() {
    this.id;
    this.titulo;
    this.subtitulo;
    this.texto;
    this.imagem;
    this.autor;
  }

  
  selectAll(req, res) {
    db.query(
      "SELECT * FROM autores AS c INNER JOIN artigo AS a ON c.idAutor = a.autor", 
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  insertArtigo(req, res) {

    //esse autor que recebemos no formulário é o codigo do autor
    //no select que será feito o inner join com a tabela de autor para retornar nome do autor
    db.query(
      `INSERT INTO artigo (titulo, subtitulo, autor, texto, imagem) VALUES ('${this.titulo}', '${this.subtitulo}', '${this.autor}', '${this.texto}', '${this.imagem}')`,
      (error, result) => {
        error ? res.send(error) : res.status(201).send("Artigo cadastrado!");
      }
    );
  }


  selectPorId(req, res) {
    db.query(
      `SELECT * FROM artigo WHERE id = '${this.id}'`,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }

  updateArtigo(req, res) {
    db.query(
      `UPDATE artigo SET titulo = '${this.titulo}', subtitulo = '${this.subtitulo}', autor = '${this.autor}', texto = '${this.texto}', imagem = '${this.imagem}' WHERE id = '${this.id}'`, 
      (error, result) => {
        error ? res.send(error) : res.status(200).send("Artigo atualizado!");
      }
    );
  }

  deleteArtigo(req, res) {
    db.query(
      `DELETE FROM artigo WHERE id = '${this.id}'`,
      (error, result) => {
        error ? res.send(error) : res.status(200).send("Artigo deletado!");
      }
    );
  }

}

module.exports = new Artigo();
