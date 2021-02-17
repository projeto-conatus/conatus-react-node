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

    const nomeValido = nome.length >=3 
    const senhaValida = senha.length >=6
    const cpfValido = cpf.length >=11

    

    const validacoesUsuario = [
        {
            nome:'nome',
            valido: nomeValido,
            mensagem: 'Nome de usuário deve ter no mínimo 3 caracteres'
        },
        {
            nome: 'senha',
            valido: senhaValida,
            mensagem: 'Senha deve ter no mínimo 6 caracteres'
        },
        {
            nome: 'cpf',
            valido: cpfValido,
           mensagem: 'Cpf deve ter no mínimo 11 caracteres'
      }
    ]

    const erros = validacoesUsuario.filter(campo => !campo.valido)
    const existemErros = erros.length

    if(existemErros){
        res.status(400).json(erros)
    } else {

    const criptografia = crypto.createHash("md5").update(senha).digest("hex");

    usuario.nome = nome
    usuario.sobrenome = sobrenome
    usuario.cpf = cpf
    usuario.dataNascimento = dataNascimento
    usuario.tipoEscola = tipoEscola
    usuario.email = email
    usuario.senha = criptografia;

    usuario.insertUsuario(req, res)
    }
  }

}

module.exports = new UsuarioController();
