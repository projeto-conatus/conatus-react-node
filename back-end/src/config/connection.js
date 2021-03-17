//conectando-se ao bd
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'eds_admin',
    password: '',
    database: 'conatus'
})

db.connect((error) => {
    if(error){
        console.log(error)
    } else {
        console.log("MySQL connected...")
    }
})

module.exports = db