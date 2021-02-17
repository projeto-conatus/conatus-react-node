//Query para selecionar dados (validar login)

const db = require('../config/connection');

class Colaboradores {
    //contrução variáveis restritas
    constructor() {
        this.idColaborador;
        this.nome;
        this.senha;
    }
    //query para selecionar todos os colaboradores do banco
    selectPorNome(req, res) {
        db.query(
            `SELECT * FROM colaborador WHERE nome = ${this.nome}`,
            (error, result) => {
                error ? res.send(error) : res.json(result);
            }
        );
    }
    //query para selecionar colaborador filtrado por um id
    selectPorID(req, res) {
        db.query(
            `SELECT * FROM colaborador WHERE id = ${this.id}`,
            (error, result) => {
                error ? res.send(error) : res.json(result);
            }
        );
    }
    //query para inserir colaborador 
    insertColaborador(req, res) {
        db.query(
            `INSERT INTO colaborador (nome, senha) VALUES ('${this.nome}', '${this.senha}')`,
            (error, result) => {
                error ? res.send(error) : res.json('Novo colaborador cadastrado com sucesso!');
            }
        );
    }

    //query para atualizar colaborador
    updateColaborador(req, res) {
        db.query(
          `UPDATE colaborador SET nome = '${this.nome}', senha = '${this.senha}'`, 
          (error, result) => {
            error ? res.send(error) : res.status(200).send("Cadastro atualizado!");
          }
        );
    }

}

module.exports = new Colaboradores;