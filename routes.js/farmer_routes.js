const express = require('express')
const { farmer_info } = require('../controllers/farmer_con')


const farmer_router = express.Router()

farmer_router.get('/farmer_info', farmer_info)

module.exports = {farmer_router}