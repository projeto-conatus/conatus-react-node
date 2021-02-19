const LocalStrategy = require('passport-local').Strategy
const db = require('./config/connection')
const bcrypt = require('bcrypt')


function initialize(passport) {
    console.log("inicializando");

    authenticateUser = (email, senha, done) => {

        console.log(email, senha)

        db.query(
            `SELECT * FROM usuario WHERE email = '${email}'`,
            (error, result) => {
                if(error) {
                    throw error;
                }
                console.log(result)
                if(result != null){
                    const usuario = result[0];

                    bcrypt.compare(senha, usuario.senha, (error, isMatch) => {
                        if(error) {
                            throw error;
                        }
                        if (isMatch) {
                            return done(null, usuario)
                        } else {
                            return done(null, false, {mensagem: "Senha incorreta"});
                        }
                    })
                } else {
                    return done(null, false, {mensagem: "E-mail não cadastrado"})
                }
            }
        )

       
    }

    passport.use(
        new LocalStrategy(
            {
            usernameField: 'email',
            passwordField: 'senha'
            }, 
            authenticateUser
        )
    )

    passport.serializeUser((usuario, done) => {
        done(null, usuario.idUsuario);
    })

    passport.deserializeUser((idUsuario, done) => {
        db.query(
            `SELECT * FROM usuario WHERE idUsuario = '${idUsuario}'`,
            (error, result) => {
                if(error){
                    return done(error)
                }
                const usuario = result[0]
                console.log(`Id do usuário é igual a ${usuario.idUsuario}`)
                return done(null, usuario);
            }
        )

    }) 
}

module.exports = initialize