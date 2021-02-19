//Neste arquivo ficam todas as nossas rotas
const { Router } = require('express')
const app = require('./app')

//trecho de código de validação via passport
/*const passport = require('passport')
const inicializePassport = require('./passport-config')
inicializePassport(passport)*/




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

//Mentores
routes.get("/selectMentores", MentoresController.selectMentorAction)

//Colaboradores
routes.post("/insertColaborador", ColaboradorController.insertColaboradorAction)

//Usuarios
routes.post("/insertUsuario", UsuarioController.insertUsuarioAction)

//Toda a rota colocada daqui pra baixo necessita de autenticação
routes.use(estaAutenticado)
routes.get("/autenticacao", (req, res)=>{
    return res.json({message: "conseguimos!"})
} )

//Vagas
routes.post("/validaVagas", VagasController.selectVagaAction)

//Usuarios
routes.post("/validaUsuario", UsuarioController.validaUsuarioAction)


/* funções de autenticação do para utilização do metodo passport
function checkAuthenticated(req, res, next) { //essa ele chama na rota da página pós login, por exemplo
    if(req.isAuthenticated()) {
        return next() 
    }
    
    res.redirect('/login')
} 

function checkNotAuthenticated(req, res, next) { //essa chama nas rotas que não precisa estar autenticado
    if(req.isAuthenticated()){
        return res.redirect('/feed') 
    }
    next()
}*/

module.exports = routes