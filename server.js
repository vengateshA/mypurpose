const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const { router } = require("./routes.js/login_routes");
const { admin_router } = require("./routes.js/admin_routes");
const { owner_router } = require("./routes.js/owner_routes");
const { manager_router } = require("./routes.js/manager_routes");
const { super_routes } = require("./routes.js/super_routes");
const { farmer_router } = require("./routes.js/farmer_routes");
const { machine_router } = require("./routes.js/machine_routes");
const { pdf_router } = require("./routes.js/pdf_routes");


// const { routers } = require("./routes.js/admin");
// const jwt = require("jsonwebtoken")
// const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());   
app.use(cors())
 
app.use('/api', router )
app.use('/api', admin_router)
app.use('/api', owner_router)
app.use('/api', manager_router)
app.use('/api', super_routes)
app.use('/api', farmer_router)   
app.use('/api', machine_router)   
app.use('/api', pdf_router)
// app.use('/api', routers) 


// const db = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "systemzts@2023",
//     database: "chickenfarm"
// });  


app.listen(5001, () => {
    console.log("listening 5001")
})  

// app.get('/api/logout', (req,res) =>{
//     res.clearCookie('token');
//     return res.json({Status: "success"})
// })


// app.get("/api/getinfo", (req, res) => {
//     const sqlGet = "SELECT * FROM loginform";
//     db.query(sqlGet, (error, result) => {
//         if (error) {
//             console.log(error);
//         } else {
//             return res.send(result);
//         }
//     })
// })



// //login system login page checking
// app.post("/api/loginpage", (req, res) => {
//     const sqlcheck = "SELECT * FROM loginform WHERE username = ? AND password = ?  ";
//     const {id}= req.params;
//     db.query(sqlcheck, [req.body.username, req.body.password, id], (err, data) => {
//         if (err) return res.json({ Message: "error" });
//         if (data.length > 0) {   //record is checking is available or not 
//             const id = data[0].id;
//             const username = data.username;
//             const password = data.password;
//             const token = jwt.sign({ id,username, password }, "our-jsonwebtoken-secret-key", { expiresIn: "1d" })
//             res.cookie('token', token);
//             return res.json({
//                 Status: "success",data, id
//             })
//         }
//         else {
//             return res.json({ Message: "Please check your email and password" })
//         }
//     })
// })

// // get the trader details

// app.get("/api/traderdetails",(req, res)=>{
//     const getsql = "select * from loginform"
//     db.query(getsql, (error, result)=>{
//         if(error){
//             console.log(error)
//         }
//         else{
//             return res.send(result)
//         }
//     })
// })


// app.delete("/api/deletelogin/:id",(req, res)=>{
//     const {id}= req.params;
//     const sqlDel = "DELETE FROM loginform where id=? ";
//     db.query(sqlDel, id,(error, result)=>{
//     if(error) return res.json({Message: "error inside server"});
//     return res.json(result);
//     }) ;
// });


// app.post('/api/addtrader',(req,res)=>{
//     const{roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode} = req. body;
//     const sqlPost = "INSERT INTO loginform (roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//     db.query(sqlPost,[roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode], (err,result)=>{
//                if (err) return res.json({Error:"get trader error in sql"})
//     return res.json({Status: "success", Result: result})
//     // if(error){
//     //     res.status(500).send({
//     //         status: "fail",
//     //         message: "something went wrong"
//     //     })
//     // }
//     //     else{
//     //           res.send(result)
//     //         // res.status(200).send({
//     //         //     status: "success",
//     //         //     message: "succesfull"
//     //         // })
//     //     }    
// })
// })

// //for updation get id from trader
// app.get("/api/gettraderforupdate/:id", (req,res)=>{
//     const{id} = req.params;
//     const sqlGet ="SELECT * FROM loginform WHERE id=?"
//     db.query(sqlGet, id, (err, result)=>{
//         if (err) return res.json({Error:"get trader error in sql"})
//     return res.json({Status: "success", Result: result})
// });
// });

// // update trader using put method
// app.put("/api/updatetrader/:id", (req,res)=>{
//     const {id} =req.params;
//     const { username, password,  companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode} = req.body
//     const sqlupdate ="UPDATE loginform SET username = ?, password = ?,  companyname = ?, personname = ?, gender = ?, phonenumber = ?, alternumber = ?, email = ?, address = ?, city = ?, state = ?, pincode = ? WHERE id = ? "
//     db.query(sqlupdate, [ username, password,  companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode, id], (err,result)=>{
//          if (err) return res.json({Error:"update trader error in sql"})
//          return res.json({Status: "success", Result: result})
//     });
// });



// //view 
// app.get("/api/view/:id",(req,res)=>{
//     const{id} = req.params;
//     const sqlGet ="SELECT * FROM loginform WHERE id=?"
//     db.query(sqlGet, id, (error, result ) =>{
//         if(error){
//             console.log(error);
//         }
//         res.send(result)
//     });
// });



// // Worker api 

// app.get("/api/viewworker",(req,res)=>{

//     const sqlGet ="SELECT * FROM loginform where roles='worker' "
//     db.query(sqlGet,  (error, result)=>{
//         if(error){
//             res.status(500).send({
//                 status: "fail",
//                 message: "something went wrong"
//             })
//         }
//             else{
//                 res.status(200).send({
//                     status: "success",
//                     message: "successful",
//                     data:result
//                 })
//             }
      
//     })
// })



// app.get("/api/viewi/:id",(req,res)=>{
//     const{id} = req.params;
//     const sqlGet ="SELECT * FROM loginform WHERE id=?"
//     db.query(sqlGet, id, (error, result ) =>{
//         if(error){
//             console.log(error);
//         }
//         res.send(result)
//     });
// });


// app.get("/api/addchangeworker/:id",(req,res)=>{
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
// })

// app.post('/api/addworker',(req,res)=>{
//     const{roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode} = req. body;
//     const sqlPost = "INSERT INTO loginform (roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?)";
//     db.query(sqlPost,[roles, username, password, addedby, companyname, personname, gender, phonenumber, alternumber, email, address, city, state, pincode], (error,result)=>{
//     //            if (err) return res.json({Error:"get trader error in sql"})
//     // return res.json({Status: "success", Result: result})
//     if(error){
//         res.status(500).send({
//             status: "fail",
//             message: "something went wrong"
//         })
//     }
//         else{
//               res.send(result)
//             // res.status(200).send({
//             //     status: "success",
//             //     message: "succesfull",
//             // })

//         }    
// })
// })


// //view single worker

// app.get("/api/viewsingleworker/:id",(req,res)=>{
//     const{id} = req.params;
//     const sqlGet ="SELECT * FROM loginform WHERE id=?"
//     db.query(sqlGet, id, (error, result ) =>{
//         if(error){
//             console.log(error);
//         }
//         res.send(result)
//     });
// });


// /////Trader pagge pro



// app.get('/api/tradepagpro/companyname/:id',(req,res)=>{
//     const {id} = req.params
//     const sql= "select * from loginform where id = ?"
//     db.query(sql, id, (error, result)=>{
//         if(error){
//             console.log(err)
//         }

//         else{
                       
//             res.send({data:result})

//         }
//     })
// })
