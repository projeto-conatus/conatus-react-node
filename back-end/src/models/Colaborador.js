//Query para selecionar dados (validar login)

const db = require('../config/connection');

class Colaboradores {

    constructor() {
        this.idColaborador;
        this.nome;
        this.senha;
    }

    selectPorNome(req, res) {
        db.query(
            `SELECT * FROM colaborador WHERE nome = ${this.nome}`,
            (error, result) => {
                error ? res.send(error) : res.json(result);
            }
        );
    }

    selectPorID(req, res) {
        db.query(
            `SELECT * FROM colaborador WHERE id = ${this.id}`,
            (error, result) => {
                error ? res.send(error) : res.json(result);
            }
        );
    }

    insertColaborador(req, res) {
        db.query(
            `INSERT INTO colaborador (nome, senha) VALUES ('${this.nome}', '${this.senha}')`,
            (error, result) => {
                error ? res.send(error) : res.json('Novo colaborador cadastrado com sucesso!');
            }
        );
    }

}

module.exports = new Colaboradores;