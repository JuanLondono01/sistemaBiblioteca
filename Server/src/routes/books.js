const {Router} = require('express')
const router = Router()


router.route('/')
    .get() //TODO obtener la lista de libros
    .post() //TODO crear/agregar un nuevo libro

router.route('/:id')
    .get() //TODO obtener los datos de un libro
    .put() //TODO actulizar los datos de un libro
    .delete() //TODO eliminar un libro