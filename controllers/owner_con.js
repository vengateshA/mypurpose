const { db } = require("../db");


const company_name = (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM loginform WHERE id = ?"
    db.query(sqlGet, id, (error, result) => {
        if (error) {
            console.log(error);
        }
        res.send(result)
    });
};



const company_info = (req, res) => {

    const sqlGet = "SELECT * FROM loginform"
    db.query(sqlGet, (error, result) => {
        if (error) {
            console.log(error);
        } else {
            // res.json({result})
            return res.send(result);
        }
    });
};



const owner_delete = (req, res) => {
    const { id } = req.params;
    const sqlDel = "DELETE FROM loginform where id=? ";
    db.query(sqlDel, id, (error, result) => {
        if (error) return res.json({ Message: "error inside server" });
        return res.json(result);
    });
};

const owner_manager_details = (req, res) => {
    const { id } = req.params;
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

const owner_add_manager = (req, res) => {
    const { roles, username, password, addedby, companyname, branchname, personname,  gender, phonenumber, alternumber, email, address, city, state, pincode } = req.body;
    const sqlPost = "INSERT INTO loginform (roles, username, password, addedby, companyname, branchname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
    db.query(sqlPost, [roles, username, password, addedby, companyname, branchname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode], (err, result) => {
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


// //for updation get id from trader
const owner_update_managerbyid = (req, res) => {
    const { id } = req.params;
    const sqlGet = "SELECT * FROM loginform WHERE id=?"
    db.query(sqlGet, id, (err, result) => {
        if (err) return res.json({ Error: "get trader error in sql" })
        return res.json({ Status: "success", Result: result })
    });
};

// // update trader using put method
const owner_update_manager = (req, res) => {
    const { id } = req.params;
    const { username, password, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode } = req.body
    const sqlupdate = "UPDATE loginform SET username = ?, password = ?,  companyname = ?, personname = ?, gender = ?, phonenumber = ?, alternumber = ?, email = ?, address = ?, city = ?, state = ?, pincode = ? WHERE id = ? "
    db.query(sqlupdate, [username, password, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode, id], (err, result) => {
        if (err) return res.json({ Error: "update trader error in sql" })
        return res.json({ Status: "success", Result: result })
    });
};

module.exports = { company_name, company_info, owner_delete, owner_manager_details,  owner_add_manager, owner_update_managerbyid, owner_update_manager  }
