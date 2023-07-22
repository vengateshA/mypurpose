const express = require('express')
const { choices, machine_pdf, pdf_singlvalue, pdf_empty_weight, machine_get_before } = require('../controllers/pdf_con')

const pdf_router = express.Router()


pdf_router.get('/machine_pdf', machine_pdf)
pdf_router.get('/pdf_singlevalue/:id', pdf_singlvalue)
pdf_router.get('/pdf_empty_weight/:id', pdf_empty_weight)
pdf_router.get('/machine_get_before', machine_get_before)
    

module.exports = {pdf_router}                   