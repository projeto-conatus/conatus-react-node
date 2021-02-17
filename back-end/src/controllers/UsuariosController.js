//Precisamos ter uma action para validar login e para cadastrar.
const usuario = require('../models/Usuario')

class UsuarioController {
 
  //Ação de selecionar todos os usuarios do banco
  selectUsuarioAction(req, res) {
      const { email, senha} = req.body;
      usuario.email = email
      usuario.senha = senha

    usuario.selectUsuario(req, res)
  }


  //ação de inserir o usuário no sistema
  insertUsuarioAction(req, res) {
    const { nome, sobrenome, cpf, dataNascimento, tipoEscola, email, senha } = req.body;

    const nomeValido = nome.length >=6 
    const senhaValida = senha.length >=6
    const cpfValido = cpf.length >=11

    const validacoesUsuario = [
        {
            nome:'nome',
            valido: nomeValido,
            mensagem: 'Nome de usuário deve ter no mínimo 6 caracteres'
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

    usuario.nome = nome
    usuario.sobrenome = sobrenome
    usuario.cpf = cpf
    usuario.dataNascimento = dataNascimento
    usuario.tipoEscola = tipoEscola
    usuario.email = email
    usuario.senha = senha

    usuario.insertUsuario(req, res)
    }
  }

}

module.exports = new UsuarioController();
