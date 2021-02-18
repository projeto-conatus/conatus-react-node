//Neste arquivo ficam todas as nossas rotas
const { Router } = require('express')
const app = require('./app')

const passport = require('passport')
const inicializePassport = require('./passport-config')
inicializePassport(passport)



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

//Mentores
routes.get("/selectMentores", MentoresController.selectMentorAction)


//Usuarios
routes.post("/insertUsuario", checkNotAuthenticated, UsuarioController.insertUsuarioAction)
routes.post("/loginUsuario", checkNotAuthenticated, passport.authenticate('local', {
    successRedirect: '/feed',
    failureRedirect: '/login',
    failureFlash: true
}))

//Vagas
routes.post("/validaVagas", VagasController.selectVagaAction)



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
}

module. exports = routes