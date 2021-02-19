//Query para inserir dados (cadastro), para selecionar dados (validar login), selecionar tipo escolaridade, selecionar tipo escola

const db = require("../config/connection");
const jwt = require("jsonwebtoken");
const secret = "conatustools";
const { compare } = require("bcrypt");

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
    const erros = [];

    if (
      !this.nome ||
      !this.sobrenome ||
      !this.cpf ||
      !this.email ||
      !this.senha
    ) {
      erros.push({ mensagem: "Por favor preencha todos os campos" });
    }
    if (this.nome.length < 3) {
      erros.push({
        mensagem: "Nome de usuário deve ter, pelo menos, 3 dígitos",
      });
    }
    if (this.senha.length < 6) {
      erros.push({ mensagem: "Senha deve ter, pelo menos, 6 dígitos" });
    }
    if (this.cpf.length < 11) {
      erros.push({
        mensagem: "O CPF deve ter 11 dígitos. Digite um cpf válido.",
      });
    }

    if (erros.length > 0) {
      res.status(400).json(erros);
    } else {
      db.query(
        `SELECT * FROM usuario WHERE email = '${this.email}' OR cpf = '${this.cpf}'`,
        (error, result) => {
          if (error) {
            res.send({ error: error });
          }
          if (result.length > 0) {
            erros.push({ mensagem: "CPF e/ou email já cadastrado" });
            res.send(erros);
          } else {
            db.query(
              `INSERT INTO usuario (nome, sobrenome, cpf, dataNascimento, escolaridade, tipoEscola, email, senha) VALUES  ('${this.nome}', '${this.sobrenome}', '${this.cpf}', '${this.dataNascimento}', '${this.escolaridade}', '${this.tipoEscola}', '${this.email}', '${this.senha}')`,
              (error, result) => {
                error
                  ? res.send(error)
                  : res.status(201).send("Usuario cadastrado!");
              }
            );
          }
        }
      );
    }
  }
  //query para selecionar todos usuário do BD (utilizar para validar) da tabela usuario
  async validaUsuario(req, res) {
    const { senha: password, email } = req.body;

    if (!email || !password) {
      return res
        .status(400)
        .json({ menssage: "Não foi enviado senha e/ou email" });
    }

    db.query(
      `SELECT email, senha, idUsuario FROM usuario WHERE email = '${this.email}'`,
      (error, result) => {
        if (error) {
          return res.json({ error: error });
        } else if (!result[0].email) {
          console.log(result);
          return res.json({ message: "Email não foi encontrado" });
        } else {
          const { senha, idUsuario } = result[0];
          const senhaConfere = compare(password, senha, (error, result) => {
            if (error) {
            
              return res
                .status(400)
                .json({ message: "", error });
            }
            console.log(result);
            if (!result) {
              return res.status(400).json({ message: "Senhas não conferem" });
            } else {
              const token = jwt.sign({}, secret, {
                subject: idUsuario.toString(),
                expiresIn: "1d",
              }); // assinatura do token no servidor
              return res.json({ auth: true, token });
            }
          });
        }
      }
    );
  }
}

module.exports = new Usuario();
