const express = require ('express')
const { machine_add_before, machine_get_info, machine_add_empty, machine_add_loaded, machine_pdf, time, machine_detail, weight_list, total_loaded_weight, total_empty_weight, farm_name_drop } = require('../controllers/machine_con')


const machine_router = express.Router()


machine_router.get('/machine_get_info', machine_get_info )
machine_router.post('/machine_add_before', machine_add_before)
machine_router.post('/machine_add_empty', machine_add_empty)
machine_router.post('/machine_add_loaded', machine_add_loaded)
// machine_router.get('/machine_pdf', machine_pdf)
machine_router.get('/total_loaded_weight', total_loaded_weight)
machine_router.get('/total_empty_weight', total_empty_weight)
machine_router.get('/machine_detail/:id', machine_detail)
machine_router.get('/weight_list', weight_list)
machine_router.get('/farm_name_drop', farm_name_drop)   


module.exports={machine_router} 