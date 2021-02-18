// criando servidor express
//nesse arquivo fica as configurações do aplicativo

const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const passport = require('passport')
const flash = require('express-flash')
const session = require('express-session')


const inicializePassport = require('./passport-config')
inicializePassport(passport)


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

        this.server.use(flash())
        this.server.use(session ({
            secret: 'sup3rs3cr3t',
            resave: false,
            saveUninitialized: false,
            cookie: { maxAge: 60*60*1000 }            
        }))
        this.server.use(passport.initialize())
        this.server.use(passport.session())

    }
    
    routes() {
        //implementando rotas dentro da classe app, como se usássemos "this.server.get("/",()=>{res.send("óla mundo")})"
        this.server.use(routes)
    }
}
const app = new App

module.exports = app.server
