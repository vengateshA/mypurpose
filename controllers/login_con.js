
const jwt = require("jsonwebtoken");
const { db } = require("../db");
  


const loginpage = (req, res) => {
    const sqlcheck = "SELECT * FROM loginform WHERE username = ? AND password = ?  ";
    const {id}= req.params;
    db.query(sqlcheck, [req.body.username, req.body.password, id], (err, data) => {
        if (err) return res.json({ Message: "error" });
        if (data.length > 0) {   //record is checking is available or not 
            const id = data[0].id;
            const username = data.username;
            const password = data.password;
            const token = jwt.sign({ id,username, password }, "our-jsonwebtoken-secret-key", { expiresIn: "1d" })
            res.cookie('token', token);
            return res.json({
                Status: "success",data, id
            })  
        }
        else {
            return res.json({ Message: "Please check your email and password" })
        }
    })
}

const allgetinfo = (req, res) => {
    const {id} = req.params
    const sqlGet = "SELECT * FROM loginform where id = ?";
    db.query(sqlGet, id, (error, result) => {

        if (error) {
            console.log(error);  
        } else {
            res.json(result)   
        }
    } )
}

const choice = (req, res) => {
    const sqlGet = "SELECT * FROM choice";
    db.query(sqlGet, (error, result) => {

        if (error) {
            console.log(error);  
        } else {
        return   res.json(result)   
        }
    } )
}

// app.get("/api/addchangeworker/:id",

// const addchangeworker = (req,res)=>{
//     const {id} = req.params
//     const sqlGet = "SELECT * FROM loginform where id =? "
//     db.query(sqlGet, id, (error, result)=>{
//         if(error){
//             res.status(500).send({
//                 status: "fail",
//                 message: "something went wrong"
//             })
//         }
//         else {
//             res.status(200).send({
//                 status: "success",
//                 message: "successful",
//                 data:result
//             })
//         }
//     } )
// }





const logout = (req,res) =>{
    res.clearCookie('token');
    return res.json({Status: "success"})
}

module.exports={loginpage, logout, allgetinfo, choice}