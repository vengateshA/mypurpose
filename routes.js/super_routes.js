const express = require('express')
const { work } = require('../controllers/super_con')

const super_routes = express.Router()

super_routes.get('/work/:id', work)


module.exports ={super_routes}  