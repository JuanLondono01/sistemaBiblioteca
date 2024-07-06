const { Router } = require('express');
const {getUsers, createUser, getUserById, deleteUserByBId, updateUserById} = require('../controllers/user.controller')

const router = Router();



router.route('/')
    .get(getUsers) 
    .post(createUser) 


router.route('/:id')
    .get(getUserById) 
    .delete(deleteUserByBId) 
    .put(updateUserById) 

module.exports = router