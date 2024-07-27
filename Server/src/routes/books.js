const {
    getBooks,
    addBook,
    getBookInfo,
    updateBookById,
    deleteBookById,
} = require('../controllers/book.controller');
const { Router } = require('express');
const authmiddleware = require('../middleware/authmiddleware');

const router = Router();

router
    .route('/')
    .get(authmiddleware, getBooks)
    .post(authmiddleware, addBook);

router
    .route('/:id')
    .get(authmiddleware, getBookInfo)
    .put(authmiddleware, updateBookById)
    .delete(authmiddleware, deleteBookById);

module.exports = router;
