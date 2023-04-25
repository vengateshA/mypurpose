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
app.use(bodyParser.urlencoded({ extended: true }))

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "zts@2023",
    database: "login_page"
});

db.getConnection((err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log("connected")
    }
})


app.get("/api/get", (req, res) => {
    const sqlGet = "";
    db.query("select * from logindata", (error, result) => {
        if (error) {
            console.log(error);
        } else {
            return res.send(result);
        }
    })
})

app.post("/api/login", (req, res) => {
    const sqlcheck = "SELECT * FROM user WHERE email = ? AND password = ? ";
    db.query(sqlcheck, [req.body.email, req.body.password], (err, data) => {
        if (err) return res.json({ Message: "error" });
        if (data.length > 0) {
            const email = data.email;
            const password = data.password;
            const token = jwt.sign({ email, password }, "our-jsonwebtoken-secret-key", { expiresIn: "1d" })
            res.cookie('token', token);
            return res.json({
                Status: "success",data
            })
        }
        else {
            return res.json({ Message: "no records found" })
        }
    })
})

app.listen(6003, () => {
    console.log("listening 6002")
})  