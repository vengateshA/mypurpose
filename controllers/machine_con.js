const { db } = require("../db")

const machine_get_info = (req,res)=>{
    const sqlget = 'select * from machine_before'
    db.query(sqlget, (error, result)=>{
        if(error){
            console.log(err)
        }
        else{
            return res.send(result)
        }
    })
}

const machine_add_before = (req,res) =>{
    const{mac_id, driver_name, truck_number, farm_supervisior, trader_name, trader_number, username, id, spl_id, farm_name} = req.body
    const addsql = "insert into machine_before (mac_id, driver_name, truck_number, farm_supervisior, trader_name, trader_number, username, id, spl_id, farm_name) values (?,?,?,?,?,?,?,?,?,?) "
    db.query(addsql,[mac_id, driver_name, truck_number, farm_supervisior, trader_name, trader_number, username, id, spl_id, farm_name ], (error, result)=>{
            if(error){
            res.status(500).send({
                status: "fail", 
                message: "something went wrong"
            })
        }
            else{

                res.status(200).send({
                    status: "success",
                    message: "succesfull",
                })
            }  
    })
}   


const farm_name_drop = (req, res) =>{

    const farmsql ='select * from farmers'
    db.query(farmsql, (error, result)=>{
        if(error){
            console.log(error)
        }
        else{
            return res.send(result)
        }
    })
    
}


const machine_add_empty = (req,res) =>{
    const{ device_id, status, location, empty_cage, num_cages, id, mac_id} = req.body
    const addsql = "insert into machine_info ( device_id, status, location, empty_cage, num_cages, id, mac_id) values (?,?,?,?,?,?,?) "
    db.query(addsql,[ device_id, status, location, empty_cage, num_cages, id, mac_id ], (error, result)=>{
        if(error){
            res.status(500).send({
                status: "fail", 
                message: "something went wrong"
            })
        }
            else{

                res.status(200).send({
                    status: "success",
                    message: "succesfull",
                
                })
            }  
    })
}   


const machine_add_loaded = (req,res) =>{
    const{ device_id, status, location, loaded_cage, num_chicken, num_cages, id, mac_id} = req.body
        const addsql = "insert into machine_info ( device_id, status, location, loaded_cage, num_chicken, num_cages, id, mac_id) values (?,?,?,?,?,?,?,?) "
    db.query(addsql,[ device_id, status, location, loaded_cage, num_chicken, num_cages, id, mac_id], (error, result)=>{
        if(error){
            res.status(500).send({
                status: "fail", 
                message: "something went wrong"
            })
        }
            else{

                res.status(200).send({
                    status: "success",
                    message: "succesfull",
                
                })
            }  
    })
}   


// const machine_pdf = (req,res)=>{
//     const sqlget = '  select * from loginform left join machine_before on loginform.id = machine_before.id join machine_info on loginform.id = machine_info.id; '
//     db.query(sqlget, (error, result)=>{
//         if(error){
//             console.log(err)
//         }
//         else{
//             return res.send(result)
//         }
//     })
// }

    // const time = (req,res)=>{
    //     const {id} = req.params
    //     const sqlget ='SELECT sum(loaded_cage) FROM machine_before JOIN machine_info ON machine_before.mac_id = machine_info.mac_id  where  machine_before.id = ? order by machine_before.mac_id desc limit 1' ;
    //     db.query(sqlget, id, (error, result)=>{
    //         if(error){
    //             console.log(error)
    //         }
    //         else{
    //             return res.send(result)
    //         }
    //     })
    // }

    const total_loaded_weight = (req,res)=>{
        const sqlget ='SELECT machine_before.mac_id, SUM(loaded_cage) AS total_loaded_cage FROM machine_before JOIN machine_info ON machine_before.mac_id = machine_info.mac_id GROUP BY machine_before.mac_id  ;' ;
        db.query(sqlget,  (error, result)=>{
            if(error){
                console.log(error)
            }
            else{
                return res.send(result)
            }
        })
    }

    const total_empty_weight = (req,res)=>{
        const sqlget ="SELECT timediff( max(time(machine_info.dateandtime)) , min(time(machine_info.dateandtime))) as time_diff , DATE_FORMAT(machine_before.dateandtime, '%Y-%m-%d') AS date, DATE_FORMAT(machine_before.dateandtime, '%h:%i %p') AS time, MAX(machine_info.mac_info_id) AS mac_info_id, machine_before.*, MAX(machine_info.device_id) AS device_id, SUM(empty_cage) AS total_empty_cage, SUM(loaded_cage) AS total_loaded_cage, SUM(CASE WHEN loaded_cage IS NOT NULL THEN num_cages ELSE 0 END) AS total_num_empty, SUM(CASE WHEN empty_cage IS NOT NULL THEN num_cages ELSE 0 END) AS total_num_loaded, SUM(num_chicken) AS num_chicken FROM machine_before JOIN machine_info ON machine_before.mac_id = machine_info.mac_id GROUP BY machine_before.mac_id;"
        db.query(sqlget,  (error, result)=>{
            if(error){
                console.log(error)
            }
            else{
                return res.send(result)
            }
        })
    }


    const machine_detail = (req, res) => {
        const {id} = req.params
        const sqlGet = "SELECT * FROM loginform JOIN machine_before ON loginform.id = machine_before.id WHERE loginform.id = ?  ORDER BY machine_before.mac_id DESC LIMIT 1;";
        db.query(sqlGet, id, (error, result) => {
     
            if (error) {
                console.log(error);  
            } else {
                res.json(result)   
            }
        } );
    }; 
    

    const weight_list = (req,res)=>{
        const sqlget = 'SELECT * from machine_info';
        db.query(sqlget, (error, result)=>{
            if(error){
                console.log(err)
            }
            else{
                return res.send(result)
            }
        })
    }


module.exports = {machine_add_before, machine_get_info, machine_add_empty, machine_add_loaded, total_loaded_weight, machine_detail, weight_list, total_empty_weight, farm_name_drop }
