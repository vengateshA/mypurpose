const { db } = require("../db");



const work = (req, res)=>{
    const {id} = req.params;
    const searchTerm = '%' + id + '%';
    const sqlget = 'select * from loginform right join work on loginform.username = work.username and loginform.addedby = work.addedby where loginform.id like ?'; 
    db.query(sqlget, searchTerm, (error, result)=>{
        if(error){
            console.log(error)
        }
        else
        return res.send(result)
    })
}

module.exports={work} 