const express = require('express')
const { loginpage, logout, allgetinfo, choice, allgetone, machine_loginpage } = require('../controllers/login_con')

const router = express.Router()

router.post('/loginpage', loginpage)
router.post('/machine_loginpage', machine_loginpage)
router.get('/logout', logout)
router.get('/allgetinfo/:id', allgetinfo)
// router.get('/allgetinfo/:id', allgetinfo)
router.get('/choice', choice)
router.get('/allgetone/:id', allgetone)

module.exports ={router}        