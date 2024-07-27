const { Router } = require('express');
const {getUsers, createUser, getUserById, deleteUserByBId, updateUserById} = require('../controllers/user.controller')
const authmiddleware = require('../middleware/authmiddleware')

const router = Router();



router.route('/')
    .get(authmiddleware, getUsers) 
    .post(authmiddleware, createUser) 


router.route('/:id')
    .get(authmiddleware, getUserById) 
    .delete(authmiddleware, deleteUserByBId) 
    .put(authmiddleware, updateUserById) 

module.exports = router