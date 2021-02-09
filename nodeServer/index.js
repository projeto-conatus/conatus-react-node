// criando servidor express

const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
const mysql = require('mysql')

//conexao db
const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'conatus'
})
//usando cors para compartilhar recursos entre dominios(back&front)
app.use(cors())
//usando express.json para pegar informações via req&post vinda do front
app.use(express.json())
//usando bodyParser para analisar dados JSON enviados via httpPost
app.use(bodyParser.urlencoded({extended: true}))

//rotas

//exibir usuarios
app.get("/apiNode/select", (req, res) => {

    const sqlSelect = "SELECT * FROM autores";
    db.query(sqlSelect,  (err, result) => {
        res.send(result)
    })
})

//inserir usuarios
app.post("/apiNode/insert", (req, res) => {

    const idAutor = req.body.idAutor
    const nome = req.body.nome

    const sqlInsert = "INSERT INTO autores (idAutor, nome) VALUES (?,?)"
    db.query(sqlInsert, [idAutor, nome], (err, result) => {
        console.log(result)
    })
})


//startando e ouvindo a porta OBS: sehouver mudança, lembrar de mudar tb lá no front
const porta = 3010
app.listen(porta, () => {
    console.log(`Rodando na porta ${porta} - link: http://localhost:${porta}`)
})