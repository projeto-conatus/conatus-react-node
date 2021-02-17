//Precisamos ter uma action para validar login e para cadastrar.
const usuario = require('../models/Usuario');
const crypto = require('crypto');

class UsuarioController {
 
  //Ação de selecionar todos os usuarios do banco
  validaUsuarioAction(req, res) {
    const { email, senha } = req.body;

    const criptografia = crypto.createHash("md5").update(senha).digest("hex");

    usuario.email = email
    usuario.senha = criptografia;


    usuario.validaUsuario(req, res)
  }


  //ação de inserir o usuário no sistema
  insertUsuarioAction(req, res) {
    const { nome, sobrenome, cpf, dataNascimento, tipoEscola, email, senha } = req.body;

    const criptografia = crypto.createHash("md5").update(senha).digest("hex");

    usuario.nome = nome
    usuario.sobrenome = sobrenome
    usuario.cpf = cpf
    usuario.dataNascimento = dataNascimento
    usuario.tipoEscola = tipoEscola
    usuario.email = email
    usuario.senha = criptografia

    usuario.insertUsuario(req, res)
    
  }

}

module.exports = new UsuarioController();
