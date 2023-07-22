
const mysql2 = require("mysql2")

const db = mysql2.createPool({
    host: "localhost",
    user: "root",
    password: "systemzts@2023",
    database: "chickenfarm"
});



module.exports ={db}

