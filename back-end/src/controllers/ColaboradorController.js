//Precisamos de uma action para validar login do Adm
//importando modelos de query 
const colaborador = require('../models/Colaborador')

class ColaboradorController{

    //Ação de selecionar colaborador pelo nome 
    selectColaboradorAction(req, res) {

        colaborador.selectPorNome(req, res)
      }
    
    //Ação de inserir colaborador
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

        //validando existência de caracteres mínimos para cadastro no banco 
        if(existemErros){
            res.status(400).json(erros)
        } else {

            colaborador.nome = nome;
            colaborador.senha = senha;

            colaborador.insertColaborador(req, res);
    
        }
    }

    //Ação de selecionar colaboradores por ID 
    selectColaboradorIdAction(req, res) {
        const { id } = req.params;
    
        colaborador.id = id 
    
        colaborador.selectPorId(req, res)
      }

    //Ação de atualizar colaboradores 
    updateColaboradorAction(req, res) {
        const { id } = req.params;
        const { nomeValido, senhaValida } = req.body;
    
        colaborador.id = id
        colaborador.nomeValido = nomeValido
        colaborador.senhaValida = senhaValida
    
        colaborador.updateColaborador(req, res)
      }

}

module.exports = new ColaboradorController;