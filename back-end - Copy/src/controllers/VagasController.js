//Precisamos de uma action para selecionar vagas

const vaga = require('../models/Vagas')

class vagasController {

    selectVagaAction(req, res){
        
        vaga.selectAll(req, res)
    }
}

module.exports = new vagasController;

