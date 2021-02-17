//Query para inserir dados (cadastro), para selecionar dados (validar login), selecionar tipo escolaridade, selecionar tipo escola

const db = require("../config/connection");

//contrução de variáveis restritas
class Usuario {
  constructor() {
    this.nome;
    this.sobrenome;
    this.cpf;
    this.dataNascimento;
    this.escolaridade;
    this.tipoEscola;
    this.email;
    this.senha;
  }

  //query para inserir usuario no bd
  insertUsuario(req, res) {
    const erros= [];

    if(!this.nome || !this.sobrenome || !this.cpf || !this.email || !this.senha) {
      erros.push({ mensagem : "Por favor preencha todos os campos"})

  }
    if (this.nome.length < 3) {
        erros.push({ mensagem: "Nome de usuário deve ter, pelo menos, 3 dígitos" })
    }

    if (this.senha.length <6) {
        erros.push({ mensagem: "Senha deve ter, pelo menos, 6 dígitos" })
    }

    if(this.cpf.length < 11) {
      erros.push({ mensagem : "O CPF deve ter 11 dígitos. Digite um cpf válido."})
    }

    if(erros.length > 0){
        res.status(400).json(erros)
    } else {
      db.query(
        `INSERT INTO usuario (nome, sobrenome, cpf, dataNascimento, escolaridade, tipoEscola, email, senha) VALUES  ('${this.nome}', '${this.sobrenome}', '${this.cpf}', '${this.dataNascimento}', '${this.escolaridade}', '${this.tipoEscola}', '${this.email}', '${this.senha}')`,
        (error, result) => { error ? res.send(error) : res.status(201).send("Usuario cadastrado!");
        }
      );
    }
  }    
    

  //query para selecionar todos usuário do BD (utilizar para validar) da tabela usuario
  validaUsuario(req, res) {
    db.query(
      `SELECT * FROM usuario WHERE email = '${this.email}' AND senha = '${this.senha}'`,
      (error, result) => {
        error ? res.send(error) : res.json(result);
      }
    );
  }
}

module.exports = new Usuario();
