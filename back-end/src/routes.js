//Neste arquivo ficam todas as nossas rotas

const { Router } = require('express')

//controllers
const ArtigosController = require('./controllers/ArtigosController')

const routes = new Router

//Artigos
routes.get("/selectArtigo", ArtigosController.selectArtigoAction) //página do feed
routes.post("/insertArtigo", ArtigosController.insertArtigoAction) //cadastrar novo artigo


//Colaboradores

//Mentores

//Usuarios

//Vagas


module. exports = routes