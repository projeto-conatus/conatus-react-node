//Query para selecionar

const db = require('../config/connection')

class Vagas {

    constructor() {
        this.idVaga;
        this.cargo;
        this.empresa;
        this.descricao;
        this.contato;
        this.dataCadastro;
    }


    selectAll(req, res){
        db.query(
            "SELECT * FROM vaga",
            (error, result) => {
                error ? res.send(error) : res.json(result);
            }
        );
    }
}

module.exports = new Vagas;