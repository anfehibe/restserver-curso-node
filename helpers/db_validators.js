const Role = require('../models/role');
const {Usuario, Categoria, Producto} = require('../models');

const esRoleValido = async(rol = '') => {
    const existeRol = await Role.findOne({ rol });
    if (!existeRol) {
        throw new Error(`EL rol ${rol} no esta regoistrado en la BD`);
    }
}
const emailExiste = async(correo = '') => {
    //verificar si el correo existe
    const existeEmail = await Usuario.findOne({ correo });
    if (existeEmail) {
        throw new Error(`El correo ${correo} ya está regoistrado en la BD`);
    }
}
const existeUsuarioPorId = async(id) => {
    //verificar si el correo existe
    const existeUsuario = await Usuario.findById(id);
    if (!existeUsuario) {
        throw new Error(`El id "${id}" no existe en la BD`);
    }
}

/* 
Categorias
*/

const existeCategoriaPorId = async(id) => {
    const existeCategorias = await Categoria.findById(id);
    if (!existeCategorias) {
        throw new Error(`El id "${id}" no existe en la BD`);
    }
}
/* Productos */
const existeProductoPorId = async(id) => {
    const existeProductos = await Producto.findById(id);
    if (!existeProductos) {
        throw new Error(`El id "${id}" no existe en la BD`);
    }
}
/**
 * Validar Colecciones permitidas
 */
const coleccionesPermitidas = ( coleccion = '', colecciones = []) =>{
    const incluida = colecciones.includes( coleccion );
    if (!incluida) {
        throw new Error(`La colección ${coleccion} no es permitida, ${colecciones}`);
    }
    return true;
}
module.exports = {
    esRoleValido,
    emailExiste,
    existeUsuarioPorId,
    existeCategoriaPorId,
    existeProductoPorId,
    coleccionesPermitidas
}