//Neste arquivo ficam as configurações do servidor

const app = require('./app')

//startando e ouvindo a porta 
//OBS: se houver mudança, lembrar de mudar tb lá no front
const porta = 3011
app.listen(porta, () => {
    console.log(`Rodando na porta ${porta} - link: http://localhost:${porta}`)
})