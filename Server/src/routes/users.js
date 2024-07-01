const { Router } = require('express');

const router = Router();



router.route('/')
    .get() //TODO obtener la lista de usuarios
    .post() //TODO crear/agregar nuevo usuario


router.route('/:id')
    .get() //TODO obtener los datos de un usuario
    .delete() //TODO eliminar un usuario
    .put() //TODO actualizar datos de un usuario
