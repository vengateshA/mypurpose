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

    

const farmer_map = (req, res) => {
    const{id} = req.params
    const searchTerm =  id ;
    const sqlGet = "select * from loginform inner join farmers on loginform.username = farmers.username and loginform.addedby = farmers.addedby  where loginform.id like ?  ; ";
    db.query(sqlGet, searchTerm, (err, result) => {
        if (err) return res.json({ Error: "get trader error in sql" })
        return res.json({ Status: "success", Result: result })
    }) 
}  

const farmer_map_filter = (req, res) => {
    const sqlGet = "select * from loginform inner join farmers on loginform.username = farmers.username and loginform.addedby = farmers.addedby   ; ";
    db.query(sqlGet,   (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // res.json({result}) 
            return res.send(result);
        }
    }) 
}  




const manager_delete_farmer = (req, res) => { 
    const { id } = req.params;
    const sqlDel = "DELETE * FROM farmers  where id=? "; 
    db.query(sqlDel, id, (error, result) => {
        if (error) return res.json({ Message: "error inside server" });
        return res.json(result); 
    });
};

const manager_farmer_details = (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM farmers WHERE farmer_id=?";
    db.query(sqlGet, id, (error, result) => { 
        if (error) {
            console.log(error);
        } else {
            // res.json({result})
            return res.send(result);
        }
    })
}


const manager_add_farmer = (req, res) => {
    const { farm_name, farmer_name, farmer_number, farmer_gender, farmer_address, city, state, farmer_location, username, addedby, pincode, id, spl_id} = req.body;
    const sqlPost = "INSERT INTO farmers (farm_name, farmer_name, farmer_number, farmer_gender, farmer_address, city, state, farmer_location, username, addedby, pincode, id, spl_id) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlPost, [farm_name, farmer_name, farmer_number, farmer_gender, farmer_address, city, state, farmer_location, username, addedby, pincode, id, spl_id], (err, result) => {
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

const manager_update_farmerbyid = (req, res) => {
    const { id } = req.params; 
    const sqlGet = "SELECT * FROM farmers WHERE farmer_id=?"
    db.query(sqlGet, id, (err, result) => {
        if (err) return res.json({ Error: "get trader error in sql" })
        return res.json({ Status: "success", Result: result })
    });
};


const manager_update_farmer = (req, res) => {
    const { farmer_id } = req.params;
    const { farm_name, farmer_name, farmer_number, farmer_gender, farmer_address, city, state, farmer_location, username, addedby, pincode } = req.body
    const sqlupdate = "UPDATE farmers SET farm_name = ?, farmer_name = ?,  farmer_gender = ?, farmer_address = ?, city = ?, state = ?, farmer_location = ?, username = ?, addedby = ?, pincode = ? where farmer_id =?";
    db.query(sqlupdate, [farm_name, farmer_name, farmer_number, farmer_gender, farmer_address, city, state, farmer_location, username, addedby, pincode, farmer_id ], (err, result) => {
        if (err) return res.json({ Error: "update trader error in sql" })
        return res.json({ Status: "success", Result: result })  
    });
};




 

module.exports = {farmer_info, manager_add_farmer, manager_delete_farmer, manager_update_farmer, manager_update_farmerbyid, manager_farmer_details, farmer_map, farmer_map_filter}  