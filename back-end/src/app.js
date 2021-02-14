// criando servidor express
//nesse arquivo fica as configurações do aplicativo

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

//rotas
const routes = require('./routes')

class App {
    constructor() {
        this.server = express()
        this.middlewares()
        this.routes()
    }

    middlewares() {
        //usando express.json para pegar informações via req&post vinda do front
        this.server.use(express.json())
        //usando cors para compartilhar recursos entre dominios(back&front)
        this.server.use(cors())
        //usando bodyParser para analisar dados JSON enviados via httpPost
        this.server.use(bodyParser.urlencoded({extended: true}))
    }
    
    routes() {
        //implementando rotas dentro da classe app, como se usássemos "this.server.get("/",()=>{res.send("óla mundo")})"
        this.server.use(routes)
    }
}
const app = new App

module.exports = app.server
