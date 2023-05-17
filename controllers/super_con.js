const { db } = require("../db");



const work = (req, res)=>{
    const {id} = req.params;
    const searchTerm = '%' + id + '%';
    const sqlget = 'select work.work from loginform right join work  on loginform.id = work.id and loginform.username = work.username where work.id like ?'; 
    db.query(sqlget, searchTerm, (error, result)=>{
        if(error){
            console.log(error)
        }
        else
        return res.send(result)
    })
}

module.exports={work}