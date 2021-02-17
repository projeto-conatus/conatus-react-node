//Query para inserir dados (cadastro), para selecionar dados (validar login), selecionar tipo escolaridade, selecionar tipo escola 

const db = require("../config/connection");

//contrução de variáveis restritas
class Usuario {
  constructor() {
    this.nome;
    this.sobrenome;
    this.cpf;
    this.dataNascimento;
    this.tipoEscola;
    this.email;
    this.senha;
  }

  //query para selecionar todos usuário do BD (utilizar para validar) da tabela usuario
  selectUsuario(req, res) {
    db.query(`SELECT * FROM usuario WHERE email = '${this.email}' AND senha = '${this.senha}' LIMIT 1;`, (error, result) => {
      error ? res.send(error) : res.json(result);
    });
  }

  //query para selecionar tipo de escola( publica estadual, publica federal) da tabela tipoescola
  selectTipoEscola(req, res) {
    db.query("SELECT * FROM tipoescola", (error, result) => {
      error ? res.send(error) : res.json(result);
    });
  }

  //query para selecionar tipo de escolaridade( fundamental, medio, superior ) da tabela nivelescolaridade
  selectEscolaridade(req, res) {
    db.query("SELECT * FROM nivelescolaridade", (error, result) => {
      error ? res.send(error) : res.json(result);
    });
  }

  //query para inserir usuario no bd
  insertUsuario(req, res) {
    db.query(
      `Insert into usuario (nome, sobrenome, cpf, dataNascimento, escolaridade, tipoEscola, email, senha)
         Values  ('${this.$nome}', '${this.sobrenome}', '${this.cpf}', '${this.dataNascimento}', '${this.escolaridade}', '${this.tipoEscola}', '${this.email}', '${this.senha}');`, (error, result) => {
        error ? res.send(error) : res.status(201).send("Artigo cadastrado!")
      }
    );
  }
}

module.exports = new Usuario();
