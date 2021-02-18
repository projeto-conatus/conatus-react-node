//Precisamos de uma action para validar login do Adm
//importando modelos de query 
const colaborador = require('../models/Colaborador')
//const crypto = require('crypto');
const bcrypt = require('bcrypt');

class ColaboradorController{

  //Ação de inserir colaborador
  async insertColaboradorAction(req, res) {
    const { nome, senha } = req.body;

    //const senhaCriptografada = crypto.createHash("md5").update(senha).digest("hex");

    let hashedSenha = await bcrypt.hash(senha, 10);
    
    colaborador.nome = nome;
    colaborador.senha = hashedSenha;

    
    colaborador.insertColaborador(req, res);
        
  }

}

module.exports = new ColaboradorController;