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
