//Precisamos de uma action para validar login do Adm

const colaborador = require('../models/Colaborador')

class ColaboradorController{
    
    insertColaboradorAction(req, res) {
        const { nome, senha } = req.body;

        const nomeValido = nome.length >=6 
        const senhaValida = senha.length >=6

        const validacoes = [
            {
                nome:'nome',
                valido: nomeValido,
                mensagem: 'Nome de usuário deve ter no mínimo 6 caracteres'
            },
            {
                nome: 'senha',
                valido: senhaValida,
                mensagem: 'Senha deve ter no mínimo 6 caracteres'
            }
        ]

        const erros = validacoes.filter(campo => !campo.valido)
        const existemErros = erros.length

        if(existemErros){
            res.status(400).json(erros)
        } else {

            colaborador.nome = nome;
            colaborador.senha = senha;

            colaborador.insertColaborador(req, res);
    
        }
    }

}

module.exports = new ColaboradorController;