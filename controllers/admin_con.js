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
            // res.json({result})
            return res.send(result);
        }
    })
}

const Admin_add_owner=(req,res)=>{
    const{roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode} = req. body;
    const sqlPost = "INSERT INTO loginform (roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlPost,[roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode], (err,result)=>{
               if (err) return res.json({Error:"get trader error in sql"})
    return res.json({Status: "success", Result: result})
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







module.exports={getinfo, deletelogin, Admin_owner_details, Admin_add_owner, Admin_update_owner, Admin_update_ownerbyid, Admin_update_owner }