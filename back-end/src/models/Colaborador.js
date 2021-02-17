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
            `SELECT * FROM colaborador WHERE nome = '${this.nome}'`,
            (error, result) => {
                error ? res.send(error) : res.json(result);
            }
        );
    }
    //query para selecionar colaborador filtrado por um id
    selectPorID(req, res) {
        db.query(
            `SELECT * FROM colaborador WHERE id = '${this.id}'`,
            (error, result) => {
                error ? res.send(error) : res.json(result);
            }
        );
    }
    //query para inserir colaborador 
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