const express = require('express')
const { getinfo,  deletelogin, Admin_add_owner, Admin_owner_details, Admin_update_ownerbyid, Admin_update_owner } = require('../controllers/admin_con')

const admin_router = express.Router()


admin_router.get('/getinfo', getinfo)
admin_router.delete('/deletelogin/:id', deletelogin)
admin_router.post('/Admin_add_owner', Admin_add_owner)
admin_router.get('/Admin_owner_details/:id', Admin_owner_details)
admin_router.get('/Admin_update_ownerbyid/:id', Admin_update_ownerbyid)
admin_router.put('/Admin_update_owner/:id', Admin_update_owner)



module.exports={admin_router}  