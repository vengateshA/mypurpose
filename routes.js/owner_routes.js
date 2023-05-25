const express = require('express')
const {company_name, company_info, owner_delete, owner_manager_details, owner_add_manager, owner_update_managerbyid, owner_update_manager } = require('../controllers/owner_con')

const owner_router = express.Router()

owner_router.get('/company_name/:id', company_name)
owner_router.get('/company_info', company_info)
owner_router.delete('/owner_delete/:id', owner_delete)
owner_router.get('/owner_manager_details/:id', owner_manager_details)
owner_router.post('/owner_add_manager/:id', owner_add_manager)
owner_router.get('/owner_update_managerbyid/:id', owner_update_managerbyid)
owner_router.put('/owner_update_manager/:id', owner_update_manager )

module.exports={owner_router}


  