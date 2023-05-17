const express = require('express')
const { company_branch_name, branch_info, manager_delete, manager_super_details, manager_add_super, manager_update_superbyid, manager_update_super, manager_work_super } = require('../controllers/manager_con')

const manager_router = express.Router()

manager_router.get('/company_branch_name/:id', company_branch_name)
manager_router.get('/branch_info', branch_info)
manager_router.delete('/manager_delete/:id', manager_delete)
manager_router.get('/manager_super_details/:id',manager_super_details )
manager_router.post('/manager_add_super', manager_add_super)
manager_router.get('/manager_update_superbyid/:id', manager_update_superbyid)
manager_router.put('/manager_update_super/:id', manager_update_super)
manager_router.post('/manager_work_super', manager_work_super)


module.exports={manager_router}

