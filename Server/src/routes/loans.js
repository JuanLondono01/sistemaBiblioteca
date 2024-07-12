<<<<<<< HEAD
const {Router} = require('express')
const router = Router()

router.route('/')
    .get() //TODO obtener informacion de los prestamos
=======
const { Router } = require('express');
const {
    getAllLoans,
    loanBook,
    returnBook,
} = require('../controllers/loan.controller');
const authmiddleware = require('../middleware/authmiddleware');

const router = Router();
router
    .route('/')
    .get(authmiddleware, getAllLoans);

router
    .route('/')
    .post(authmiddleware, loanBook);

router
    .route('/return/:loanId')
    .post(authmiddleware, returnBook);

module.exports = router;
>>>>>>> 717c77c111a784f461ae86012d6eb7f643d40e27
