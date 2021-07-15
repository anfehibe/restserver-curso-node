const { Router } = require('express');
const { check } = require('express-validator');
const { validarCampos, validarArchivoSubir } = require('../middlewares');
const { cargarArchivos, actualzaImagen, mosrtarImagen, actualzaImagenCloudinary } = require('../controllers/uploads'); 
const { coleccionesPermitidas } = require('../helpers');


const router = Router();

router.post('/',validarArchivoSubir, cargarArchivos);

router.put('/:coleccion/:id', [
    validarArchivoSubir,
    check('id', 'El id debe ser de Mongo').isMongoId(),
    check('coleccion').custom(c => coleccionesPermitidas(c, ['usuarios','productos'])),
    validarCampos
], actualzaImagenCloudinary);
// ], actualzaImagen);

router.get('/:coleccion/:id', [
    check('id', 'El id debe ser de Mongo').isMongoId(),
    check('coleccion').custom(c => coleccionesPermitidas(c, ['usuarios','productos'])),
    validarCampos
], mosrtarImagen);


module.exports = router;