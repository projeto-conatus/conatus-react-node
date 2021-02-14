//Query para selecionar mentores

const db = require("../config/connection");
class Mentores {

    constructor() {
        this.idMentor;
        this.nome;
        this.cargoAtual;
        this.formacao;
        this.descricao;
        this.linkedin;
        this.email;
        this.foto;
    }

    selectAll(req, res) {
        db.query(
          "SELECT * FROM mentor", 
          (error, result) => {
            error ? res.send(error) : res.json(result);
          }
        );
    }

}

module.exports = new Mentores;