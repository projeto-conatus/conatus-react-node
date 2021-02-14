const { Router } = require('express')

//controllers
const ArtigosController = require('./controllers/ArtigosController')

const routes = new Router

routes.get("/selectArtigo", ArtigosController.selectArtigoAction) 
routes.post("/insertArtigo", ArtigosController.insertArtigoAction) 


module. exports = routes