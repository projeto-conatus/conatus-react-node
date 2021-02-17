//Neste arquivo ficam todas as nossas rotas

const { Router } = require('express')

//controllers
const ArtigosController = require('./controllers/ArtigosController')
const ColaboradorController = require('./controllers/ColaboradorController')
const MentoresController = require('./controllers/MentoresController')
const VagasController = require('./controllers/VagasController')
const UsuarioController = require('./controllers/UsuariosController')


const routes = new Router

//Artigos
routes.get("/selectArtigo", ArtigosController.selectArtigoAction) //retorna todos os dados do artigo e autor
routes.post("/insertArtigo", ArtigosController.insertArtigoAction) //cadastrar novo artigo
routes.get("/selectArtigoId/:id", ArtigosController.selectArtigoIdAction) //retornar no form os dados correspondentes a esse id
routes.put("/updateArtigo/:id", ArtigosController.updateArtigoAction)
routes.delete("/deleteArtigo/:id", ArtigosController.deleteArtigoAction)

//Colaboradores
routes.post("/insertColaborador", ColaboradorController.insertColaboradorAction)
routes.post("/validaColaborador", ColaboradorController.validaColaboradorAction)

//Mentores
routes.get("/selectMentores", MentoresController.selectMentorAction)


//Usuarios
routes.post("/validaUsuario", UsuarioController.validaUsuarioAction)
routes.post("/insertUsuario", UsuarioController.insertUsuarioAction)

//Vagas
routes.post("/validaVagas", VagasController.selectVagaAction)




module. exports = routes