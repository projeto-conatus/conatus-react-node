//Precisamos de uma action para validar login do Adm
//importando modelos de query 
const colaborador = require('../models/Colaborador')
const crypto = require('crypto');
class ColaboradorController{

    //Ação de selecionar colaborador pelo nome 
    selectColaboradorAction(req, res) {

      colaborador.selectPorNome(req, res)
    }
    
    //Ação de inserir colaborador
    insertColaboradorAction(req, res) {
      const { nome, senha } = req.body;

      const senhaCriptografada = crypto.createHash("md5").update(senha).digest("hex");

      
      colaborador.nome = nome;
      colaborador.senha = senhaCriptografada;

      colaborador.insertColaborador(req, res);
          
    }

    validaColaboradorAction(req, res){
      const { idColaborador, nome, senha } = req.body;
      
      const senhaCriptografada = crypto.createHash("md5").update(senha).digest("hex");

      colaborador.idColaborador = idColaborador;
      colaborador.nome = nome;
      colaborador.senha = senhaCriptografada;

      colaborador.validaColaborador(req, res)
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