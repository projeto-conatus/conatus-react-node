//Neste arquivo ficam todas as nossas rotas

const { Router } = require('express')


//controllers
const ArtigosController = require('./controllers/ArtigosController')
const ColaboradorController = require('./controllers/ColaboradorController')
const MentoresController = require('./controllers/MentoresController')
const VagasController = require('./controllers/VagasController')
const UsuarioController = require('./controllers/UsuariosController')
const estaAutenticado = require('./middleware/estaAutentica')


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

//Usuarios
routes.post("/insertUsuario", UsuarioController.insertUsuarioAction)

//toda a rota colocada a partir daqui necessita de autenticação
routes.use(estaAutenticado)
routes.get("/autenticacao", (req, res)=>{
    return res.json({message: "conseguimos!"})
} )

//Vagas
routes.post("/validaVagas", VagasController.selectVagaAction)

//Usuarios
routes.post("/validaUsuario", UsuarioController.validaUsuarioAction)

//Mentores
routes.get("/selectMentores", MentoresController.selectMentorAction)



module.exports = routes