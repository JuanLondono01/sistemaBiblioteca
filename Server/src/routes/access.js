const {  Router } = require('express')
const router = Router()
const {login} = require('../controllers/access.controller')

router.route('/')
    .post(login)