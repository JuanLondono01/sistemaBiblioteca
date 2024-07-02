const { Router } = require('express');
const { getAllLoans, loanBook, returnBook } = require('../controllers/loan.controller');
const router = Router();

router.route('/').get(getAllLoans);

router.route('/').post(loanBook);

router.route('/return/:loanId').post(returnBook);

module.exports = router