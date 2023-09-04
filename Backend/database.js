
const mysql = require("mysql")
const dotenv = require("dotenv")
dotenv.config()

// ===========DataBase Information========
const database =  mysql.createConnection({
    host:process.env.DB_HOST,
    database:process.env.DB_NAME,
    user:process.env.DB_USER,
    password:process.env.DB_PASSWORD,
})

// ============Connect DataBase==========
database.connect((error)=>{
    if(error) 
        return console.log(err)
    else
        console.log("DataBase Connected ...")
})

module.exports = database;