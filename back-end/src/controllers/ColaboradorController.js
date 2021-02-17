//Precisamos de uma action para validar login do Adm

const colaborador = require('../models/Colaborador')

class ColaboradorController{
    
    insertColaboradorAction(req, res) {
        const { nome, senha } = req.body;

            colaborador.nome = nome;
            colaborador.senha = senha;

            colaborador.insertColaborador(req, res);
            
    }

    validaColaboradorAction(req, res){
        const { idColaborador, nome, senha } = req.body;
        
        colaborador.idColaborador = idColaborador
        colaborador.nome = nome
        colaborador.senha = senha

        colaborador.validaColaborador(req, res)
    }

}

module.exports = new ColaboradorController;