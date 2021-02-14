//conectando-se ao bd
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123',
    database: 'conatus'
})

module.exports = db