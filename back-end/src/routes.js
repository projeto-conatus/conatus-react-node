//Neste arquivo ficam todas as nossas rotas

const { Router } = require('express')

//controllers
const ArtigosController = require('./controllers/ArtigosController')
const MentoresController = require('./controllers/MentoresController')

const routes = new Router

//Artigos
routes.get("/selectArtigo", ArtigosController.selectArtigoAction) //retorna todos os dados do artigo e autor
routes.post("/insertArtigo", ArtigosController.insertArtigoAction) //cadastrar novo artigo
routes.get("/selectArtigoId/:id", ArtigosController.selectArtigoIdAction) //retornar no form os dados correspondentes a esse id
routes.put("/updateArtigo/:id", ArtigosController.updateArtigoAction)
routes.delete("/deleteArtigo/:id", ArtigosController.deleteArtigoAction)



//Colaboradores

//Mentores
routes.get("/selectMentores", MentoresController.selectMentorAction)


//Usuarios

//Vagas


module. exports = routes