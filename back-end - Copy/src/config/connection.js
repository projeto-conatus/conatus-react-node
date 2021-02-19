//conectando-se ao bd
const mysql = require('mysql')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'conatus2'
})

db.connect((error) => {
    if(error){
        console.log(error)
    } else {
        console.log("MySQL connected...")
    }
})

module.exports = db