const express = require('express')
const { farmer_info, manager_delete_farmer, manager_farmer_details, manager_add_farmer, manager_update_farmerbyid, manager_update_farmer, farmer_map, farmer_map_filter, farmer_single_info } = require('../controllers/farmer_con')


const farmer_router = express.Router()

farmer_router.get('/farmer_info', farmer_info)
// farmer_router.get('/farmer_single_info/:id', farmer_single_inf)
farmer_router.get('/farmer_map/:id', farmer_map)
farmer_router.get('/farmer_map_filter', farmer_map_filter)
farmer_router.delete('/manager_delete_farmer/:id', manager_delete_farmer)
farmer_router.get('/manager_farmer_details/:id',manager_farmer_details )
farmer_router.post('/manager_add_farmer/:id', manager_add_farmer)
farmer_router.get('/manager_update_farmerbyid/:id', manager_update_farmerbyid)
farmer_router.put('/manager_update_farmer/:id', manager_update_farmer) 

module.exports = {farmer_router}   