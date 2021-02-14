//Neste arquivo ficam todas as nossas rotas

const { Router } = require('express')

//controllers
const ArtigosController = require('./controllers/ArtigosController')

const routes = new Router

//Artigos
routes.get("/selectArtigo", ArtigosController.selectArtigoAction) 
routes.post("/insertArtigo", ArtigosController.insertArtigoAction) 
routes.get("/selectPorIdArtigo/:id", ArtigosController.selectPorIdAction)

//Colaboradores

//Mentores

//Usuarios

//Vagas


module. exports = routes