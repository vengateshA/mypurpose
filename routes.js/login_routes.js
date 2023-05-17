const express = require('express')
const { loginpage, logout, allgetinfo } = require('../controllers/login_con')

const router = express.Router()

router.post('/loginpage', loginpage)
router.get('/logout', logout)
router.get('/allgetinfo/:id', allgetinfo)

module.exports ={router} 