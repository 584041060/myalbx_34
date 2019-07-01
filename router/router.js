//封装路由模块
const express = require('express')
const router = express.Router()
const pagesController = require('../controllers/pagesController.js')
router.get('/', pagesController.getIndexPage)
module.exports = router