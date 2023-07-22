const express = require('express')
const { work, machine, machine_get, work_data, super_farmer_details } = require('../controllers/super_con')

const super_routes = express.Router()

super_routes.get('/work/:id', work)
super_routes.post('/machine', machine)
super_routes.get('/machine_get', machine_get)
super_routes.get('/work_data/:id', work_data)
super_routes.get('/super_farmer_details', super_farmer_details)


module.exports ={super_routes}          