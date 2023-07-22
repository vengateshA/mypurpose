const { db } = require("../db");


const machine_pdf = (req,res)=>{


    const sqlget = '  select date(dateandtime) as date, time(dateandtime) as time,  machine_info.* from machine_info; '
    db.query(sqlget, (error, result)=>{
        if(error){
            console.log(error)
        }
        else{
            return res.send(result)
        }
    })
}


const machine_get_before = (req,res)=>{
    const sqlget = "  select DATE_FORMAT(dateandtime, '%Y-%m-%d') AS date, time(dateandtime) as time,  machine_before.* from machine_before; "
    db.query(sqlget, (error, result)=>{
        if(error){           
            console.log(error   )
        }
        else{
            return res.send(result)
        }
    })
}

const pdf_singlvalue = (req, res)=>{
    const{id} = req.params
    const sqlget = 'select loginform.spl_id as spl_id, loginform.companyname as company_name from loginform join machine_before on loginform.id = machine_before.id join machine_info on loginform.id = machine_info.id where loginform.id = ?;'
     db.query(sqlget, id, (error, result)=>{
        if(error){
            console.log(error)
        }
        else{
            res.json(result)
        }
     } )
}


const pdf_empty_weight = (req, res) => {
    const { id } = req.params;
    const sqlget = 'SELECT SUM(empty_cage) AS total_empty FROM machine_info WHERE id = ?';
    db.query(sqlget, [id], (error, result) => {
      if (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal server error' });
      } else {
        res.send(result);   
      }
    });
  };


  
  const total_empty_weight = (req,res)=>{
    const sqlget ='SELECT MAX(machine_info.device_id) AS device_id, SUM(empty_cage) AS total_empty_cage FROM machine_before JOIN machine_info ON machine_before.mac_id = machine_info.mac_id GROUP BY machine_before.mac_id' ;
    db.query(sqlget,  (error, result)=>{
        if(error){
            console.log(error)
        }
        else{
            return res.send(result)
        }
    })
}



module.exports ={ machine_pdf, pdf_singlvalue, pdf_empty_weight, machine_get_before   }