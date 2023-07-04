const { db } = require("../db");


const getinfo = (req, res) => {
    const sqlGet = "SELECT * FROM loginform";
    db.query(sqlGet, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            // res.json({result}) 
            return res.send(result);
        }
    })  
}  
 

const deletelogin = (req, res)=>{
    const {id}= req.params;
    const sqlDel = "DELETE FROM loginform where id=? ";
    db.query(sqlDel, id,(error, result)=>{
    if(error) return res.json({Message: "error inside server"});
    return res.json(result);
    }) ;
};

const Admin_owner_details = (req, res) => {
    const {id}= req.params;
    const sqlGet = "SELECT * FROM loginform WHERE id=?";
    db.query(sqlGet, id, (error, result) => { 
        if (error) {
            console.log(error);  
        } else {
            res.json(result)
            // return res.send(result);
        }
    })
}

const Admin_add_owner=(req,res)=>{
    const{roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode} = req. body;
    const sqlPost = "INSERT INTO loginform (roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlPost,[roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode ], (error,result)=>{
 
    //            if (err) return res.json({Error:"get trader error in sql"})
    // return res.json({Status: "success", Result: result})
    if(error){
        res.status(500).send({
            status: "fail",
            message: "something went wrong"
        })
    }
        else{
            //   res.send(result)
            res.status(200).send({
                status: "success",
                message: "succesfull",
            
            })
        }    
})
}


// //for updation get id from trader
const Admin_update_ownerbyid = (req,res)=>{
    const{id} = req.params;
    const sqlGet ="SELECT * FROM loginform WHERE id=?"
    db.query(sqlGet, id, (err, result)=>{
        if (err) return res.json({Error:"get trader error in sql"})
    return res.json({Status: "success", Result: result})
});
};

// // update trader using put method
const Admin_update_owner = (req,res)=>{
    const {id} =req.params;
    const { username, password,  companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode} = req.body
    const sqlupdate ="UPDATE loginform SET username = ?, password = ?,  companyname = ?, personname = ?, gender = ?, phonenumber = ?, alternumber = ?, email = ?, address = ?, city = ?, state = ?, pincode = ? WHERE id = ? "
    db.query(sqlupdate, [ username, password,  companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode, id], (err,result)=>{
         if (err) return res.json({Error:"update trader error in sql"})
         return res.json({Status: "success", Result: result})
    });
};


const count_user = (req, res)=>{
    const sqlcount = "select count(username) from loginform where roles like 'own%' "
    db.query(sqlcount, (err, result)=>{
        if (err) return res.json({Error:"update trader error in sql"})
        return res.json({Status: "success", Result: result})

    })
}

const count_active = (req, res)=>{
    const sqlcount = "select count(roles) from loginform where roles = 'owner' "
    db.query(sqlcount, (err, result)=>{
        if (err) return res.json({Error:"update trader error in sql"})
        return res.json({Status: "success", Result: result})

    })
}

const count_inactive = (req, res)=>{
    const sqlcount = "select count(roles) from loginform where roles = 'ownerdi' "
    db.query(sqlcount, (err, result)=>{
        if (err) return res.json({Error:"update trader error in sql"})
        return res.json({Status: "success", Result: result})

    })
}
// app.put('/api/updatelogin/:id',(req, res)=>{
    const disable_user = (req, res)=>{
        const updatesql = "UPDATE loginform SET roles='ownerdi' WHERE id=?";
        const {id}= req.params;
        db.query(updatesql, id,(error, result)=>{
            if(error) return res.json({Message: "error inside server"});
            return res.json(result);
            }) ;
    }

//activate the user
// app.put('/api/enablelogin/:id',(req, res)=>{
const enable_user = (req, res)=>{
    const updatesql = "UPDATE loginform SET roles='owner' WHERE id=?";
    const {id}= req.params;
    db.query(updatesql, id,(error, result)=>{
        if(error) return res.json({Message: "error inside server"});
        return res.json(result);
        }) ;
}



module.exports={getinfo, deletelogin, Admin_owner_details, Admin_add_owner, Admin_update_owner, Admin_update_ownerbyid, Admin_update_owner, count_user, count_active, count_inactive, disable_user, enable_user } 