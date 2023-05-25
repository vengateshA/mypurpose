const { db } = require("../db");


const farmer_info = (req, res) => {
    const sqlGet = "SELECT * FROM farmers";
    db.query(sqlGet, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            // res.json({result}) 
            return res.send(result);
        } 
    }) 
}  
 

module.exports = {farmer_info}