//Precisamos ter uma action para validar login e para cadastrar.
const usuario = require('../models/Usuario');
//const crypto = require('crypto');
const bcrypt = require('bcrypt');

class UsuarioController {
 
  //Ação de selecionar todos os usuarios do banco
  async validaUsuarioAction(req, res) {
    const { email, senha } = req.body;

    //const criptografia = crypto.createHash("md5").update(senha).digest("hex");
    //let criptografia = await bcrypt.hash(senha, 10);
  

    usuario.email = email;
    //req.body.senha = criptografia;


    usuario.validaUsuario(req, res) //executa a query de consulta de usuario no bd
  }


  //Ação de inserir o usuário no sistema
  async insertUsuarioAction(req, res) {
   const { nome, sobrenome, cpf, dataNascimento, tipoEscola, email, senha } = req.body;

    //crypto.createHash("md5").update(senha).digest("hex");
    let criptografia = await bcrypt.hash(senha, 10);

    usuario.nome = nome
    usuario.sobrenome = sobrenome
    usuario.cpf = cpf
    usuario.dataNascimento = dataNascimento
    usuario.tipoEscola = tipoEscola
    usuario.email = email
    usuario.senha = criptografia

    usuario.insertUsuario(req, res)// executa a query no banco de dados
    
  }

}

module.exports = new UsuarioController();
