<<<<<<< HEAD
const {Router} = require('express')
const router = Router()


router.route('/')
    .get() //TODO obtener la lista de libros
    .post() //TODO crear/agregar un nuevo libro

router.route('/:id')
    .get() //TODO obtener los datos de un libro
    .put() //TODO actulizar los datos de un libro
    .delete() //TODO eliminar un libro
=======
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
>>>>>>> 717c77c111a784f461ae86012d6eb7f643d40e27
