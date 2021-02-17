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
            `SELECT * FROM colaborador WHERE nome = '${this.nome}'`,
            (error, result) => {
                error ? res.send(error) : res.json(result);
            }
        );
    }

    selectPorID(req, res) {
        db.query(
            `SELECT * FROM colaborador WHERE id = '${this.id}'`,
            (error, result) => {
                error ? res.send(error) : res.json(result);
            }
        );
    }

    insertColaborador(req, res) {
        const erros= [];

        if(!this.nome || !this.senha) {
            erros.push({ mensagem : "Por favor preencha todos os campos"})

        }

        if (this.nome.length < 6) {
            erros.push({ mensagem: "Nome de usuário deve ter, pelo menos, 6 dígitos" })
        }

        if (this.senha.length <6) {
            erros.push({ mensagem: "Senha deve ter, pelo menos, 6 dígitos" })
        }

        if(erros.length > 0){
            res.status(400).json(erros)
        } else {
            db.query(
                `INSERT INTO colaborador (nome, senha) VALUES ('${this.nome}', '${this.senha}')`,
                (error, result) => {
                    error ? res.send(error) : res.json('Novo colaborador cadastrado com sucesso!');
                }
            );
        }
    }

    validaColaborador(req, res) {
        db.query(
            `SELECT * FROM colaborador WHERE nome = ('${this.nome}') AND senha = ('${this.senha}')`,
          (error, result) => {
            if(error){
                res.send({error: error})
            }
            if(result.length > 0){
                    res.send(result)
                } else {
                    res.send({message: "Nome e/ou senha incorretos!"})
                }
          }
        )
    }

}

module.exports = new Colaboradores;