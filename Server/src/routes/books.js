const {
    getBooks,
    addBook,
    getBookInfo,
    updateBookById,
    deleteBookById,
} = require('../controllers/book.controller');
const { Router } = require('express');
const router = Router();

router.route('/')
    .get(getBooks)
    .post(addBook);

router.route('/:id')
    .get(getBookInfo)
    .put(updateBookById)
    .delete(deleteBookById);


module.exports = router;