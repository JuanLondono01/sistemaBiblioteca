const { Router } = require('express');
const {getUsers, createUser, getUserById, deleteUserByBId, updateUserById} = require('../controllers/user.controller')

const router = Router();



router.route('/')
<<<<<<< HEAD
    .get(getUsers) 
    .post(createUser) 


router.route('/:id')
    .get(getUserById) 
    .delete(deleteUserByBId) 
    .put(updateUserById) 
=======
    .get(authmiddleware, getUsers) 
    .post(authmiddleware, createUser) 


router.route('/:id')
    .get(authmiddleware, getUserById) 
    .delete(authmiddleware, deleteUserByBId) 
    .put(authmiddleware, updateUserById) 
>>>>>>> 717c77c111a784f461ae86012d6eb7f643d40e27

module.exports = router