const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");
const cookieParser = require("cookie-parser")
const jwt = require("jsonwebtoken")
const bodyParser = require("body-parser");
const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors(
    {
    origin: ["http://localhost:5173"],
    methods: ["POST,GET"],
    credentials: true
}
))
app.use(bodyParser.urlencoded({extended:true}))

const db = mysql.createPool({
    host: "localhost",
    user:"root",
    password:"systemzts@2023",
    database:"paultryform"
});

db.getConnection((err)=>{
    if(err){
        console.log(err)
    }
    else{
        console.log("connected")
    }
})


// get method

app.get("/api/get",(req, res)=>{
    const sqlGet = "SELECT * FROM inputdata";
    db.query(sqlGet, (error, result)=>{
        if(error){
            res.status(500).send({
                status:"fail",
                message:  "something went wrong"
            })
        }
        else{
            res.send(result)
            // res.status(200).send({
            //     status: "success",
            //     meassage: "deleted successfully"
            // })
        }    
    })
   })

   app.get("/api/getme",(req, res)=>{
    const sqlGet = "SELECT username,contact FROM inputdata";
    db.query(sqlGet, (error, result)=>{
        if(error){
            res.status(500).send({
                status:"fail",
                message:  "something went wrong"
            })
        }
        else{
            // res.send(result)
            res.status(200).send({
                status: "success",
                meassage: "deleted successfully"
            })
        }    
    })
   })
   
   

   // delete method

app.delete("/api/delete/:id",(req, res)=>{
    const{id}= req.params;
    const sqlDel = "DELETE FROM inputdata WHERE id = ?";
    db.query(sqlDel, id,(error, result)=>{
        if(error){
            res.status(500).send({
                status: "fail",
                message: "something went wrong"
            })
        }
        else{
            res.status(200).send({
                status: "success",
                meassage: "deleted successfuly"
            })
        }
    }) 
})

//  post method
// when id in auto increment that will not give in the post method
app.post('/api/post',(req,res)=>{
    const{ username, contact, email, native} = req.body;
    const sqlPost = "INSERT INTO inputdata (  username, contact, email, native) VALUES ( ?, ?, ?, ?)";
    db.query(sqlPost,[ username, contact, email, native], (error,result)=>{
    if(error){
        res.status(500).send({
            status: "fail",
            message: "something went wrong"
        })
    }
        else{
              res.send(result)
            // res.status(200).send({
            //     status: "success",
            //     message: "succesfull"
            // })
        }
    
})
})

// update method
   app.put('/api/put/:id',(req,res)=>{
    const{id} = req.params;
    const{ username, contact, email, native} = req.body;  
    const sqlPost = "UPDATE inputdata SET username = ?, contact = ?, email = ?, native = ? WHERE id = 5";
    db.query(sqlPost,[ username, contact, email, native, id], (error,result)=>{
    if(error){
        res.status(500).send({
            status: "fail",
            message: "something went wrong"
        })
    }
        else{
            res.status(200).send({
                status: "success",
                message: "succesfull"
            })
        }
    
})
})

// updated data get in list using where id is located

app.get("/api/update/:id",(req, res)=>{
    const{id}= req.params;
    const sqlUpdate = "SELECT * FROM inputdata WHERE id = ?";
    db.query(sqlUpdate, id, (error, result)=>{
        if(error){
            res.status(500).send({
                status:"fail",
                message:  "something went wrong"
            })
        }
        else{
             // res.send(result)
            res.status(200).send({
                status: "success",
                meassage: "deleted successfully"
            })
        }    
    })
   })

// checking
   app.post("/api/login",(req,res)=>{
    const sqlcheck = "SELECT * FROM logindata WHERE myusername = ? AND mypassword = ?  ";
    db.query(sqlcheck,[req.body.myusername, req.body.mypassword], (err,data)=>{
    if(err) return res.json({ Message: "error"});
    if(data.length>0){
        const name = data[0].name;
        const token = jwt.sign({name}, "our-jsonwebtoken-secret-key",{expiresIn: "1d"}) 
        res.cookie('token', token);
        return res.json({Status:"success"})
    } 
    else{
        return res.json({Message: "no records found"})
    }

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
})

                                                                                                                           
app.listen(6002,()=>{
    console.log("listening 6002")
})