//Precisamos ter uma action para validar login e para cadastrar.
const usuario = require('../models/Usuario');
//const crypto = require('crypto');
const bcrypt = require('bcrypt')

class UsuarioController {
 
  //ação de inserir o usuário no sistema
  async insertUsuarioAction(req, res) {
    const { nome, sobrenome, cpf, dataNascimento, escolaridade, tipoEscola, email, senha } = req.body;

    //const criptografia = crypto.createHash("md5").update(senha).digest("hex");
    let hashedSenha = await bcrypt.hash(senha, 10);

    usuario.nome = nome
    usuario.sobrenome = sobrenome
    usuario.cpf = cpf
    usuario.dataNascimento = dataNascimento
    usuario.escolaridade = escolaridade
    usuario.tipoEscola = tipoEscola
    usuario.email = email
    usuario.senha = hashedSenha

    usuario.insertUsuario(req, res)
    
  }

}

module.exports = new UsuarioController();
