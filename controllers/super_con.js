const { db } = require("../db");


 
const work = (req, res)=>{
    const {id} = req.params;
    const searchTerm =  id ;
    const sqlget = 'SELECT DATE(work.dateandtime) AS date, TIME(work.dateandtime) AS time, loginform.*, work.* FROM loginform RIGHT JOIN work ON loginform.username = work.username AND loginform.addedby = work.addedby WHERE  loginform.id = ? AND DATE(work.dateandtime) = CURDATE();'; 
    db.query(sqlget, searchTerm, (error, result)=>{
        
        if(error){
            console.log(error)
        }
        else
        return res.send(result)
    })
}


 
const work_data = (req, res)=>{
    const {id} = req.params;
    const searchTerm =  id ;
    const sqlget = 'select * from loginform right join work on loginform.username = work.username and loginform.addedby = work.addedby where loginform.id like ?'; 
    db.query(sqlget, searchTerm, (err, result)=>{
        if (err) return res.json({ Error: "get trader error in sql" })
        return res.json({ Status: "success", Result: result })
    })
}


const machine = (req, res) => {
    const { machine_username, empty_cage, loaded_cage, status, username  } = req.body;
    const sqlPost = "INSERT INTO machine ( machine_username, empty_cage, loaded_cage, status, username ) VALUES (?,?,?,?,?)";
    db.query(sqlPost, [machine_username, empty_cage, loaded_cage, status, username], (err, result) => {
        if (err) return res.json({ Error: "get trader error in sql" })
        return res.json({ Status: "success", Result: result })
        // if(error){
        //     res.status(500).send({
        //         status: "fail",
        //         message: "something went wrong"
        //     })
        // }
        //     else{
        //           res.send(result)
        //         // res.status(200).send({
        //         //     status: "success",
        //         //     message: "succesfull"
        //         // })
        //     }    
    })
}

const machine_get = (req, res)=>{

    const sqlget = 'select * from machine_get'; 
    db.query(sqlget, (error, result)=>{
        if(error){
            console.log(error)
        }
        else
        return res.send(result)
    })
}

const super_farmer_details = (req, res)=>{

    const sqlget = 'select * from farmers'; 
    db.query(sqlget, (error, result)=>{
        if(error){
            console.log(error)
        }
        else
        return res.send(result)
    })
}







module.exports={work, machine, machine_get, work_data, super_farmer_details  }