const { Router } = require('express');
const { check } = require('express-validator');
const { crearCategoria,
     obtenerCategorias,
     obtenerCategoria,
     actualizarCategoria,
     borrarCategoria } = require('../controllers/categorias');
const { existeCategoriaPorId } = require('../helpers/db_validators');
const { validarJWT, validarCampos, esAdminRole} = require('../middlewares');


const router = Router();


//obtener todas las categorias - publico
router.get('/', obtenerCategorias);

//obtener una categoria por id - publico
router.get('/:id', [
    check('id', 'No es un id de mongo valido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], obtenerCategoria);

//Crear categoria - cualquier persona con un id valido
router.post('/', [
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    validarCampos
], crearCategoria);

//Actualizar - privado - cualquiera con token valido
router.put('/:id', [
    validarJWT,
    check('nombre', 'el nombre es obligatorio').not().isEmpty(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
], actualizarCategoria);

//Borrar categoria - Admin
router.delete('/:id',[
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de mongo valido').isMongoId(),
    check('id').custom(existeCategoriaPorId),
    validarCampos
],
borrarCategoria);



module.exports = router;